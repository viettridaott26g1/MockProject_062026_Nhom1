import LoginHero from "../components/login-hero";
import LoginForm from "../components/login-form";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-white">
      <LoginHero />
      <LoginForm />
    </div>
  );
}