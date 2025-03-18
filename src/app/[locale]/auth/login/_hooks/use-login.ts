/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRouter } from "@/i18n/routing";
import { LoginFields } from "@/lib/schemes/auth.schema";
import { AuthenticationError } from "@/lib/utils/app-errors";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function useLogin() {
  // Navigation
  const router = useRouter();
  const searchParams = useSearchParams();

  // Mutation
  const { isPending, error, mutate } = useMutation({
    mutationFn: async ({ email, password }: LoginFields) => {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: decodeURIComponent(searchParams.get("callbackUrl") || "/"),
      });

      if (response?.error) throw new AuthenticationError(response.error);

      return response;
    },
    onSuccess: (data) => {
      // Redirect to the callback URL after a successful login
      window.location.href = data?.url || "/";
    },
  });

  return { isPending, error, login: mutate };
}
