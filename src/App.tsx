import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

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
import Home from "./pages/Home";
import Livro2Page from "./pages/Livro2Page";
import MentoriaPage from "./pages/MentoriaPage";
import { useAuth } from "./context/AuthContext";

export default function App() {
  useAuth();

  return (
    <div
      style={{
        background: "#F8F5F1",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >

      <Header />

      {/* CONTAINER CORRETO */}
    <div style={{ width: "100%" }}>

        <Routes>
          <Route path="/" element={<Home />} />

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
            <Route path="/mentoria" element={<MentoriaPage />} />

          {/* ✅ AGORA ESTÁ NO LUGAR CERTO */}
          <Route path="/livro2" element={<Livro2Page />} />
        </Routes>

      </div>

    </div>
  );
}