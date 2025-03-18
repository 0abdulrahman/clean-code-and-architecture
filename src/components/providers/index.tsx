import NextAuthProvider from "./components/next-auth.provider";
import {
  Locale,
  NextIntlClientProvider,
  useLocale,
  useMessages,
  useNow,
  useTimeZone,
} from "next-intl";
import ReactQueryProvider from "./components/react-query.provider";
import { getFormats } from "@/i18n/request";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  // Translation
  const messages = useMessages();
  const locale = useLocale() as Locale;
  const timezone = useTimeZone();
  const now = useNow();

  return (
    <ReactQueryProvider>
      <NextAuthProvider>
        <NextIntlClientProvider
          messages={messages}
          locale={locale}
          timeZone={timezone}
          now={now}
          formats={getFormats(locale)}
        >
          {children}
        </NextIntlClientProvider>
      </NextAuthProvider>
    </ReactQueryProvider>
  );
}
