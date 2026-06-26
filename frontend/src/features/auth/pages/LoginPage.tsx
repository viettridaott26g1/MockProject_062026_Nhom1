import { useState, type FormEvent } from 'react'
import { Eye, EyeOff, HeartPulse, Lock, Mail } from 'lucide-react'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    window.setTimeout(() => {
      setIsSubmitting(false)
    }, 1800)
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#f8f9fa] text-[#191c1d]">
      <main className="flex flex-1 items-center justify-center p-4 md:p-8">
        <div className="grid min-h-[700px] w-full max-w-7xl overflow-hidden rounded-xl bg-white shadow-lg lg:grid-cols-2">
          <div className="relative hidden flex-col justify-between overflow-hidden bg-[#0b2ca1] p-12 lg:flex">
            <div className="absolute inset-0 opacity-20" />
            <div className="relative z-10">
              <div className="mb-12 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                  <HeartPulse className="h-6 w-6 text-[#0b2ca1]" />
                </div>
                <span className="text-2xl font-bold text-white">Direlda</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl font-bold leading-tight text-white">
                  Compassionate Care,
                  <br />
                  Peace of Mind for Families.
                </h1>
                <p className="max-w-md text-base text-[#dee1ff] opacity-90">
                  Modern nursing home management system, optimizing care processes and connecting medical staff with residents and their loved ones.
                </p>
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <div className="overflow-hidden rounded-xl border-4 border-white/10 shadow-2xl">
                <img
                  className="h-[300px] w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeoAy6cbHldQ2QOzY6Iq9YjgwKImKIPmserc4dzSw79NcNe-bfXBg7J5MsoZRZ3orduRzyMMSnAreQzvjsrcw0sJTrbzWR5wtKz2N2toubp8EYoHGfK8mygmF9WnS_6ZLNOY9OGveHk5A4umXoe8ngEz7pzsWYjKiII-tXqFMPUcIgrWzmXgUpwigIAymhYG9pYSkKbkN6Z2iaCpgbmH7OSvQvPYdVmiq5I1i9T9NCdcAOpheuRrFov01tHTbzV2r2eY8lgxsjRtI"
                  alt="Caregiver and elderly resident"
                />
              </div>

              <div className="mt-8 flex gap-6">
                <div className="flex flex-col">
                  <span className="text-2xl font-semibold text-white">200k+</span>
                  <span className="text-sm text-[#dee1ff] opacity-80">Trusted by Families</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-semibold text-white">4.9/5</span>
                  <span className="text-sm text-[#dee1ff] opacity-80">Service Ratings</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center bg-[#f8f9fa] px-6 py-12 md:px-16 lg:px-24">
            <div className="mb-10 flex items-center gap-2 lg:hidden">
              <HeartPulse className="h-7 w-7 text-[#0b2ca1]" />
              <span className="text-xl font-bold text-[#0b2ca1]">Direlda</span>
            </div>

            <div className="mx-auto w-full max-w-md">
              <header className="mb-10">
                <h2 className="mb-2 text-3xl font-semibold text-[#191c1d] lg:text-2xl">
                  Login to Management System
                </h2>
                <p className="text-base text-[#444653]">
                  Please enter your information to access your account.
                </p>
              </header>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#191c1d]" htmlFor="email">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#757685]" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="name@company.com"
                      className="block w-full rounded-lg border border-[#c5c5d5] bg-white py-3 pl-12 pr-4 text-base text-[#191c1d] outline-none transition focus:border-[#0b2ca1] focus:ring-2 focus:ring-[#0b2ca1]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#191c1d]" htmlFor="password">
                      Password
                    </label>
                    <a className="text-sm font-semibold text-[#0b2ca1] hover:underline" href="#">
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <Lock className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#757685]" />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder="••••••••"
                      className="block w-full rounded-lg border border-[#c5c5d5] bg-white py-3 pl-12 pr-12 text-base text-[#191c1d] outline-none transition focus:border-[#0b2ca1] focus:ring-2 focus:ring-[#0b2ca1]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((value) => !value)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#757685] transition hover:text-[#0b2ca1]"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-5 w-5 rounded border-[#c5c5d5] text-[#0b2ca1] focus:ring-[#0b2ca1]"
                  />
                  <label className="ml-3 block text-sm text-[#444653]" htmlFor="remember-me">
                    Remember me
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center rounded-lg bg-[#0b2ca1] px-6 py-4 text-base font-semibold text-white transition hover:bg-[#2e47b8] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? 'Authenticating...' : 'Login'}
                </button>
              </form>

              <div className="mt-8 border-t border-[#e1e3e4] pt-8 text-center">
                <p className="text-sm text-[#444653]">
                  Having trouble logging in?{' '}
                  <a className="font-bold text-[#0b2ca1] hover:underline" href="#">
                    Contact IT Support
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#edeeef] py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between space-y-4 px-6 md:flex-row md:space-y-0 md:px-12">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#0b2ca1]">Direlda</span>
            <span className="text-[#c5c5d5]">|</span>
            <span className="text-sm text-[#444653]">Health Care Management</span>
          </div>
          <div className="flex space-x-6">
            <a className="text-sm text-[#444653] transition hover:text-[#0b2ca1] hover:underline" href="#">
              Privacy
            </a>
            <a className="text-sm text-[#444653] transition hover:text-[#0b2ca1] hover:underline" href="#">
              Terms
            </a>
            <a className="text-sm text-[#444653] transition hover:text-[#0b2ca1] hover:underline" href="#">
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LoginPage
