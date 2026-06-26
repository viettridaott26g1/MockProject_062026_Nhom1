import type { LoginRequest } from "../schemas/login.schema";

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: "admin" | "doctor" | "nurse" | "patient" | "relative";
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export type { LoginRequest };
