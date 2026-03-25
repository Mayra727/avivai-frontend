import { useNavigate } from "react-router-dom";
import type { CSSProperties } from "react";

export default function Home() {
  const navigate = useNavigate();

  return (
  <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>

 <section
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    marginBottom: "50px"
  }}
>

  {/* IMAGEM */}
  <img
    src="/vanessa.jpg"
    alt="Vanessa"
    style={{
      width: "100%",
      borderRadius: "20px",
      objectFit: "cover",
      maxHeight: "320px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
    }}
  />

  {/* TEXTO */}
  <div style={{ textAlign: "center" }}>

    <h1
      style={{
        fontSize: "28px",
        fontWeight: "700",
        lineHeight: "1.3"
      }}
    >
      Você sente que sua vida espiritual está travada?
    </h1>

    <p
      style={{
        marginTop: "12px",
        fontSize: "16px",
        color: "#555",
        lineHeight: "1.6"
      }}
    >
      Descubra como desenvolver uma intimidade real com Deus
      e destravar sua vida emocional e espiritual.
    </p>

    <button
      onClick={() => navigate("/ebook")}
      style={{
        marginTop: "20px",
        padding: "16px",
        width: "100%",
        background: "#8B4533",
        color: "white",
        border: "none",
        borderRadius: "12px",
        fontSize: "16px",
        fontWeight: "600",
        boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
      }}
    >
      Quero destravar minha vida espiritual
    </button>

  </div>

</section>

{/* SOBRE AVIVAI */}
<section style={{ textAlign: "center", marginBottom: "50px" }}>

  <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>
    Dê vida ao conhecimento que você carrega
  </h2>

  <p style={{ color: "#555", lineHeight: "1.6" }}>
    A AVIVAI é um ecossistema de conteúdos que une fé,
    teologia e neurociência para transformar aquilo que
    você acredita em uma experiência real com Deus.
  </p>

</section>

{/* DESCRIÇÃO COMPLETA */}
<section style={{ marginBottom: "50px" }}>

  <p style={{ color: "#555", lineHeight: "1.6" }}>
    A AVIVAI é um ecossistema de conteúdo e experiência que reúne livros vivenciais,
    cursos e mentorias.
  </p>

  <p style={{ marginTop: "10px", color: "#555", lineHeight: "1.6" }}>
    Não oferecemos apenas informação. Oferecemos ordenamento.
  </p>

  <p style={{ marginTop: "10px", color: "#555", lineHeight: "1.6" }}>
    Nosso propósito é ajudar você a reorganizar sua jornada espiritual,
    removendo excessos e permitindo que a fé encontre a sua vida real.
  </p>

</section>

{/* DOR */}
<section style={{ marginBottom: "50px" }}>

  <h2 style={{ fontSize: "20px", textAlign: "center" }}>
    Você já sentiu isso?
  </h2>

  <p style={{ marginTop: "15px", color: "#555", lineHeight: "1.6" }}>
    Você ora. Você lê. Você tenta fazer o certo…
    mas ainda sente um cansaço espiritual difícil de explicar.
  </p>

</section>

{/* SOLUÇÃO */}
<section style={{ marginBottom: "50px", textAlign: "center" }}>

  <h2 style={{ fontSize: "20px" }}>
    Existe um caminho
  </h2>

  <p style={{ marginTop: "10px", color: "#555" }}>
    Não é falta de fé. É falta de direção.
  </p>

  <p style={{ marginTop: "10px", color: "#555" }}>
    A AVIVAI foi criada para transformar conhecimento
    em relacionamento real com Deus.
  </p>

{/* MÉTODO COMPLETO */}
<section style={{ marginBottom: "50px" }}>

  <h2 style={{ textAlign: "center" }}>
    Como essa transformação acontece
  </h2>

  <div style={{ marginTop: "20px" }}>

    <div style={{ marginBottom: "20px" }}>
      <strong>📖 Teologia sólida</strong>
      <p style={{ color: "#555" }}>
        A jornada está fundamentada nas Escrituras, fortalecendo presença,
        escuta, obediência e permanência com Deus.
      </p>
    </div>

    <div>
      <strong>🧠 Neurociência aplicada</strong>
      <p style={{ color: "#555" }}>
        Práticas que ajudam você a organizar pensamentos, emoções e construir
        constância na sua vida espiritual.
      </p>
    </div>

  </div>

</section>

