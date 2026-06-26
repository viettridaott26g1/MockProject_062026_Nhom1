import { type ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  hero: ReactNode;
}

export function AuthLayout({ children, hero }: AuthLayoutProps) {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      {hero}
      {children}
    </div>
  );
}
