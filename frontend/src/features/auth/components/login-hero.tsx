export default function LoginHero() {
  return (
    <div className="relative hidden w-1/2 overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 lg:flex">
      <img
        src="/images/login.jpg"
        alt="Login Background"
        className="h-full w-full object-cover opacity-50"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 flex flex-col justify-between p-12">
        <div>
          <h3 className="text-2xl font-bold text-white">
            MockProject
          </h3>
        </div>

        <div className="text-white">
          <span className="inline-block rounded-full border border-white/50 px-4 py-2 text-sm font-medium">
            Chào Mừng
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight lg:text-6xl">
            Chào Mừng Trở Lại
          </h1>

          <p className="mt-4 max-w-md text-lg text-gray-200">
            Đăng nhập để tiếp tục sử dụng dịch vụ và quản lý dữ liệu của bạn.
          </p>

          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-400">
                <span className="text-xs text-white">
                  ✓
                </span>
              </div>

              <span className="text-gray-100">
                Bảo mật cao
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-400">
                <span className="text-xs text-white">
                  ✓
                </span>
              </div>

              <span className="text-gray-100">
                Hỗ trợ 24/7
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-400">
                <span className="text-xs text-white">
                  ✓
                </span>
              </div>

              <span className="text-gray-100">
                Hiệu suất nhanh chóng
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}