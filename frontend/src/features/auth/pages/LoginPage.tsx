import { LoginHero } from "../components/LoginHero";
import { LoginForm } from "../components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-slate-50 lg:bg-gradient-to-br lg:from-slate-50 lg:via-white lg:to-indigo-50/40 p-0 md:p-8 lg:p-10">
      <div className="flex w-full flex-col lg:flex-row overflow-hidden bg-white shadow-none md:shadow-xl rounded-none md:rounded-3xl border-0 md:border md:border-slate-100">
        <LoginHero />
        <div className="flex w-full flex-col justify-center px-4 py-12 sm:px-6 lg:w-[42%] lg:px-8 xl:px-12 bg-white">
          <div className="mx-auto w-full max-w-md">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
