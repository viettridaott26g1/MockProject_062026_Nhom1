import backgroundImg from "@/assets/background.png"

import LoginForm from "./Login-form"

export default function LoginPage() {
    return (
        <main className="login-page">
            <section className="login-hero">
                <div className="login-hero__overlay" />
                <div className="login-hero__content">
                    <span className="login-badge">Quote</span>
                    <h1>Let&apos;s Find The Right Care Together</h1>
                    <p>
                        Share your needs with us, and we&apos;ll provide a tailored care plan.
                    </p>
                </div>

                <img className="login-hero__image" src={backgroundImg} alt="Caregiver supporting an elderly person" />
            </section>

            <section className="login-card">
                <LoginForm />
            </section>
        </main>
    )
}