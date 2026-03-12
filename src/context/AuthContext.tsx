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

const [user, setUser] = useState<User | null>(() => {

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const name = localStorage.getItem("name");
  const role = localStorage.getItem("role");

  if (token && userId && name && role) {
    return {
      id: userId,
      name,
      role: role as Role
    };
  }

  return null;

});

  function login(user: User, token: string) {

    localStorage.setItem("token", token);
    localStorage.setItem("userId", user.id);
    localStorage.setItem("name", user.name);
    localStorage.setItem("role", user.role);

    setUser(user);

  }

  function logout() {

    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("name");
    localStorage.removeItem("role");

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