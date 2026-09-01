import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { API_URL } from "../services/api";

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

    fetch(`${API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then((data) => {
  console.log("USUÁRIO DO /ME:", data); // 🔥 ESSENCIAL

  if (data?.id) {
    setUser(data);
  } else {
    console.log("ERRO NO /ME:", data);
  }
})

  }, []);

function login(user: User, token: string) {
  localStorage.setItem("token", token);
  localStorage.setItem("userId", user.id); // 🔥 ESSENCIAL

  setUser(user);

  localStorage.setItem(
  "user",
  JSON.stringify(user)
);
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