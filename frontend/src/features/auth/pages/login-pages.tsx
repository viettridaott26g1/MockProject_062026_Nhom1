import AuthLayout from "@/layouts/auth-layout";
import LoginBanner from "@/components/auth/login-banner";
import LoginForm from "../components/login-form";

export default function LoginPage() {
  return (
    <AuthLayout>
      <div className="grid w-full items-center gap-16 lg:grid-cols-2">
        <LoginBanner />
        <LoginForm />
      </div>
    </AuthLayout>
  );
}