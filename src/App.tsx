import { Routes, Route, Navigate } from 'react-router-dom';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import { useAuth } from "./context/AuthContext";

function App() {

  // const { loading } = useAuth();

  // if (loading) {
  //   return <div>Loading...</div>; // ⛔ CHẶN LOOP
  // }


  return (
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Routes>
  );
}

export default App;
