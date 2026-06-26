import { RegisterForm } from "./register-form";

export const RegisterPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-primary">Create an account</h2>
        <p className="text-sm text-foreground mt-1">
          Fill in the details below to get started
        </p>
      </div>
      <RegisterForm />
    </div>
  );
};
