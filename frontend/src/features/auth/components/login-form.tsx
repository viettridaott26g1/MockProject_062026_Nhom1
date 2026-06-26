import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Input,
  Label,
  Checkbox,
  Alert,
} from "@/components/ui";

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
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[420px] space-y-5"
    >
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800">
          Đăng Nhập
        </h2>

        <p className="mt-1 text-gray-500">
          Đăng nhập vào tài khoản của bạn
        </p>
      </div>

      {generalError && <Alert message={generalError} />}

      {/* Email */}
      <div>
        <Label htmlFor="email">Email</Label>

        <Input
          id="email"
          type="email"
          placeholder="Nhập email của bạn"
          value={email}
          error={!!errors.email}
          disabled={isLoading}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrors({ ...errors, email: "" });
          }}
        />

        {errors.email && (
          <p className="mt-1 text-sm text-red-500">
            {errors.email}
          </p>
        )}
      </div>

      {/* Password */}
      <div>
        <Label htmlFor="password">
          Mật Khẩu
        </Label>

        <Input
          id="password"
          type="password"
          placeholder="Nhập mật khẩu của bạn"
          value={password}
          error={!!errors.password}
          disabled={isLoading}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrors({
              ...errors,
              password: "",
            });
          }}
        />

        {errors.password && (
          <p className="mt-1 text-sm text-red-500">
            {errors.password}
          </p>
        )}
      </div>

      {/* Remember */}
      <div className="flex items-center justify-between">
        <label className="flex cursor-pointer items-center gap-2">
          <Checkbox
            checked={rememberMe}
            disabled={isLoading}
            onChange={(e) =>
              setRememberMe(e.target.checked)
            }
          />

          <span className="text-sm text-gray-700">
            Ghi nhớ tôi
          </span>
        </label>

        <a
          href="#"
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          Quên mật khẩu?
        </a>
      </div>

      <Button
        type="submit"
        disabled={isLoading}
      >
        {isLoading
          ? "Đang đăng nhập..."
          : "Đăng Nhập"}
      </Button>

      <p className="text-center text-sm text-gray-600">
        Chưa có tài khoản?{" "}
        <a
          href="#"
          className="font-medium text-blue-600 hover:text-blue-700"
        >
          Đăng ký tại đây
        </a>
      </p>
    </form>
  );
}