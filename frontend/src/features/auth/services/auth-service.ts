import { api } from "@/lib/axios";
import type { LoginFormValues, RegisterFormValues } from "../types/auth-types";

export const authService = {
  login: async (data: LoginFormValues) => {
    const res = await api.post("/auth/login", data);
    return res.data;
  },

  register: async (data: RegisterFormValues) => {
    const res = await api.post("/auth/register", data);
    return res.data;
  },

  logout: async () => {
    await api.post("/auth/logout")
  }
};
