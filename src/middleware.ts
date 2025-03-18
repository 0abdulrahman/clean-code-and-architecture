import { withAuth } from "next-auth/middleware";
import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";
import { getToken } from "next-auth/jwt";

const authPages = ["/auth/login", "/auth/register"];
const publicPages = ["/", ...authPages];

const handleI18nRouting = createMiddleware(routing);

const authMiddleware = withAuth(
  // Note that this callback is only invoked if
  // the `authorized` callback has returned `true`
  // and not for pages listed in `pages`.
  function onSuccess(req) {
    return handleI18nRouting(req);
  },
  {
    callbacks: {
      authorized: ({ token }) => token != null,
    },
    pages: {
      signIn: "/auth/login",
    },
  }
);

export default async function middleware(req: NextRequest) {
  // Variables
  const token = await getToken({ req });
  const publicPathnameRegex = RegExp(
    `^(/(${routing.locales.join("|")}))?(${publicPages
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i"
  );
  const authPathnameRegex = RegExp(
    `^(/(${routing.locales.join("|")}))?(${authPages
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i"
  );
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);
  const isAuthPage = authPathnameRegex.test(req.nextUrl.pathname);

  if (isPublicPage) {
    // Redirect to homepage if user is authenticated and attempting to access an auth page
    if (token && isAuthPage) {
      const redirectUrl = new URL("/", req.nextUrl.origin);

      // Include current search params
      Object.entries(req.nextUrl.searchParams).map(([key, value]) =>
        redirectUrl.searchParams.set(key, value)
      );

      return NextResponse.redirect(redirectUrl);
    }

    return handleI18nRouting(req);
  } else {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (authMiddleware as any)(req);
  }
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
