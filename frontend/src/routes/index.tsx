import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "./paths";
import LoginPage from "../features/auth/pages/LoginPage";

export function AppRouter() {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      {/* Default redirect to login for now */}
      <Route path="*" element={<Navigate to={ROUTES.LOGIN} replace />} />
    </Routes>
  );
}
