
import type { ReactNode } from "react";
import loginBg from "../assets/login.jpg";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({
  children,
}: AuthLayoutProps) {
  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(
            to right,
            rgba(10,20,35,.75),
            rgba(15,23,42,.45)
          ),
          url(${loginBg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-10">
        {children}
      </div>
    </div>
  );
}