import { useNavigate } from "react-router-dom";
import type { CSSProperties } from "react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>

      {/* HERO */}
      <section style={styles.hero}>

        <img
          src="/vanessa.jpg"
          alt="Vanessa"
          style={styles.heroImage}
        />

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
            style={styles.button}
          >
            Quero destravar minha vida espiritual
          </button>
        </div>

      </section>

      {/* SOBRE AVIVAI */}
      <section style={styles.section}>

        <h2 style={styles.sectionTitle}>
          Dê vida ao conhecimento que você carrega
        </h2>

        <p style={styles.text}>
          A AVIVAI é um ecossistema de conteúdos que une fé,
          teologia e neurociência para transformar aquilo que
          você acredita em uma experiência real com Deus.
        </p>

        <p style={styles.text}>
          Não oferecemos apenas informação. Oferecemos direção,
          prática e transformação real na sua vida espiritual.
        </p>

      </section>

      {/* DOR */}
      <section style={styles.section}>

        <h2 style={styles.sectionTitle}>
          Você já sentiu isso?
        </h2>

        <p style={styles.text}>
          Você ora. Você lê. Você tenta fazer o certo…
          mas ainda sente um cansaço espiritual difícil de explicar.
        </p>

      </section>

      {/* SOLUÇÃO */}
      <section style={styles.section}>

        <h2 style={styles.sectionTitle}>
          Existe um caminho
        </h2>

        <p style={styles.text}>
          Não é falta de fé. É falta de direção.
        </p>

        <p style={styles.text}>
          A AVIVAI foi criada para transformar conhecimento
          em relacionamento real com Deus.
        </p>

      </section>

      {/* MÉTODO */}
      <section style={styles.section}>

        <h2 style={styles.sectionTitle}>
          Como essa transformação acontece
        </h2>

        <div style={{ marginTop: "20px" }}>

          <div style={styles.card}>
            <strong>📖 Teologia sólida</strong>
            <p style={styles.textSmall}>
              Fundamentada nas Escrituras, fortalecendo presença,
              escuta e obediência.
            </p>
          </div>

          <div style={styles.card}>
            <strong>🧠 Neurociência aplicada</strong>
            <p style={styles.textSmall}>
              Organização emocional e constância espiritual.
            </p>
          </div>

        </div>

      </section>

      {/* AUTORIDADE */}
      <section style={styles.section}>

        <h2 style={styles.sectionTitle}>
          Quem é Vanessa Nonato
        </h2>

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

        <h2 style={styles.sectionTitle}>
          O que você vai aprender
        </h2>

        <p style={{ color: "#666" }}>
          Um caminho prático para destravar sua vida espiritual
        </p>

        <div style={styles.grid}>

          <div style={styles.card}>🙏 Como ouvir Deus com clareza</div>
          <div style={styles.card}>💛 Restaurar sua vida emocional</div>
          <div style={styles.card}>🔥 Vencer bloqueios espirituais</div>
          <div style={styles.card}>✨ Desenvolver intimidade real com Deus</div>

        </div>

      </section>

      {/* EBOOK */}
      <section style={styles.ebook}>

        <img
          src="/ebook.png"
          alt="Ebook"
          style={styles.ebookImg}
        />

        <h2>📘 Primeiros Conceitos</h2>

        <p style={styles.text}>
          Um guia prático para viver intimidade real com Deus
          e iniciar sua transformação espiritual.
        </p>

        <button
          onClick={() => navigate("/ebook")}
          style={styles.button}
        >
          Acessar gratuitamente
        </button>

      </section>

      {/* MENTORIA */}
      <section style={styles.ebook}>

        <h2>🎓 Mentoria AVIVAI</h2>

        <p style={styles.text}>
          A leitura abre o caminho. A prática constrói a transformação.
        </p>

        <p style={styles.text}>
          Uma jornada guiada para quem deseja viver profundamente
          aquilo que aprendeu.
        </p>

        <button
  onClick={() => navigate("/mentoria")}
  style={styles.button}
>
          Quero viver essa jornada
        </button>

      </section>

      {/* CTA FINAL */}
      <section style={styles.cta}>

        <h2 style={styles.ctaTitle}>
          Sua transformação começa agora
        </h2>

        <button
          onClick={() => navigate("/ebook")}
          style={styles.button}
        >
          Começar agora
        </button>

      </section>

    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {

  hero: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginBottom: "50px"
  },

  heroImage: {
    width: "100%",
    borderRadius: "20px",
    maxHeight: "320px",
    objectFit: "cover",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
  },

  heroText: {
    textAlign: "center"
  },

  title: {
    fontSize: "28px",
    fontWeight: 700,
    lineHeight: "1.3"
  },

  subtitle: {
    marginTop: "12px",
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.6"
  },

  button: {
    marginTop: "20px",
    padding: "14px",
    width: "100%",
    background: "#8B4533",
    color: "white",
    border: "none",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer"
  },

  section: {
    marginBottom: "50px",
    textAlign: "center"
  },

  sectionTitle: {
    fontSize: "22px",
    marginBottom: "10px"
  },

  text: {
    color: "#555",
    lineHeight: "1.6",
    marginTop: "10px"
  },

  textSmall: {
    color: "#555",
    fontSize: "14px",
    marginTop: "5px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
    marginTop: "20px"
  },

  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.08)"
  },

  ebook: {
    background: "#fff",
    padding: "25px",
    borderRadius: "12px",
    textAlign: "center",
    marginBottom: "50px"
  },

  ebookImg: {
    width: "140px",
    margin: "0 auto 15px",
    display: "block"
  },

  cta: {
    textAlign: "center",
    padding: "30px",
    background: "#8B4533",
    color: "white",
    borderRadius: "16px",
    marginTop: "40px"
  },

  ctaTitle: {
    fontSize: "22px"
  }

};