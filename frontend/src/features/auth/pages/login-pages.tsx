
import LoginForm from "../components/login-form";
import loginBg from "../../../assets/login.jpg";
import { Heart, ShieldCheck, Clock3 } from "lucide-react";

export default function LoginPage() {
  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right,
          rgba(10,20,35,.75),
          rgba(15,23,42,.45)),
          url(${loginBg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blur overlay */}
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-10">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <div className="hidden text-white lg:block">

            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm backdrop-blur-xl">
              ❤️ Healthcare Management
            </span>

            <h1 className="mt-8 text-6xl font-bold leading-tight">
              Chăm sóc
              <br />
              <span className="text-cyan-300">
                người thân
              </span>
              <br />
              dễ dàng hơn
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-white/80">
              Quản lý hồ sơ, theo dõi sức khỏe và lập kế hoạch chăm sóc
              cho người thân mọi lúc mọi nơi.
            </p>

            <div className="mt-12 space-y-5">

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-white/10 p-3">
                  <ShieldCheck size={22} />
                </div>

                <div>
                  <p className="font-semibold">
                    An toàn dữ liệu
                  </p>

                  <p className="text-white/70">
                    Thông tin được bảo mật.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-white/10 p-3">
                  <Heart size={22} />
                </div>

                <div>
                  <p className="font-semibold">
                    Theo dõi sức khỏe
                  </p>

                  <p className="text-white/70">
                    Lưu trữ lịch sử chăm sóc.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-white/10 p-3">
                  <Clock3 size={22} />
                </div>

                <div>
                  <p className="font-semibold">
                    Nhắc lịch tự động
                  </p>

                  <p className="text-white/70">
                    Không bỏ lỡ lịch khám hay uống thuốc.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="mx-auto w-full max-w-md rounded-3xl border border-white/20 bg-white/15 p-8 shadow-2xl backdrop-blur-2xl">

            <LoginForm />

          </div>

        </div>

      </div>
    </div>
  );
}