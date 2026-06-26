import React from 'react';
import './auth-layout.css';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps): React.ReactElement {
  return (
    <div className="login-container">
      <main className="login-content">
        {children}
      </main>
    </div>
  );
}