</section>

      {/* SOBRE */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Quem é Vanessa Nonato</h2>

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
<section
  style={{
    textAlign: "center",
    marginBottom: "50px"
  }}
>
  <h2
    style={{
      fontSize: "clamp(22px, 5vw, 28px)",
      marginBottom: "10px"
    }}
  >
    O que você vai aprender
  </h2>

  <p
    style={{
      fontSize: "14px",
      color: "#666",
      marginBottom: "20px"
    }}
  >
    Um caminho prático para destravar sua vida espiritual
  </p>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "12px"
    }}
  >

    <div
      style={{
        background: "#fff",
        padding: "15px",
        borderRadius: "12px",
        fontSize: "14px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.08)"
      }}
    >
      🙏 Como ouvir Deus com clareza
    </div>

    <div
      style={{
        background: "#fff",
        padding: "15px",
        borderRadius: "12px",
        fontSize: "14px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.08)"
      }}
    >
      💛 Restaurar sua vida emocional
    </div>

    <div
      style={{
        background: "#fff",
        padding: "15px",
        borderRadius: "12px",
        fontSize: "14px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.08)"
      }}
    >
      🔥 Vencer bloqueios espirituais
    </div>

    <div
      style={{
        background: "#fff",
        padding: "15px",
        borderRadius: "12px",
        fontSize: "14px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.08)"
      }}
    >
      ✨ Desenvolver intimidade real com Deus
    </div>

  </div>
</section>

{/* CAMINHO DA INTIMIDADE */}
<section style={{ marginBottom: "50px" }}>

  <h2 style={{ textAlign: "center" }}>
    O Caminho da Intimidade
  </h2>

  <p style={{ textAlign: "center", color: "#555" }}>
    Uma jornada construída em etapas para levar você da teoria à experiência real.
  </p>

  <div style={{ marginTop: "20px", display: "grid", gap: "15px" }}>

    <div style={styles.card}>
      🔥 Espírito Santo  
      <p style={{ fontSize: "13px", color: "#555" }}>
        Despertar e sensibilidade para ouvir a voz de Deus.
      </p>
    </div>

    <div style={styles.card}>
      ✝️ Jesus  
      <p style={{ fontSize: "13px", color: "#555" }}>
        Caminhar com Cristo de forma prática no dia a dia.
      </p>
    </div>

    <div style={styles.card}>
      👑 Pai  
      <p style={{ fontSize: "13px", color: "#555" }}>
        Descobrir identidade, pertencimento e propósito.
      </p>
    </div>

  </div>

</section>

{/* POR QUE FUNCIONA */}
<section style={{ marginBottom: "50px" }}>

  <h2 style={{ textAlign: "center" }}>
    Por que esse caminho funciona?
  </h2>

  <p style={{ marginTop: "15px", color: "#555", lineHeight: "1.6" }}>
    Porque aqui a fé não é tratada como teoria, mas como prática.
  </p>

  <p style={{ marginTop: "10px", color: "#555", lineHeight: "1.6" }}>
    Cada conteúdo foi desenhado como uma experiência que leva você
    da compreensão à transformação real.
  </p>

</section>

     {/* EBOOK */}

{/* EBOOK */}
<section style={styles.ebook}>

  <img
    src="/ebook.png"
    alt="Ebook"
    style={{
      width: "140px",
      margin: "0 auto 15px",
      display: "block"
    }}
  />

  <h2>📘 Primeiros Conceitos</h2>

  <p style={styles.text}>
    Um guia prático para viver intimidade real com Deus.
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
    A leitura abre o caminho. A prática constrói a morada.
  </p>

  <p style={styles.text}>
    Uma jornada guiada para transformar conhecimento em prática
    com acompanhamento e direção.
  </p>

  <button style={styles.button}>
    Quero viver essa jornada
  </button>

</section>

      {/* CTA FINAL */}
      <section
  style={{
    textAlign: "center",
    padding: "30px",
    background: "#8B4533",
    color: "white",
    borderRadius: "16px",
    marginTop: "40px"
  }}
>
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

   imageContainer: {
    width: "100%",
 },

heroImage: {
  width: "100%",
  aspectRatio: "4 / 5",
  objectFit: "cover",
  borderRadius: "20px",
  display: "block"
},

heroText: {
  textAlign: "center",
  maxWidth: "500px",
  margin: "0 auto"
},

  title: {
    fontSize: "clamp(22px, 5vw, 34px)",
    fontWeight: 700
  },

  subtitle: {
    marginTop: "15px",
    fontSize: "clamp(14px, 3.5vw, 18px)",
    lineHeight: "1.6"
  },

  button: {
    marginTop: "20px",
    padding: "14px 25px",
    background: "#8B4533",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer"
  },

  section: {
    marginBottom: "50px",
    textAlign: "center"
  },

  sectionTitle: {
    fontSize: "clamp(20px, 5vw, 28px)",
    marginBottom: "15px"
  },

  text: {
    maxWidth: "700px",
    margin: "10px auto",
    lineHeight: "1.6"
  },

  benefits: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "15px"
  },

  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
  },

  ebook: {
    background: "#fff",
    padding: "25px",
    borderRadius: "12px",
    textAlign: "center",
    marginBottom: "50px"
  },

  cta: {
    textAlign: "center",
    padding: "30px",
    background: "#8B4533",
    color: "white",
    borderRadius: "12px"
  },

  ctaTitle: {
    fontSize: "22px"
  }

};