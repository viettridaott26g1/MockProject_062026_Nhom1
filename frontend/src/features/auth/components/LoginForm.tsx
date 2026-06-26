import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [generalError, setGeneralError] = useState("");

  // Validate Email
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate Form
  const validateForm = (): boolean => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email.trim()) {
      newErrors.email = "Email là bắt buộc";
    } else if (!validateEmail(email)) {
      newErrors.email = "Email không hợp lệ";
    }

    if (!password) {
      newErrors.password = "Mật khẩu là bắt buộc";
    } else if (password.length < 6) {
      newErrors.password = "Mật khẩu phải ít nhất 6 ký tự";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError("");

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Giả lập delay API
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Lưu thông tin (mock)
      localStorage.setItem("authToken", "mock_token_" + Date.now());
      localStorage.setItem("userEmail", email);
      if (rememberMe) {
        localStorage.setItem("rememberEmail", email);
      }

      // Chuyển hướng sang dashboard
      navigate("/dashboard");
    } catch (error) {
      setGeneralError("Có lỗi xảy ra. Vui lòng thử lại.");
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-full lg:w-1/2 items-center justify-center bg-white px-4 lg:px-0">
      <form onSubmit={handleSubmit} className="w-full max-w-[420px] space-y-5">
        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Đăng Nhập</h2>
          <p className="text-gray-500 mt-1">Đăng nhập vào tài khoản của bạn</p>
        </div>

        {/* General Error */}
        {generalError && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
            {generalError}
          </div>
        )}

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Nhập email của bạn"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors({ ...errors, email: "" });
            }}
            disabled={isLoading}
            className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 transition ${
              errors.email
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            } disabled:bg-gray-100`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Mật Khẩu
          </label>
          <input
            id="password"
            type="password"
            placeholder="Nhập mật khẩu của bạn"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors({ ...errors, password: "" });
            }}
            disabled={isLoading}
            className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 transition ${
              errors.password
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            } disabled:bg-gray-100`}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              disabled={isLoading}
              className="w-4 h-4 rounded border-gray-300 cursor-pointer"
            />
            <span className="text-sm text-gray-700">Ghi nhớ tôi</span>
          </label>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            Quên mật khẩu?
          </a>
        </div>

        {/* Sign In Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white rounded-lg p-3 font-medium hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isLoading ? "Đang đăng nhập..." : "Đăng Nhập"}
        </button>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-600">
          Chưa có tài khoản?{" "}
          <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
            Đăng ký tại đây
          </a>
        </p>
      </form>
    </div>
  );
}