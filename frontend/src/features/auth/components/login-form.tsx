import React, { useState, useCallback } from 'react';
import { Eye, EyeOff, Loader2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const DEFAULT_EMAIL = 'admin@face-attendance.edu.vn';
const DEFAULT_PASSWORD = 'password123';

export function LoginForm(): React.ReactElement {
  const [email, setEmail] = useState<string>(DEFAULT_EMAIL);
  const [password, setPassword] = useState<string>(DEFAULT_PASSWORD);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isRemembered, setIsRemembered] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleEmailChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (hasError) {
      setHasError(false);
      setErrorMessage('');
    }
  }, [hasError]);

  const handlePasswordChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (hasError) {
      setHasError(false);
      setErrorMessage('');
    }
  }, [hasError]);

  const handlePasswordVisibilityToggle = useCallback(() => {
    setIsPasswordVisible((prev) => !prev);
  }, []);

  const handleRememberToggle = useCallback(() => {
    setIsRemembered((prev) => !prev);
  }, []);

  const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      setHasError(true);
      setErrorMessage('Please fill in both email and password fields.');
      return;
    }

    setIsLoading(true);
    setHasError(false);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (email === DEFAULT_EMAIL && password === DEFAULT_PASSWORD) {
        alert('Welcome Back! Successfully logged in to EldCare.');
      } else {
        setHasError(true);
        setErrorMessage('Invalid email or password. Please try again.');
      }
    } catch (err) {
      setHasError(true);
      setErrorMessage('A connection error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="login-card-section" aria-label="Sign In Credentials">
      <div className="login-card">
        <h2 className="card-title">Log In</h2>
        <p className="card-subtitle">
          Enter your credentials to access your care portal.
        </p>

        <form onSubmit={handleLoginSubmit} className="login-form" noValidate>
          {hasError && (
            <div className="error-message" role="alert">
              <AlertCircle size={16} />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Email Field */}
          <div className="form-group">
            <Label htmlFor="login-email">
              Email Address
            </Label>
            <div className="input-wrapper">
              <Input
                id="login-email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email address"
                disabled={isLoading}
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="form-group">
            <Label htmlFor="login-password">
              Password
            </Label>
            <div className="input-wrapper">
              <Input
                id="login-password"
                type={isPasswordVisible ? 'text' : 'password'}
                className="password-input"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
                disabled={isLoading}
                required
              />
              <button
                id="password-visibility-toggle"
                type="button"
                className="password-toggle-btn"
                onClick={handlePasswordVisibilityToggle}
                aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
                title={isPasswordVisible ? 'Hide password' : 'Show password'}
              >
                {isPasswordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Controls: Remember & Forgot Password */}
          <div className="form-actions-row">
            <label className="checkbox-label" htmlFor="login-remember">
              <input
                id="login-remember"
                type="checkbox"
                className="checkbox-input"
                checked={isRemembered}
                onChange={handleRememberToggle}
                disabled={isLoading}
              />
              <span>Remember me</span>
            </label>
            <a href="#forgot" className="forgot-password-link" id="login-forgot-password">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <Button
            id="login-submit-button"
            type="submit"
            className="submit-btn"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Signing In...</span>
              </>
            ) : (
              <span>Sign In</span>
            )}
          </Button>
        </form>

        <div className="signup-prompt">
          Don't have an account?
          <a href="#signup" className="signup-link" id="login-signup-link">
            Sign Up
          </a>
        </div>
      </div>
    </section>
  );
}
