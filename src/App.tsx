import { Routes, Route, Link } from "react-router-dom";
import Courses from "./pages/Courses";
import Register from "./pages/Register";
import Login from "./pages/Login";
import MyCourses from "./pages/MyCourses";
import Dashboard from "./pages/Dashboard";
import PaymentSuccess from "./pages/PaymentSuccess";
import ProducerDashboard from "./pages/ProducerDashboard";
import ProducerProfile from "./pages/ProducerProfile";

import { useAuth } from "./context/AuthContext";

export default function App() {

  const { user, logout } = useAuth();

  return (
    <div style={{ padding: "20px" }}>

      <nav style={{ marginBottom: "20px" }}>

        <Link to="/" style={{ marginRight: "15px" }}>
          Cursos
        </Link>

        {!user && (
          <>
            <Link to="/login" style={{ marginRight: "15px" }}>
              Login
            </Link>

            <Link to="/register">
              Registrar
            </Link>
          </>
        )}

        {user && (
          <>
            <Link to="/dashboard" style={{ marginRight: "15px" }}>
              Dashboard
            </Link>

            <Link to="/meus-cursos" style={{ marginRight: "15px" }}>
              Meus Cursos
            </Link>

            {user.role === "produtor" && (
              <Link to="/producer-dashboard" style={{ marginRight: "15px" }}>
                Painel do Produtor
              </Link>
            )}

            <span style={{ marginRight: "10px" }}>
              👤 {user.name}
            </span>

            <button onClick={logout}>
              Sair
            </button>
          </>
        )}

      </nav>

      <Routes>

        <Route path="/" element={<Courses />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/meus-cursos" element={<MyCourses />} />

        <Route path="/payment-success" element={<PaymentSuccess />} />

        <Route
          path="/producer-dashboard"
          element={<ProducerDashboard />}
        />
<Route path="/produtora" element={<ProducerProfile />} />


      </Routes>

    </div>
  );
}