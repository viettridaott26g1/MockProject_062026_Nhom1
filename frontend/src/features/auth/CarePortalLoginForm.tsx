import { useState } from "react";
import MainLayout from "./components/MainLayout";
import HeroSection from "./components/HeroSection";
import LoginFormCard from "./components/LoginFormCard";

function CarePortalLoginForm() {
  // --- State Management (camelCase) ---
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // --- Event Handlers (camelCase with 'handle' prefix) ---
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
    <MainLayout>
      <HeroSection />
      <LoginFormCard
        email={email}
        password={password}
        rememberMe={rememberMe}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleRememberMeChange={handleRememberMeChange}
        handleFormSubmit={handleFormSubmit}
      />
    </MainLayout>
  );
}

export default CarePortalLoginForm;
