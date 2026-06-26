import { useMutation } from "@tanstack/react-query";
import type { RegisterFormValues } from "../types/auth-types";
import { authService } from "../services/auth-service";

export function useRegister() {
  return useMutation({
    mutationFn: (data: RegisterFormValues) => authService.register(data),
  });
}
