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
import CoursePlayer from "./pages/CoursePlayer";
import CreateCourse from "./pages/CreateCourse";
import PdfViewer from "./pages/PdfViewer";
import Biblioteca from "./pages/Biblioteca";
import CreateBook from "./pages/CreateBook";
import ForgotPassword
from "./pages/ForgotPassword";
import ResetPassword
from "./pages/ResetPassword";
import GrantAccess from "./pages/GrantAccess";
import StudentDashboard from "./pages/StudentDashboard";
import Footer from "./components/Footer";
import Solucoes from "./pages/Solucoes";
import SobreVanessa from "./pages/SobreVanessa";



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
          <Route path="/cadastro" element={<Register />} />
<Route
  path="/forgot-password"
  element={<ForgotPassword />}
/>
<Route
  path="/reset-password/:token"
  element={<ResetPassword />}
/>

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/meus-cursos" element={<MyCourses />} />

          <Route path="/cursos" element={<Courses />} />

          <Route path="/payment-success" element={<PaymentSuccess />} />

          <Route path="/producer-dashboard" element={<ProducerDashboard />} />

          <Route path="/ebook" element={<EbookPage />} />

          <Route path="/produtora" element={<ProducerProfile />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route
  path="/solucoes"
  element={<Solucoes />}
/>
            <Route path="/mentoria" element={<MentoriaPage />} />
            <Route path="/produtor" element={<ProducerDashboard />} />
<Route path="/curso/:id" element={<CoursePlayer />} />
<Route path="/course-player/:id" element={<CoursePlayer />} />
<Route path="/criar-curso" element={<CreateCourse />} />
<Route path="/pdf-viewer" element={<PdfViewer />} />
<Route path="/biblioteca" element={<Biblioteca />} />
<Route path="/criar-livro" element={<CreateBook />} />
<Route
  path="/editar-curso/:id"
  element={<CreateCourse />}
/>

<Route
  path="/liberar-acesso"
  element={<GrantAccess />}
/>

<Route
  path="/aluno"
  element={<StudentDashboard />}
/>

<Route
  path="/sobre-vanessa"
  element={<SobreVanessa />}
/>
          {/* ✅ AGORA ESTÁ NO LUGAR CERTO */}
          <Route path="/livro2" element={<Livro2Page />} />
        </Routes>

      </div>

      <Footer />

    </div>
  );
}