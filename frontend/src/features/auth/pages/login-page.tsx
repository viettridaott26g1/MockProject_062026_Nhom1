import { LoginHero } from "../components/login-hero";
import { LoginForm } from "../components/login-form";
import { AuthLayout } from "@/layouts/auth-layout";

export default function LoginPage() {
  return (
    <AuthLayout hero={<LoginHero />}>
      <LoginForm />
    </AuthLayout>
  );
}
