import { useMutation } from "@tanstack/react-query";
import { authService } from "../services/auth.service";
import type { LoginRequest, LoginResponse } from "../types/auth.types";

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: LoginRequest) => authService.login(data),
    onSuccess: (data: LoginResponse) => {
      // You would typically save the token to local storage or state here
      console.log("Login successful", data);
    },
    onError: (error) => {
      console.error("Login failed", error);
    },
  });
};
