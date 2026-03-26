import { useNavigate } from "react-router-dom";
import type { CSSProperties } from "react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>

      {/* HERO */}
      <section style={styles.hero}>

        {/* TEXTO */}
        <div style={styles.heroText}>
          <h1 style={styles.title}>
            Você sente que sua vida espiritual está travada?
          </h1>

          <p style={styles.subtitle}>
            Descubra como desenvolver uma intimidade real com Deus
            e destravar sua vida emocional e espiritual.
          </p>

          <button
            onClick={() => navigate("/ebook")}
            style={styles.primaryButton}
          >
            Quero começar agora
          </button>
        </div>

        {/* IMAGEM */}
        <div style={styles.heroImageContainer}>
          <img
            src="/vanessa.jpg"
            alt="Vanessa"
            style={styles.heroImage}
          />
        </div>

      </section>

      {/* SEÇÕES */}
      <section style={styles.section}>
        <h2>Dê vida ao conhecimento que você carrega</h2>
        <p style={styles.text}>
          A AVIVAI une fé, teologia e neurociência para transformar
          conhecimento em experiência real com Deus.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Você já sentiu isso?</h2>
        <p style={styles.text}>
          Você ora, lê, tenta fazer o certo… mas ainda sente um
          cansaço espiritual difícil de explicar.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Existe um caminho</h2>
        <p style={styles.text}>Não é falta de fé. É falta de direção.</p>
        <p style={styles.text}>
          A AVIVAI transforma conhecimento em relacionamento real com Deus.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Quem é Vanessa Nonato</h2>
        <p style={styles.text}>
          Pastora, escritora e mentora cristã que ajuda pessoas
          a destravarem sua vida espiritual.
        </p>
      </section>

      {/* BENEFÍCIOS */}
      <section style={styles.section}>
        <h2>O que você vai aprender</h2>

        <div style={styles.grid}>
          <div style={styles.card}>🙏 Ouvir Deus com clareza</div>
          <div style={styles.card}>💛 Restaurar emoções</div>
          <div style={styles.card}>🔥 Vencer bloqueios</div>
          <div style={styles.card}>✨ Intimidade real</div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={styles.cta}>
        <h2>Sua transformação começa agora</h2>

        <button
          onClick={() => navigate("/ebook")}
          style={styles.primaryButton}
        >
          📘 Ebook
        </button>

        <button
          onClick={() => navigate("/mentoria")}
          style={styles.secondaryButton}
        >
          🎓 Mentoria
        </button>
      </section>

    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {

  container: {
    width: "100%",
    padding: "20px"
  },

  /* HERO RESPONSIVO */
  hero: {
    display: "flex",
    flexDirection: window.innerWidth > 768 ? "row" : "column",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "40px",
    maxWidth: "1200px",
    margin: "40px auto"
  },

  heroText: {
    flex: 1,
    maxWidth: "600px",
    textAlign: window.innerWidth > 768 ? "left" : "center"
  },

  heroImageContainer: {
    flex: 1,
    width: "100%"
  },

  heroImage: {
    width: "100%",
    maxWidth: "500px",
    height: "auto",
    display: "block",
    borderRadius: "20px"
  },

  title: {
    fontSize: "clamp(22px, 4vw, 36px)",
    fontWeight: 700
  },

  subtitle: {
    marginTop: "10px",
    lineHeight: "1.6"
  },

  section: {
    marginTop: "60px",
    textAlign: "center"
  },

  text: {
    marginTop: "10px",
    lineHeight: "1.6",
    maxWidth: "600px",
    marginInline: "auto"
  },

  grid: {
    display: "grid",
    gap: "15px",
    marginTop: "20px",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))"
  },

  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
  },

  cta: {
    marginTop: "80px",
    textAlign: "center"
  },

  primaryButton: {
    marginTop: "15px",
    padding: "16px",
    background: "#8B4533",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    maxWidth: "400px",
    width: "100%",
    marginInline: "auto",
    display: "block",
    cursor: "pointer"
  },

  secondaryButton: {
    marginTop: "10px",
    padding: "16px",
    background: "transparent",
    color: "#8B4533",
    border: "1px solid #8B4533",
    borderRadius: "10px",
    maxWidth: "400px",
    width: "100%",
    marginInline: "auto",
    display: "block",
    cursor: "pointer"
  }

};