import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header() {

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <header style={styles.header}>
      <div style={styles.container}>

        {/* LOGO */}
        <div style={styles.logoContainer}>
          <img
            src="/logo.png"
            alt="Avivai"
            style={styles.logoImg}
          />
          <h2 style={styles.logo}>AVIVAI</h2>
        </div>

        {/* MENU */}
        <nav style={styles.nav}>

          <Link style={styles.link} to="/">
            Início
          </Link>

          {!user && (
            <>
              <Link style={styles.link} to="/login">
                Entrar
              </Link>

              <Link style={styles.link} to="/cadastro">
                Cadastro
              </Link>
            </>
          )}

          {user && (
            <>
              <Link style={styles.link} to="/dashboard">
                Dashboard
              </Link>

              <span style={styles.user}>
                {user.name}
              </span>

              <button
                onClick={handleLogout}
                style={styles.logoutButton}
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

const styles = {

  header: {
    backgroundColor: "#7A4A3A",
    padding: "18px 0",
    marginBottom: "50px",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },

 logoImg: {
  width: "35px",
  height: "35px",
  objectFit: "contain" as const
},

  logo: {
    color: "#F8F5F1",
    fontWeight: 600,
    letterSpacing: "3px",
    fontSize: "20px",
  },

  nav: {
    display: "flex",
    gap: "30px",
    alignItems: "center",
  },

  link: {
    color: "#F8F5F1",
    textDecoration: "none",
    fontWeight: 500,
  },

  user: {
    color: "#F8F5F1",
    fontWeight: 600,
  },

  logoutButton: {
    background: "transparent",
    border: "1px solid #F8F5F1",
    color: "#F8F5F1",
    padding: "6px 12px",
    cursor: "pointer",
  }

};