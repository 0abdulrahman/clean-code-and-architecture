"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  RegistrationFields,
  useRegisterSchema,
} from "@/lib/schemes/auth.schema";
import { useTranslations } from "next-intl";
import { PasswordInput } from "@/components/common/password-input";
import useRegister from "../_hooks/use-register";
import SubmitFeedback from "@/components/common/submit-feedback";
import { useRouter } from "@/i18n/routing";

export default function RegisterForm() {
  // Translation
  const t = useTranslations();

  // Navigation
  const router = useRouter();

  // Hooks
  const registerSchema = useRegisterSchema();
  const { isPending, error, register } = useRegister();

  // Form
  const form = useForm<RegistrationFields>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
  });

  // Functions
  function onSubmit(values: RegistrationFields) {
    register(values);
  }

  return (
    <Card className="w-full max-w-md">
      {/* Header */}
      <CardHeader>
        {/* Title */}
        <CardTitle className="text-2xl">{t("create-an-account")}</CardTitle>

        {/* Description */}
        <CardDescription>{t("register-description")}</CardDescription>
      </CardHeader>

      {/* Content */}
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Username */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel>{t("username-label")}</FormLabel>

                  {/* Field */}
                  <FormControl>
                    <Input
                      placeholder={t("username-placeholder")}
                      {...field}
                      autoComplete="username"
                    />
                  </FormControl>

                  {/* Feedback */}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* First name */}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel>{t("firstname-label")}</FormLabel>

                  {/* Field */}
                  <FormControl>
                    <Input
                      placeholder={t("firstname-placeholder")}
                      {...field}
                      autoComplete="given-name"
                    />
                  </FormControl>

                  {/* Feedback */}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Last name */}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel>{t("lastname-label")}</FormLabel>

                  {/* Field */}
                  <FormControl>
                    <Input
                      placeholder={t("lastname-placeholder")}
                      {...field}
                      autoComplete="family-name"
                    />
                  </FormControl>

                  {/* Feedback */}
                  <FormMessage />
                </FormItem>
              )}
            />

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
                      {...field}
                      autoComplete="email"
                    />
                  </FormControl>

                  {/* Feedback */}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel>{t("phone-label")}</FormLabel>

                  {/* Field */}
                  <FormControl>
                    <Input
                      placeholder={t("phone-placeholder")}
                      {...field}
                      autoComplete="tel-national"
                    />
                  </FormControl>

                  {/* Description */}
                  <FormDescription>{t("phone-description")}</FormDescription>

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
                    <PasswordInput {...field} autoComplete="new-password" />
                  </FormControl>

                  {/* Description */}
                  <FormDescription>
                    {t("password-min", { min: 8 })}
                  </FormDescription>

                  {/* Feedback */}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm password */}
            <FormField
              control={form.control}
              name="rePassword"
              render={({ field }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel>{t("confirm-password-label")}</FormLabel>

                  {/* Field */}
                  <FormControl>
                    <PasswordInput {...field} autoComplete="new-password" />
                  </FormControl>

                  {/* Feedback */}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Feedback */}
            <SubmitFeedback>{error?.message}</SubmitFeedback>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full"
              disabled={
                isPending ||
                (form.formState.isSubmitted && !form.formState.isValid)
              }
            >
              {t("register")}
            </Button>
          </form>
        </Form>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          {t.rich("already-have-account", {
            button: (v) => (
              <Button
                variant="link"
                className="p-0 h-auto"
                onClick={() => router.push("/auth/login")}
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
