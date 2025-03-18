import { useTranslations } from "next-intl";
import LoginForm from "./_components/login-form";

export default function Page() {
  // Translation
  const t = useTranslations();

  return (
    <main className="min-h-screen flex flex-col gap-16 items-center justify-center">
      {/* Heading */}
      <h1 className="font-bold text-5xl">{t("welcome-back")}</h1>

      {/* Form */}
      <LoginForm />
    </main>
  );
}
