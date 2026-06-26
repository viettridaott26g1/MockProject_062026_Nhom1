import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthLayout } from "./layouts/auth-layout";
import { LoginPage } from "./features/auth/components/login-page";
import { RegisterPage } from "./features/auth/components/register-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
