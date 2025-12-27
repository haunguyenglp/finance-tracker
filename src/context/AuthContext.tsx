import { createContext, useContext, useEffect, useState } from "react";
import { loginUser } from "../services/authService";
import { getMe } from "../services/userService";
import { setAccessToken as setAxiosAccessToken } from "../services/axiosClient";

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;

  // 👉 LOGIN
  const login = async (email: string, password: string) => {
    const data = await loginUser(email, password);

    // 1. lưu accessToken cho axios
    setAxiosAccessToken(data.accessToken);

    // 2. lấy user
    const me = await getMe();
    setUser(me);
  };

  // 👉 LOGOUT
  const logout = () => {
    setUser(null);
    setAxiosAccessToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return ctx;
};
