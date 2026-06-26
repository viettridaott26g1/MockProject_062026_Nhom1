import LoginForm from "../components/login-form";
import backgroundImage from "../../../assets/background.jpg";

const LoginPage = () => {
    return (
        <main
            className="relative flex min-h-screen items-center justify-end overflow-hidden bg-cover bg-center px-8 py-10 max-lg:justify-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-black/45" />

            <section className="absolute bottom-1/3 left-12 z-10 max-w-xl text-white max-lg:hidden">
                <span className="mb-4 inline-block rounded-full border border-white/80 px-4 py-1.5 text-sm font-medium">
                    Login
                </span>

                <h1 className="text-6xl font-bold leading-tight">
                    Welcome Back <br />
                    to CareConnect
                </h1>

                <p className="mt-5 max-w-md text-base leading-7 text-white/80">
                    Sign in to manage care plans, resident records, and daily nursing home operations.
                </p>
            </section>

            <section className="relative z-10 mr-10 w-full max-w-[450px] max-lg:mr-0">
                <LoginForm />
            </section>
        </main>
    );
};

export default LoginPage;