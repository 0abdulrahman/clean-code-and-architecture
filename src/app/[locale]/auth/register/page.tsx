import { useTranslations } from "next-intl";
import RegisterForm from "./_components/register-form";

export default function Page() {
  // Translation
  const t = useTranslations();

  return (
    <main className="min-h-screen flex items-center justify-center">
      {/* Heading */}
      <h1 className="font-bold text-5xl">{t("newcomer-welcome")}</h1>

      {/* Form */}
      <RegisterForm />
    </main>
  );
}
