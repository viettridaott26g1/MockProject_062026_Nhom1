import AuthInputField from "./AuthInputField";
import SubmitButton from "./SubmitButton";

interface LoginFormCardProps {
  email: string;
  password: string;
  rememberMe: boolean;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRememberMeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function LoginFormCard({
  email,
  password,
  rememberMe,
  handleEmailChange,
  handlePasswordChange,
  handleRememberMeChange,
  handleFormSubmit,
}: LoginFormCardProps) {
  return (
    <div className="relative z-20 mx-4 w-full max-w-md sm:mx-6 lg:ml-auto lg:mr-16 xl:mr-24">
      {/* Glass card wrapper */}
      <div className="rounded-2xl border border-white/20 bg-white/95 p-8 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-10">
        {/* Mobile logo (shown only on small screens) */}
        <div className="mb-6 flex items-center gap-2 lg:hidden">
          <div className="flex size-9 items-center justify-center rounded-lg bg-blue-600">
            <svg
              className="size-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"
              />
            </svg>
          </div>
          <span className="text-base font-bold text-slate-800">
            CareConnect Portal
          </span>
        </div>

        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Log In
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Enter your credentials to access your care portal.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleFormSubmit} className="space-y-5">
          <AuthInputField
            id="email"
            label="Email Address"
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={handleEmailChange}
          />

          <AuthInputField
            id="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />

          {/* Remember me & Forgot Password row */}
          <div className="flex items-center justify-between">
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={handleRememberMeChange}
                className="size-4 cursor-pointer rounded border-slate-300 text-blue-600 transition focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-sm text-slate-600">Remember me</span>
            </label>
            <a
              href="#"
              className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
            >
              Forgot Password?
            </a>
          </div>

          {/* Submit */}
          <SubmitButton text="Sign In" type="submit" />
        </form>

        {/* Bottom link */}
        <p className="mt-8 text-center text-sm text-slate-500">
          Don't have an account?{" "}
          <a
            href="#"
            className="font-semibold text-blue-600 transition-colors hover:text-blue-700"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginFormCard;
