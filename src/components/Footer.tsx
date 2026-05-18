import "./Footer.css";

export default function Footer(){

  return(

    <footer className="footer">

      <div className="footer-content">

        <div className="footer-brand">

          <img
            src="/logo.png"
            alt="Avivai"
            className="footer-logo"
          />

          <h2>
            AVIVAI
          </h2>

          <p>
            Transformando vidas através
            do conhecimento espiritual.
          </p>

        </div>

        <div className="footer-links">

          <h3>Navegação</h3>

          <a href="/">
            Início
          </a>

          <a href="/cursos">
            Cursos
          </a>

          <a href="/mentoria">
            Mentoria
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 AVIVAI — Todos os direitos reservados.
        </p>

        <span>
          Desenvolvido por MTechAI • Tecnologia em movimento ✨
        </span>

      </div>

    </footer>

  );

}