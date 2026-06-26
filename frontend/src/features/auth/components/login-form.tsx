import { useState } from "react";

export function LoginForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("✅ Đăng nhập thành công! Chào mừng bạn quay trở lại.");
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 md:ml-auto md:max-w-lg w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Đăng Nhập</h2>
        <p className="text-gray-500 mt-2">Vui lòng nhập thông tin tài khoản</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email / Phone */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email hoặc Số điện thoại
          </label>
          <input
            type="text"
            placeholder="Nhập email hoặc số điện thoại"
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl 
                       focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                       transition-all duration-200"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Mật khẩu
          </label>
          <div className="relative">
            <input
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Nhập mật khẩu"
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl 
                         focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                         transition-all duration-200"
              required
            />
            <button
              type="button"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {isPasswordVisible ? "🙈" : "👁"}
            </button>
          </div>
        </div>

        {/* Remember & Forgot */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="checkbox" 
              className="w-4 h-4 accent-blue-600 rounded"
            />
            <span className="text-gray-600">Ghi nhớ tôi</span>
          </label>
          <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
            Quên mật khẩu?
          </a>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-200 
                     text-white font-semibold py-5 rounded-3xl text-lg shadow-lg shadow-blue-500/30"
        >
          Đăng Nhập
        </button>

        {/* Register Link */}
        <div className="text-center text-sm text-gray-500">
          Chưa có tài khoản?{" "}
          <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
            Đăng ký ngay
          </a>
        </div>
      </form>
    </div>
  );
}