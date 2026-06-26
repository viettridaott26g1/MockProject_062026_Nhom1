import AuthLayout from "@/layouts/auth-layout";
import LoginHero from "../components/login-hero";
import LoginForm from "../components/login-form";

export default function LoginPage() {
  return (
    <AuthLayout hero={<LoginHero />}>
      <LoginForm />
    </AuthLayout>
  );
}