import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("userEmail");

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">{userEmail}</span>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Đăng Xuất
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            ✓ Đăng nhập thành công!
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Chào mừng bạn đến với dashboard. Đây là trang chính sau khi đăng nhập thành công.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900">Người Dùng</h3>
              <p className="text-3xl font-bold text-blue-600 mt-2">1</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900">Trạng Thái</h3>
              <p className="text-3xl font-bold text-green-600 mt-2">Hoạt Động</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900">Ngày Đăng Nhập</h3>
              <p className="text-lg font-bold text-purple-600 mt-2">{new Date().toLocaleDateString('vi-VN')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}