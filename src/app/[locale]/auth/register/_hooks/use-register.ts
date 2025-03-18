import { useRouter } from "@/i18n/routing";
import { RegistrationFields } from "@/lib/schemes/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { registerAction } from "../_actions/register.action";
import catchError from "@/lib/utils/catch-error";

export default function useRegister() {
  // Navigation
  const router = useRouter();
  const searchParams = useSearchParams();

  // Mutation
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (fields: RegistrationFields) =>
      await catchError(registerAction(fields)),
    onSuccess: () => {
      // Redirect to the the login page upon successful registration
      router.push(`/auth/login?${searchParams.toString()}`);
    },
  });

  return { isPending, error, register: mutate };
}
