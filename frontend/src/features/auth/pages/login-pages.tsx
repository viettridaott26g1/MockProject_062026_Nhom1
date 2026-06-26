import { LoginForm } from "../components/login-form";
import loginBg from "../../../assets/login.jpg";

export default function LoginPage() {
  return (
    <div
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.45)),
          url(${loginBg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay blur layer (optional đẹp hơn) */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center w-full">
        
        {/* LEFT SIDE */}
        <div className="text-white md:pr-12 hidden md:block">
          <div className="inline-block bg-white/20 backdrop-blur-md text-white text-sm font-medium px-5 py-2 rounded-full mb-6">
            Welcome Back
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Chào mừng bạn
            <br />
            đến với hệ thống
          </h1>

          <p className="text-lg text-white/90 max-w-md">
            Đăng nhập để quản lý chăm sóc và theo dõi kế hoạch chăm sóc người thân.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <div className="w-12 h-12 bg-white/30 rounded-2xl flex items-center justify-center backdrop-blur-md">
              ❤️
            </div>
            <div>
              <p className="text-sm opacity-75">Chăm sóc tận tâm</p>
              <p className="text-white font-medium">Mỗi ngày một chút</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <LoginForm />
      </div>
    </div>
  );
}