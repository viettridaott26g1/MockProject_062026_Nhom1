import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./layouts/auth-layout";
import LoginForm from "./features/auth/components/login-form";
import RegisterForm from "./features/auth/components/register-form";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout></AuthLayout>}>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
