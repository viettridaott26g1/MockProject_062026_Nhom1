

import { useLoginForm } from "../hooks/use-login-form";

export default function LoginForm() {
  const {
    form,
    isPasswordVisible,
    setIsPasswordVisible,
    loading,
    handleChange,
    handleSubmit,
  } = useLoginForm();

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 md:max-w-lg w-full">

      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Đăng Nhập</h2>
        <p className="text-gray-500 mt-2">Vui lòng nhập thông tin tài khoản</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* EMAIL */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Email hoặc SĐT
          </label>
          <input
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full px-5 py-4 bg-gray-50 border rounded-2xl"
            placeholder="Nhập email hoặc số điện thoại"
            required
          />
        </div>

        {/* PASSWORD */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Mật khẩu
          </label>

          <div className="relative">
            <input
              type={isPasswordVisible ? "text" : "password"}
              value={form.password}
              onChange={(e) => handleChange("password", e.target.value)}
              className="w-full px-5 py-4 bg-gray-50 border rounded-2xl"
              placeholder="Nhập mật khẩu"
              required
            />

            <button
              type="button"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              className="absolute right-5 top-1/2 -translate-y-1/2"
            >
              {isPasswordVisible ? "🙈" : "👁"}
            </button>
          </div>
        </div>

        {/* BUTTON */}
        <button
          disabled={loading}
          className="w-full bg-blue-600 text-white py-4 rounded-2xl"
        >
          {loading ? "Đang đăng nhập..." : "Đăng Nhập"}
        </button>

      </form>
    </div>
  );
}