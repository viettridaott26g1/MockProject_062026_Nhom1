import { Clock3, Heart, ShieldCheck } from "lucide-react";

export default function LoginBanner() {
  return (
    <div className="hidden text-white lg:block">
      {/* Badge */}
      <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur-xl">
        ❤️ Healthcare Management
      </span>

      {/* Title */}
      <h1 className="mt-8 text-5xl font-bold leading-tight lg:text-6xl">
        Chăm sóc
        <br />
        <span className="text-cyan-300">người thân</span>
        <br />
        dễ dàng hơn
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-lg text-lg leading-8 text-white/80">
        Quản lý hồ sơ, theo dõi sức khỏe và lập kế hoạch chăm sóc
        cho người thân mọi lúc mọi nơi.
      </p>

      {/* Features */}
      <div className="mt-12 space-y-6">
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-white/10 p-3 backdrop-blur-md">
            <ShieldCheck size={22} />
          </div>

          <div>
            <p className="font-semibold text-white">
              An toàn dữ liệu
            </p>

            <p className="text-sm text-white/70">
              Thông tin được mã hóa và bảo mật.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-white/10 p-3 backdrop-blur-md">
            <Heart size={22} />
          </div>

          <div>
            <p className="font-semibold text-white">
              Theo dõi sức khỏe
            </p>

            <p className="text-sm text-white/70">
              Lưu trữ lịch sử chăm sóc và cập nhật sức khỏe hằng ngày.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-white/10 p-3 backdrop-blur-md">
            <Clock3 size={22} />
          </div>

          <div>
            <p className="font-semibold text-white">
              Nhắc lịch tự động
            </p>

            <p className="text-sm text-white/70">
              Không bỏ lỡ lịch khám, uống thuốc hoặc các công việc quan trọng.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}