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

          <Link to="/">Início</Link>
          <div className="dropdown">

  <span className="dropdown-title">
    Cursos
  </span>

  <div className="dropdown-menu">

    <Link to="/cursos">
      O Caminho da Intimidade
    </Link>

    <Link to="/ebook">
      Ebook
    </Link>

    <Link to="/livro2">
      Livro Vivencial 2
    </Link>

  </div>

</div>
          <Link to="/mentoria">Mentoria</Link>

          {!user && (
            <>
              <Link to="/login">Entrar</Link>
              <Link to="/cadastro">Cadastro</Link>
            </>
          )}

          {user && (
            <>
              {user.role === "produtor" && (

  <Link to="/dashboard">
    Dashboard
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

