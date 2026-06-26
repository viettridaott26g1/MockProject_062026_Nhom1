import {
    CircleAlert,
    HeartHandshake,
    LockKeyhole,
    Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useLoginForm } from "../hooks/use-login-form";

const LoginForm = () => {
    const {
        formData,
        isLoading,
        hasError,
        errorMessage,
        handleInputChange,
        handleSubmit,
    } = useLoginForm();

    return (
        <Card className="w-full max-w-[450px]">
            <div className="mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/30">
                    <HeartHandshake size={24} />
                </div>

                <div>
                    <h3 className="text-xl font-bold text-slate-900">
                        CareConnect
                    </h3>
                    <p className="text-sm text-slate-500">
                        Nursing Home Management
                    </p>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-4xl font-bold tracking-tight text-slate-950">
                    Welcome Back
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                    Sign in to continue to CareConnect.
                </p>
            </div>

            {hasError && (
                <div className="mb-5 flex items-center gap-2 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
                    <CircleAlert size={18} />
                    <span>{errorMessage}</span>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                    icon={<Mail size={18} />}
                />

                <Input
                    label="Password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    required
                    icon={<LockKeyhole size={18} />}
                />

                <div className="flex items-center justify-between gap-4">
                    <Checkbox
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                        label="Remember me"
                    />

                    <button
                        type="button"
                        className="text-sm font-semibold text-indigo-600 transition hover:text-indigo-700 hover:underline"
                    >
                        Forgot password?
                    </button>
                </div>

                <Button
                    type="submit"
                    disabled={isLoading}
                    className="mt-2 h-13 w-full rounded-full bg-indigo-600 text-sm font-bold text-white shadow-lg shadow-indigo-600/30 hover:-translate-y-0.5 hover:bg-indigo-700 disabled:translate-y-0"
                >
                    {isLoading ? (
                        <span className="flex items-center gap-2">
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                            Signing In...
                        </span>
                    ) : (
                        "Sign In"
                    )}
                </Button>

                <div className="text-center text-sm text-slate-500">
                    Don&apos;t have an account?{" "}
                    <button
                        type="button"
                        className="font-semibold text-indigo-600 transition hover:text-indigo-700 hover:underline"
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </Card>
    );
};

export default LoginForm;