import {
    CircleAlert,
    HeartHandshake,
    LockKeyhole,
    Mail,
} from "lucide-react";
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
        <div className="w-full max-w-[450px] rounded-3xl bg-white p-8 shadow-2xl">
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

                <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950">
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
                <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Email Address
                    </label>

                    <div className="relative">
                        <Mail
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email address"
                            required
                            className="h-13 w-full rounded-2xl bg-slate-100 pl-12 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                </div>

                <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Password
                    </label>

                    <div className="relative">
                        <LockKeyhole
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Enter your password"
                            required
                            className="h-13 w-full rounded-2xl bg-slate-100 pl-12 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between gap-4">
                    <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
                        <input
                            type="checkbox"
                            name="rememberMe"
                            checked={formData.rememberMe}
                            onChange={handleInputChange}
                            className="h-4 w-4 rounded border-slate-300 accent-indigo-600"
                        />
                        Remember me
                    </label>

                    <button
                        type="button"
                        className="text-sm font-semibold text-indigo-600 transition hover:text-indigo-700 hover:underline"
                    >
                        Forgot password?
                    </button>
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="mt-2 flex h-13 w-full items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white shadow-lg shadow-indigo-600/30 transition hover:-translate-y-0.5 hover:bg-indigo-700 disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-60"
                >
                    {isLoading ? (
                        <span className="flex items-center gap-2">
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                            Signing In...
                        </span>
                    ) : (
                        "Sign In"
                    )}
                </button>
                <div className="mt-6 text-center text-sm text-slate-500">
                    Don't have an account?{" "}
                    <button
                        type="button"
                        className="font-semibold text-indigo-600 transition hover:text-indigo-700 hover:underline"
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;