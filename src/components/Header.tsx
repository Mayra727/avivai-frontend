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
  padding: "14px 0", // 👈 diminui um pouco
  marginBottom: "20px", // 👈 menos espaço
},

  container: {
  maxWidth: "500px", // 🔥 IGUAL AO HOME
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 20px",
},

  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "15px"
  },

 logoImg: {
  width: "65px",
  height: "65px",
  objectFit: "contain" as const,
  filter: "drop-shadow(0 0 12px rgba(255, 180, 0, 0.9))"
},

  logo: {
    color: "#F8F5F1",
    fontWeight: 700,
    letterSpacing: "5px",
    fontSize: "26px",
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