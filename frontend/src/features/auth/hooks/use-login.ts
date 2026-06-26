import { useMutation } from "@tanstack/react-query";
import type { LoginFormValues } from "../types/auth-types";
import { authService } from "../services/auth-service";

export function useLogin() {
  return useMutation({
    mutationFn: (data: LoginFormValues) => authService.login(data),
  });
}
