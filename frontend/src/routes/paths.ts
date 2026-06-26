export const ROUTES = {
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  HOME: "/",
} as const;

export type AppRoutes = typeof ROUTES[keyof typeof ROUTES];
