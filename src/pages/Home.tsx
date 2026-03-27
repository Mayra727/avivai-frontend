import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">

      {/* HERO PREMIUM */}
      <section className="hero">

        <div className="hero-text">

          <h1>
            Você ama Deus… mas sente que sua vida espiritual não flui como deveria?
          </h1>

          <p className="hero-sub">
            Não é falta de fé. É falta de direção.
            A AVIVAI foi criada para transformar aquilo que você acredita
            em uma experiência real com Deus.
          </p>

          <button
            onClick={() => navigate("/ebook")}
            className="primary-btn"
          >
            Quero destravar minha vida espiritual
          </button>

          <span className="hero-mini">
            Comece gratuitamente pelo primeiro passo
          </span>

        </div>

        <div className="hero-image-wrapper">
          <img
            src="/vanessa.jpg"
            alt="Vanessa"
            className="hero-image"
          />
        </div>

      </section>

      {/* BLOCO DE POSICIONAMENTO */}
      <section className="section premium-section">
        <h2>Dê vida ao conhecimento que você carrega</h2>

        <p className="text">
          A AVIVAI é um ecossistema de conteúdos que une fé, teologia e neurociência
          para transformar aquilo que você acredita em uma experiência viva com Deus.
        </p>
      </section>

      {/* DOR DO PÚBLICO */}
      <section className="section">
        <h2>Você já sentiu isso?</h2>

        <div className="pain-list">
          <p>Você ora… mas não sente Deus.</p>
          <p>Você lê… mas não vive.</p>
          <p>Você tenta… mas continua travado.</p>
        </div>

        <p className="text highlight">
          Não é falta de fé. É que ninguém te ensinou a viver com Deus.
        </p>
      </section>

      {/* SOLUÇÃO */}
      <section className="section premium-box">
        <h2>Existe um caminho</h2>

        <p className="text">
          A AVIVAI foi criada para tirar sua espiritualidade do campo das ideias
          e plantar no solo da sua vida real.
        </p>
      </section>

      {/* SOBRE */}
      <section className="section about">
          <div className="section-inner">
  <h2>Quem é Vanessa Nonato</h2>

  <p className="about-intro">
    Filha amada do Pai, esposa do Jefferson e mãe do Gabriel e do Noah.
  </p>

  <p className="about-roles">
    Pastora, escritora, palestrante e mentora cristã.
  </p>

  <p className="text">
    Eu conduzo cristãos que se sentem travados em sua vida emocional e espiritual
    no resgate da intimidade com Deus e da saúde da alma.
  </p>

  <p className="text">
    Através de uma metodologia que une Neurociência e Fundamentos Bíblicos,
    eu estruturo o caminho da cura real, ensinando-os a viverem uma fé prática
    e apaixonada pelo Espírito Santo que é o meu bem mais precioso.
  </p>
  </div>
</section>

      {/* BENEFÍCIOS PREMIUM */}
      <section className="section">
        <h2>O que você vai vivenciar</h2>

        <div className="grid">
          <div className="card">🙏 Ouvir Deus com clareza</div>
          <div className="card">💛 Restaurar sua vida emocional</div>
          <div className="card">🔥 Vencer bloqueios espirituais</div>
          <div className="card">✨ Desenvolver intimidade real com Deus</div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta premium-cta">

        <h2>Sua transformação começa agora</h2>

        <p>
          Não é sobre saber mais.
          É sobre viver de forma real aquilo que você já acredita.
        </p>

        <div className="cta-buttons">
          <button
            onClick={() => navigate("/ebook")}
            className="button-primary"
          >
            📘 Começar gratuitamente
          </button>

          <button
            onClick={() => navigate("/mentoria")}
            className="button-secondary"
          >
            🎓 Conhecer a mentoria
          </button>
        </div>

      </section>

    </div>
  );
}