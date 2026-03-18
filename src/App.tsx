import { Routes, Route, Link } from "react-router-dom";
import Courses from "./pages/Courses";
import Register from "./pages/Register";
import Login from "./pages/Login";
import MyCourses from "./pages/MyCourses";
import Dashboard from "./pages/Dashboard";
import PaymentSuccess from "./pages/PaymentSuccess";
import ProducerDashboard from "./pages/ProducerDashboard";
import ProducerProfile from "./pages/ProducerProfile";
import EbookPage from "./pages/EbookPage";
import DownloadPage from "./pages/DownloadPage";

import { useAuth } from "./context/AuthContext";

export default function App() {
  const { user, logout } = useAuth();

  return (
    <div style={{ background: "#fafafa", minHeight: "100vh" }}>

      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          background: "#fff",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
        }}
      >
        {/* ESQUERDA */}
        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/cursos">Cursos</Link>
        </div>

        {/* DIREITA */}
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          {!user && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Registrar</Link>
            </>
          )}

          {user && (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/meus-cursos">Meus Cursos</Link>

              {user.role === "produtor" && (
                <Link to="/producer-dashboard">Painel</Link>
              )}

              <span>👤 {user.name}</span>

              <button onClick={logout}>Sair</button>
            </>
          )}
        </div>
      </nav>

      {/* ROTAS */}
      <Routes>
        <Route path="/" element={<EbookPage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/meus-cursos" element={<MyCourses />} />

        <Route path="/cursos" element={<Courses />} />

        <Route path="/payment-success" element={<PaymentSuccess />} />

        <Route path="/producer-dashboard" element={<ProducerDashboard />} />

        <Route path="/ebook" element={<EbookPage />} />

        <Route path="/produtora" element={<ProducerProfile />} />
        <Route path="/download" element={<DownloadPage />} />
      </Routes>

    </div>
  );
}