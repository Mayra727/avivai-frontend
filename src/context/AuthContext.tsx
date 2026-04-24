import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

type Role = "superadmin" | "produtor" | "aluno";

interface User {
  id: string;
  name: string;
  role: Role;
}

interface AuthContextType {
  user: User | null;
  login: (user: User, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {

  const [user, setUser] = useState<User | null>(null);

  // 🔥 RECUPERAR USUÁRIO DO BACKEND
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;

    fetch("https://avivai-backend-production.up.railway.app/me", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then((data) => {
        if (data?.id) {
          setUser(data);
        }
      })
      .catch(() => {
        logout();
      });

  }, []);

function login(user: User, token: string) {
  localStorage.setItem("token", token);
  localStorage.setItem("userId", user.id); // 🔥 ESSENCIAL

  setUser(user);
}

  function logout() {

    localStorage.removeItem("token");

    setUser(null);

  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );

}

export function useAuth() {

  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;

}