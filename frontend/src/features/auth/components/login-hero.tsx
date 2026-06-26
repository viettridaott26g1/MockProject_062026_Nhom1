import { Hospital } from "lucide-react";

export function LoginHero() {
  return (
    <div className="relative flex w-full flex-col justify-center h-[38vh] md:h-[45vh] lg:h-auto lg:w-[58%] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/src/assets/login-background.jpg')" }}
      />
      
      {/* Soft Linear Gradient */}
      <div 
        className="absolute inset-0 z-0 hidden lg:block"
        style={{
          background: `linear-gradient(
            90deg,
            rgba(255,255,255,0.92) 0%,
            rgba(255,255,255,0.75) 35%,
            rgba(255,255,255,0.25) 75%,
            rgba(255,255,255,0) 100%
          )`
        }}
      />

      {/* Mobile Dark Overlay Fallback (For Readability) */}
      <div className="absolute inset-0 bg-black/40 lg:hidden" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center px-6 lg:px-14 h-full text-white lg:text-slate-900 max-w-xl space-y-6">
        <div className="flex w-fit items-center gap-2 rounded-full bg-white/90 lg:bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm border border-slate-200/50 backdrop-blur-md">
          <Hospital className="h-4 w-4 text-indigo-600" />
          <span>Trusted ElderCare Platform</span>
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight leading-tight lg:text-6xl text-white lg:text-slate-900">
          Welcome Back
        </h1>
        
        <p className="text-lg leading-8 text-slate-100 lg:text-slate-600 lg:text-xl">
          Continue providing exceptional care with a secure, intuitive healthcare platform built for caregivers and families.
        </p>
      </div>
    </div>
  );
}
