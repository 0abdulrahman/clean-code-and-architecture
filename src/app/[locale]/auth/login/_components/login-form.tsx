"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginFields, useLoginSchema } from "@/lib/schemes/auth.schema";
import { PasswordInput } from "@/components/common/password-input";
import useLogin from "../_hooks/use-login";
import SubmitFeedback from "@/components/common/submit-feedback";
import { useRouter } from "@/i18n/routing";

export default function LoginForm() {
  // Translation
  const t = useTranslations();

  // Navigation
  const router = useRouter();

  // Hooks
  const loginSchema = useLoginSchema();
  const { isPending, error, login } = useLogin();

  // Form
  const form = useForm<LoginFields>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Functions
  const onSubmit: SubmitHandler<LoginFields> = (values) => {
    login(values);
  };

  return (
    <Card className="w-full max-w-md">
      {/* Header */}
      <CardHeader>
        {/* Title */}
        <CardTitle className="text-2xl">{t("login")}</CardTitle>

        {/* Description */}
        <CardDescription>{t("login-description")}</CardDescription>
      </CardHeader>

      {/* Content */}
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel>{t("email-label")}</FormLabel>

                  {/* Field */}
                  <FormControl>
                    <Input
                      type="email"
                      placeholder={t("email-placeholder")}
                      autoComplete="email"
                      {...field}
                    />
                  </FormControl>

                  {/* Feedback */}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel>{t("password-label")}</FormLabel>

                  {/* Field */}
                  <FormControl className="relative">
                    <PasswordInput {...field} autoComplete="current-password" />
                  </FormControl>

                  {/* Feedback */}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Feedback */}
            {<SubmitFeedback>{error?.message}</SubmitFeedback>}

            {/* Submit */}
            <Button
              type="submit"
              className="w-full"
              disabled={
                isPending ||
                (form.formState.isSubmitted && !form.formState.isValid)
              }
            >
              {t("login")}
            </Button>
          </form>
        </Form>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          {t.rich("dont-have-account", {
            button: (v) => (
              <Button
                variant="link"
                className="p-0 h-auto"
                onClick={() => router.push("/auth/register")}
              >
                {v}
              </Button>
            ),
          })}
        </p>
      </CardFooter>
    </Card>
  );
}
