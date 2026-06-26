import { LoginForm } from "./login-form";

export const LoginPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-primary">Webcome back</h2>
        <p className="text-sm text-foreground mt-1">
          Sign in to your account to continue
        </p>
      </div>
      <LoginForm />
    </div>
  );
};
