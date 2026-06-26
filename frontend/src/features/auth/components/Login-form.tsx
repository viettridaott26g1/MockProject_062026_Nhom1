import { Button } from "@/components/ui/button"
import Input from "@/components/ui/input"

import backgroundImg from "@/assets/background.png"


export default function LoginForm() {
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
                <form className="login-form">

                    <label className="welcome-wrap">
                        <h2 className="welcome-title">WelCome</h2>
                    </label>

                    <label className="field">
                        <span>Phone Number</span>
                        <Input placeholder="Enter your phone number" />
                    </label>

                    <label className="field">
                        <span>Password</span>
                        <Input type="password" placeholder="Enter your password" />
                    </label>
                    <Button className="submit-button" type="submit">
                        Request a Quote
                    </Button>
                </form>
            </section>
        </main>
    )
}