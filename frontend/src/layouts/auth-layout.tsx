import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-md space-y-6 b">
        <div className="lg:hidden text-center">
          <h1>ElderCare</h1>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
