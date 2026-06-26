import { Button } from "@/components/ui/button"
import Input from "@/components/ui/input"

export default function LoginForm() {
    return (
        <>
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
        </>
    )
}