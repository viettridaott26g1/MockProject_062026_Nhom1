import type { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  hero?: ReactNode;
}

export default function AuthLayout({
  children,
  hero,
}: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen bg-white">
      {hero}

      <div className="flex w-full items-center justify-center px-4 lg:w-1/2 lg:px-0">
        {children}
      </div>
    </div>
  );
}