import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>

      {/* HERO */}
      <section style={{ textAlign: "center" }}>
        <img
          src="/vanessa.jpg"
          alt="Vanessa"
          style={{
            width: "100%",
            height: "260px",
            objectFit: "cover",
            borderRadius: "20px"
          }}
        />

        <h1 style={{ marginTop: "20px", fontSize: "28px" }}>
          Você sente que sua vida espiritual está travada?
        </h1>

        <p style={{ marginTop: "10px", lineHeight: "1.6" }}>
          Descubra como desenvolver uma intimidade real com Deus
          e destravar sua vida emocional e espiritual.
        </p>

        <button
          onClick={() => navigate("/ebook")}
          style={styles.primaryButton}
        >
          Quero começar agora
        </button>
      </section>

      {/* BLOCO 1 */}
      <section style={styles.section}>
        <h2>Dê vida ao conhecimento que você carrega</h2>

        <p style={styles.text}>
          A AVIVAI é um ecossistema de conteúdos que une fé, teologia e
          neurociência para transformar aquilo que você acredita em uma
          experiência real com Deus.
        </p>
      </section>

      {/* BLOCO 2 */}
      <section style={styles.section}>
        <h2>Você já sentiu isso?</h2>

        <p style={styles.text}>
          Você ora. Você lê. Você tenta fazer o certo… mas ainda sente
          um cansaço espiritual difícil de explicar.
        </p>
      </section>

      {/* BLOCO 3 */}
      <section style={styles.section}>
        <h2>Existe um caminho</h2>

        <p style={styles.text}>
          Não é falta de fé. É falta de direção.
        </p>

        <p style={styles.text}>
          A AVIVAI foi criada para transformar conhecimento em
          relacionamento real com Deus.
        </p>
      </section>

      {/* SOBRE */}
      <section style={styles.section}>
        <h2>Quem é Vanessa Nonato</h2>

        <p style={styles.text}>
          Filha amada do Pai, esposa do Jefferson e mãe do Gabriel e do Noah.
          Pastora, escritora, palestrante e mentora cristã.
        </p>

        <p style={styles.text}>
          Vanessa conduz cristãos que se sentem travados emocionalmente
          no resgate da intimidade com Deus, unindo neurociência e Bíblia.
        </p>
      </section>

      {/* BENEFÍCIOS */}
      <section style={styles.section}>
        <h2>O que você vai aprender</h2>

        <div style={styles.grid}>
          <div style={styles.card}>🙏 Como ouvir Deus com clareza</div>
          <div style={styles.card}>💛 Restaurar sua vida emocional</div>
          <div style={styles.card}>🔥 Vencer bloqueios espirituais</div>
          <div style={styles.card}>✨ Desenvolver intimidade real</div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={styles.cta}>
        <h2>Sua transformação começa agora</h2>

        <button
          onClick={() => navigate("/ebook")}
          style={styles.primaryButton}
        >
          📘 Começar pelo Ebook
        </button>

        <button
          onClick={() => navigate("/mentoria")}
          style={styles.secondaryButton}
        >
          🎓 Conhecer a Mentoria
        </button>
      </section>

    </div>
  );
}

const styles = {
  section: {
    marginTop: "50px",
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
    marginTop: "20px"
  },

  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
  },

  cta: {
    marginTop: "60px",
    textAlign: "center"
  },

  primaryButton: {
    marginTop: "15px",
    padding: "14px",
    background: "#8B4533",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    width: "100%"
  },

  secondaryButton: {
    marginTop: "10px",
    padding: "14px",
    background: "transparent",
    color: "#8B4533",
    border: "1px solid #8B4533",
    borderRadius: "10px",
    width: "100%"
  }
};