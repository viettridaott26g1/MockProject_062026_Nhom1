import { useState } from "react";
import { AuthLayout } from "@/layouts/auth-layout";
import { LoginHero } from "../components/login-hero";
import { LoginForm } from "../components/login-form";

export default function LoginPage() {
  // --- State Management ---
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // --- Event Handlers ---
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Integrate with authentication API
    console.log("Form submitted:", { email, password, rememberMe });
  };

  return (
    <AuthLayout hero={<LoginHero />}>
      <LoginForm
        email={email}
        password={password}
        rememberMe={rememberMe}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleRememberMeChange={handleRememberMeChange}
        handleFormSubmit={handleFormSubmit}
      />
    </AuthLayout>
  );
}
