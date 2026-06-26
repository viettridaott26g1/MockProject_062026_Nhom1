import { type ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  hero: ReactNode;
}

export function AuthLayout({ children, hero }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen bg-slate-50 p-0 lg:bg-gradient-to-br lg:from-slate-50 lg:via-white lg:to-indigo-50/40 md:p-8 lg:p-10">
      <div className="flex w-full flex-col overflow-hidden bg-white shadow-none border-0 rounded-none md:border md:border-slate-100 md:rounded-3xl md:shadow-xl lg:flex-row">
        {hero}
        <div className="flex w-full flex-col justify-center bg-white px-4 py-12 sm:px-6 lg:w-[42%] lg:px-8 xl:px-12">
          <div className="mx-auto w-full max-w-md">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
