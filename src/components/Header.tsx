import { useAuth } from "../context/AuthContext";
import "./Header.css";
import { useState } from "react";

import {
  Link,
  useNavigate
} from "react-router-dom";
export default function Header() {

  const { user, logout } = useAuth();

  const navigate = useNavigate();

const [openMenu, setOpenMenu] =
useState(false);

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

          <span className="logo-text">
            AVIVAI
          </span>

        </div>

        {/* MENU */}

        <nav className="nav">

          <Link to="/">
            Início
          </Link>

          <Link to="/sobre-vanessa">
            Sobre Vanessa
          </Link>

          {/* DROPDOWN CURSOS */}

          <div
  className={`dropdown ${
    openMenu ? "active" : ""
  }`}
>

            <div
  className="dropdown-title"
  onClick={() =>
    setOpenMenu(!openMenu)
  }
>

  Cursos

</div>

            <div className="dropdown-menu">

  <div className="course-tree">

    <Link
      to="/cursos"
      className="main-course"
    >
      O Caminho da Intimidade
    </Link>

    <div className="submenu-content">

      <Link
        to="/ebook"
        className="ebook-link"
      >
        Ebook
      </Link>

      <div className="submenu-nested">

        <Link to="/livro2">
          Livro Vivencial 2
        </Link>

      </div>

    </div>

  </div>

</div>

          </div>

          <Link to="/mentoria">
            Mentorias
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

                <Link to="/producer-dashboard">
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