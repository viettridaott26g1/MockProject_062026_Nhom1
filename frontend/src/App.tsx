import { Routes, Route } from "react-router-dom";
import LoginPage from "./features/auth/pages/login-pages";

function Home() {
  return <h1>Home</h1>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}