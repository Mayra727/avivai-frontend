import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface Props {
  children?: ReactNode;
  adminOnly?: boolean;
  producerOnly?: boolean;
}

export default function ProtectedRoute({
  children,
  adminOnly = false,
  producerOnly = false,
}: Props) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && user.role !== "superadmin") {
    return <Navigate to="/dashboard" />;
  }

  if (producerOnly && user.role !== "produtor") {
    return <Navigate to="/dashboard" />;
  }

  return <>{children}</>;
}
