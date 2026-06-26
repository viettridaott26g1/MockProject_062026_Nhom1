import React, { useState } from "react";
import { AuthLayout } from "@/layouts/AuthLayout";
import { LoginForm } from "./components/LoginForm";
import { LoginSuccess } from "./components/LoginSuccess";

interface LoginProps {
  onToggleView?: () => void;
}

export const Login: React.FC<LoginProps> = ({ onToggleView }) => {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <AuthLayout>
      {!isSuccess ? (
        <LoginForm 
          onSuccess={() => setIsSuccess(true)} 
          onToggleView={onToggleView} 
        />
      ) : (
        <LoginSuccess onLogout={() => setIsSuccess(false)} />
      )}
    </AuthLayout>
  );
};
