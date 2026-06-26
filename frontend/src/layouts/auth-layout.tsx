import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:flex flex-col items-center justify-center bg-primary p-12 text-primary-foreground">
        <div className="max-w-md space-y-4">
          <h1>ElderCare</h1>
          <p className="text-lg text-primary-foreground/80">
            Comprehensive healthcare management for your loved ones - anytime,
            anywhere
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-6">
          <div className="lg:hidden text-center">
            <h1>ElderCare</h1>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
