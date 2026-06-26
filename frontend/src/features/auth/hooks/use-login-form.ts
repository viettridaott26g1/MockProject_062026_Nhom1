
import { useState } from "react";
import type { LoginFormData } from "../types/auth.types";

export function useLoginForm() {
  const [form, setForm] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (key: keyof LoginFormData, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    // MOCK LOGIN (chưa có backend)
    setTimeout(() => {
      alert("Đăng nhập thành công!");
      setLoading(false);
    }, 1000);
  };

  return {
    form,
    isPasswordVisible,
    setIsPasswordVisible,
    loading,
    handleChange,
    handleSubmit,
  };
}