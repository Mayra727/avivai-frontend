import { Routes, Route, Link } from "react-router-dom";
import Courses from "./pages/Courses";
import Register from "./pages/Register";
import Login from "./pages/Login";
import MyCourses from "./pages/MyCourses";
import Dashboard from "./pages/Dashboard";
import PaymentSuccess from "./pages/PaymentSuccess";

export default function App() {

  const email = localStorage.getItem("email");
  const userId = localStorage.getItem("userId");

  function logout() {
    localStorage.clear();
    window.location.href = "/";
  }

  return (
    <div style={{ padding: "20px" }}>

      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "15px" }}>Cursos</Link>

        {userId && (
          <Link to="/dashboard" style={{ marginRight: "15px" }}>
            Meus Cursos
          </Link>
        )}

        {!userId && (
          <>
            <Link to="/login" style={{ marginRight: "15px" }}>Login</Link>
            <Link to="/register">Registrar</Link>
          </>
        )}

        {userId && (
          <>
            <span style={{ marginLeft: "20px", marginRight: "10px" }}>
              👤 {email}
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

        {/* ROTA DO PAGAMENTO */}
        <Route path="/payment-success" element={<PaymentSuccess />} />

      </Routes>

    </div>
  );
}