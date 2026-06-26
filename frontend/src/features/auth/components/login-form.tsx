import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HeartPulse, LoaderCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { FormField } from "@/components/ui/form-field";
import { AuthShell } from "@/components/ui/auth-shell";
import { useLogin } from "../hooks/use-login";
import { loginSchema, type LoginFormValues } from "../types/auth-types";

export const LoginForm = () => {
  const { mutate: login, isPending } = useLogin();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = (data: LoginFormValues) => {
    login(data);
  };

  return (
    <AuthShell>
      <main className="flex-grow flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 bg-white rounded-xl shadow-lg overflow-hidden min-h-[700px]">
          <div className="hidden lg:flex relative flex-col justify-between p-12 bg-primary overflow-hidden">
            <div className="absolute inset-0 opacity-20" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-12">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <HeartPulse className="h-5 w-5 text-primary" />
                </div>
                <span className="text-2xl font-bold text-white">Direlda</span>
              </div>
              <div className="space-y-6">
                <h1 className="text-4xl font-bold leading-tight text-white">
                  Compassionate Care,<br />Peace of Mind for Families.
                </h1>
                <p className="max-w-md text-base text-indigo-100">
                  Modern nursing home management system, optimizing care processes and connecting medical staff with residents and their loved ones.
                </p>
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img
                  className="w-full h-[300px] object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeoAy6cbHldQ2QOzY6Iq9YjgwKImKIPmserc4dzSw79NcNe-bfXBg7J5MsoZRZ3orduRzyMMSnAreQzvjsrcw0sJTrbzWR5wtKz2N2toubp8EYoHGfK8mygmF9WnS_6ZLNOY9OGveHk5A4umXoe8ngEz7pzsWYjKiII-tXqFMPUcIgrWzmXgUpwigIAymhYG9pYSkKbkN6Z2iaCpgbmH7OSvQvPYdVmiq5I1i9T9NCdcAOpheuRrFov01tHTbzV2r2eY8lgxsjRtI"
                  alt="Caring medical professional"
                />
              </div>
              <div className="mt-8 flex gap-6">
                <div className="flex flex-col">
                  <span className="text-3xl font-semibold text-white">200k+</span>
                  <span className="text-sm text-indigo-100">Trusted by Families</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-semibold text-white">4.9/5</span>
                  <span className="text-sm text-indigo-100">Service Ratings</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center px-6 py-12 md:px-16 lg:px-24 bg-[#f8f9fa]">
            <div className="lg:hidden flex items-center gap-2 mb-10">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <HeartPulse className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xl font-bold text-primary">Direlda</span>
            </div>
            <div className="max-w-md w-full mx-auto">
              <header className="mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                  Login to Management System
                </h2>
                <p className="text-sm sm:text-base text-slate-600">
                  Please enter your information to access your account.
                </p>
              </header>

              <form className="space-y-6" onSubmit={form.handleSubmit(handleSubmit)}>
                <Controller
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <FormField
                      label="Email Address"
                      htmlFor="email"
                      error={fieldState.invalid ? fieldState.error?.message : undefined}
                    >
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                          <Mail className="h-5 w-5" />
                        </span>
                        <Input
                          {...field}
                          id="email"
                          type="email"
                          placeholder="name@company.com"
                          className="h-12 rounded-lg border-slate-200 pl-11 pr-4 bg-white shadow-sm focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
                        />
                      </div>
                    </FormField>
                  )}
                />

                <Controller
                  name="password"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <FormField
                      label="Password"
                      htmlFor="password"
                      error={fieldState.invalid ? fieldState.error?.message : undefined}
                    >
                      <div className="flex justify-between items-center">
                        <span className="sr-only">Password</span>
                        <a className="text-sm font-semibold text-primary hover:underline" href="#">
                          Forgot password?
                        </a>
                      </div>
                      <PasswordInput
                        {...field}
                        id="password"
                        placeholder="••••••••"
                        inputClassName="h-12 rounded-lg border-slate-200 bg-white shadow-sm"
                      />
                    </FormField>
                  )}
                />

                <div className="flex items-center">
                  <input className="h-5 w-5 text-primary border-slate-200 rounded focus:ring-primary" id="remember-me" type="checkbox" />
                  <label className="ml-3 block text-sm text-slate-600" htmlFor="remember-me">
                    Remember me
                  </label>
                </div>

                <Button
                  className="interactive-scale h-12 w-full rounded-lg bg-primary text-base font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary/90"
                  disabled={isPending}
                  type="submit"
                >
                  {isPending ? (
                    <span className="flex items-center justify-center gap-2">
                      <LoaderCircle className="h-4 w-4 animate-spin" />
                      Authenticating...
                    </span>
                  ) : (
                    "Login"
                  )}
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-slate-200 text-center">
                <p className="text-sm text-slate-600">
                  Having trouble logging in?{' '}
                  <a className="text-primary font-bold hover:underline" href="#">
                    Contact IT Support
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#f3f4f5] py-8">
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-16 lg:px-24 max-w-[1280px] mx-auto space-y-4 md:space-y-0">
          <div className="flex items-center gap-2">
            <span className="font-bold text-primary">Direlda</span>
            <span className="text-slate-400">|</span>
            <span className="text-sm text-slate-600">Health Care Management</span>
          </div>
          <div className="flex space-x-6">
            <a className="text-sm text-slate-600 hover:text-primary hover:underline" href="#">Privacy</a>
            <a className="text-sm text-slate-600 hover:text-primary hover:underline" href="#">Terms</a>
            <a className="text-sm text-slate-600 hover:text-primary hover:underline" href="#">Support</a>
          </div>
          <p className="text-sm text-slate-500 opacity-70 text-center">
            © 2024 Direlda Nursing Home Management. All rights reserved.
          </p>
        </div>
      </footer>
    </AuthShell>
  );
};
