import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
  <div className="home">

    {/* HERO */}
    <section className="hero">

      <div className="hero-text">
        <h1>
          Você sente que sua vida espiritual está travada?
        </h1>

        <p>
          Descubra como desenvolver uma intimidade real com Deus
          e destravar sua vida emocional e espiritual.
        </p>

        <button
          onClick={() => navigate("/ebook")}
          className="primary-btn"
        >
          Quero começar agora
        </button>
      </div>

      <img
        src="/vanessa.jpg"
        alt="Vanessa"
        className="hero-image"
      />

    </section>

    {/* SEÇÕES */}
    <section className="section">
      <h2>Dê vida ao conhecimento que você carrega</h2>
      <p className="text">
       A AVIVAI une fé, teologia e neurociência para transformar
aquilo que você acredita em uma experiência real com Deus.
      </p>
    </section>

    <section className="section">
      <h2>Você já sentiu isso?</h2>
      <p className="text">
        Você ora, lê, tenta fazer o certo… mas ainda sente um
cansaço espiritual difícil de explicar.
      </p>
    </section>

    <section className="section">
      <h2>Existe um caminho</h2>
      <p className="text">Não é falta de fé. É falta de direção.</p>
    </section>

    <section className="section">
      <h2>Quem é Vanessa Nonato</h2>
      <p className="text">
        Pastora, escritora e mentora cristã...
      </p>
    </section>

    {/* BENEFÍCIOS */}
    <section className="section">
      <h2>O que você vai aprender</h2>

      <div className="grid">
        <div className="card">🙏 Ouvir Deus com clareza</div>
        <div className="card">💛 Restaurar emoções</div>
        <div className="card">🔥 Vencer bloqueios</div>
        <div className="card">✨ Intimidade real</div>
      </div>
    </section>

    {/* CTA */}
    <section className="cta">
      <h2>Sua transformação começa agora</h2>

      <button
        onClick={() => navigate("/ebook")}
        className="button-primary"
      >
        📘 Ebook
      </button>

      <button
        onClick={() => navigate("/mentoria")}
        className="button-secondary"
      >
        🎓 Mentoria
      </button>
    </section>

  </div>
);

}