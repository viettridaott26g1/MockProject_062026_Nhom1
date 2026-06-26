import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthLayout } from "./layouts/auth-layout";
import { LoginPage } from "./features/auth/components/login-page";
import { RegisterPage } from "./features/auth/components/register-page";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/query-client";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
