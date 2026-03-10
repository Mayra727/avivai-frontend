import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <header
        style={{
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#F8F5F1",
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "20px" }}>
          AVIVAI
        </div>

        <nav style={{ display: "flex", gap: "20px" }}>
          <Link to="/">Home</Link>
          <Link to="/cursos">Cursos</Link> {/* 🔥 AQUI ESTÁ O IMPORTANTE */}
          <Link to="/dashboard">Meus Cursos</Link>
          <Link to="/produtor">Produtor</Link>
          <Link to="/admin">Admin</Link>
        </nav>
      </header>

      <main style={{ minHeight: "70vh", padding: "40px" }}>
        <Outlet />
      </main>

      <footer
        style={{
          marginTop: "80px",
          padding: "40px",
          background: "#F8F5F1",
          textAlign: "center",
        }}
      >
        <p>© 2026 AVIVAI - Todos os direitos reservados</p>
        <p>
          <Link to="/sobre">Sobre</Link> |{" "}
          <Link to="/privacidade">Política de Privacidade</Link> |{" "}
          <Link to="/termos">Termos de Uso</Link>
        </p>
      </footer>
    </>
  );
}