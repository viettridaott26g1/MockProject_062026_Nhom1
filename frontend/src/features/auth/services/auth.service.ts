import type { LoginRequest, LoginResponse } from "../types/auth.types";

export const authService = {
  login: async (data: LoginRequest): Promise<LoginResponse> => {
    // Mock implementation
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          accessToken: "mock-access-token",
          refreshToken: "mock-refresh-token",
          user: {
            id: "1",
            email: data.email,
            firstName: "Demo",
            lastName: "User",
            role: "doctor",
          },
        });
      }, 1200);
    });
  },
};
