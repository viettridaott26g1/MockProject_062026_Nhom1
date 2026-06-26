import careHeroBg from "@/assets/care-hero-bg.png";

function HeroSection() {
  return (
    <>
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src={careHeroBg}
          alt="Doctor consulting with patient"
          className="h-full w-full object-cover"
        />
        {/* Dark overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/30" />
        <div className="absolute inset-0 backdrop-blur-[3px]" />
      </div>

      {/* Hero content — positioned on the left side */}
      <div className="relative z-10 hidden w-full max-w-xl flex-col justify-between self-stretch p-10 lg:flex xl:p-14">
        {/* Top: Logo */}
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md">
            <svg
              className="size-6 text-white"
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
          <span className="text-lg font-bold tracking-wide text-white">
            CareConnect Portal
          </span>
        </div>

        {/* Center: Main content */}
        <div className="space-y-6">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-widest text-white/90 uppercase backdrop-blur-sm">
            Sign In
          </span>
          <h1 className="max-w-md text-4xl leading-tight font-bold text-white xl:text-5xl xl:leading-tight">
            Welcome Back!{" "}
            <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Sign in
            </span>{" "}
            to Your Care Portal
          </h1>
          <p className="max-w-sm text-base leading-relaxed text-white/70">
            Access your personalized care plan and connect with your care team.
          </p>
        </div>

        {/* Bottom: Stats */}
        <div className="flex gap-8">
          <div className="space-y-1">
            <p className="text-2xl font-bold text-white">10K+</p>
            <p className="text-xs text-white/50">Active Patients</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-bold text-white">500+</p>
            <p className="text-xs text-white/50">Care Providers</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-bold text-white">99.9%</p>
            <p className="text-xs text-white/50">Uptime</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
