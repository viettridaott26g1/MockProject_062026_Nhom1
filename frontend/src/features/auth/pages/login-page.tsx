import React, { useEffect } from 'react';
import { AuthLayout } from '@/layouts/auth-layout';
import { LoginInfo } from '../components/login-info';
import { LoginForm } from '../components/login-form';
import './login-page.css';

export function LoginPage(): React.ReactElement {
  // SEO Updates
  useEffect(() => {
    document.title = 'EldCare - Log In';
    
    // Check and update/create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Sign in to your EldCare portal to access your personalized care plans and connect with your care team.'
    );
  }, []);

  return (
    <AuthLayout>
      <LoginInfo />
      <LoginForm />
    </AuthLayout>
  );
}
