export default function LoginHero() {
  return (
    <div className="hidden lg:flex w-1/2 relative bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/login.jpg"
        alt="Login Background"
        className="w-full h-full object-cover opacity-50"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-12">
        {/* Top Logo/Brand */}
        <div>
          <h3 className="text-white text-2xl font-bold">MockProject</h3>
        </div>

        {/* Bottom Content */}
        <div className="text-white">
          <span className="inline-block border border-white/50 px-4 py-2 rounded-full text-sm font-medium">
            Chào Mừng
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold mt-6 leading-tight">
            Chào Mừng Trở Lại
          </h1>

          <p className="mt-4 text-lg text-gray-200 max-w-md">
            Đăng nhập để tiếp tục sử dụng dịch vụ và quản lý dữ liệu của bạn.
          </p>

          {/* Feature List */}
          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-400 flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-gray-100">Bảo mật cao</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-400 flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-gray-100">Hỗ trợ 24/7</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-400 flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-gray-100">Hiệu suất nhanh chóng</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}