import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Header.css";

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <header className="header">
      <div className="header-container">

        {/* LOGO */}
        <div className="logo-container">
          <img
            src="/logo.png"
            alt="Avivai"
            className="logo-img"
          />
          <span className="logo-text">AVIVAI</span>
        </div>

        {/* MENU */}
<nav className="nav">

  <Link to="/">
    Início
  </Link>

  <Link to="/solucoes">
    Soluções
  </Link>

  <div className="dropdown">

    <span className="dropdown-title">
      Jornada da Intimidade
    </span>

    <div className="dropdown-menu">

      <div className="submenu">

        <Link
          to="/cursos"
          className="main-course"
        >
          O Caminho da Intimidade
        </Link>

        <div className="submenu-content">

          <Link to="/ebook">
            Ebook
          </Link>

          <Link to="/livro2">
            Livro Vivencial 2
          </Link>

        </div>

      </div>

    </div>

  </div>

  <Link to="/mentoria">
    Mentorias
  </Link>

  <Link to="/contato">
    Fale Conosco
  </Link>

  {!user && (

    <>

      <Link to="/login">
        Entrar
      </Link>

      <Link
        to="/cadastro"
        className="cta-btn"
      >
        Faça seu cadastro
      </Link>

    </>

  )}

  {user && (

    <>

      {user.role === "produtor" && (

        <Link to="/dashboard">
          Dashboard
        </Link>

      )}

      {user.role === "aluno" && (

        <Link to="/aluno">
          Área do Aluno
        </Link>

      )}

      <span className="user">
        {user.name}
      </span>

      <button
        onClick={handleLogout}
        className="logout-btn"
      >
        Logout
      </button>

    </>

  )}

</nav>

      </div>
    </header>
  );
}