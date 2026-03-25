import { useNavigate } from "react-router-dom";
import type { CSSProperties } from "react";

export default function Home() {
  const navigate = useNavigate();

  return (
  <div style={{ padding: "20px" }}>

 <section>

  {/* IMAGEM */}
<img
  src="/vanessa.jpg"
  alt="Vanessa"
  style={{
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "20px",
    marginBottom: "20px",
    display: "block",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)"
  }}
/>

  {/* TEXTO */}
  <div style={{ textAlign: "center", padding: "0 10px" }}>
    <h1
  style={{
    fontSize: "26px",
    lineHeight: "1.3",
    fontWeight: "700"
  }}
>
      Você sente que sua vida espiritual está travada?
    </h1>

    <p
  style={{
    marginTop: "12px",
    fontSize: "15px",
    lineHeight: "1.6",
    color: "#555"
  }}
>
      Descubra como desenvolver uma intimidade REAL com Deus
      mesmo se você se sente distante hoje.
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
    fontSize: "15px",
    fontWeight: "600"
  }}
>
      Quero destravar minha vida espiritual
    </button>
  </div>

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
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>O que você vai aprender</h2>

        <div style={styles.benefits}>
          <div style={styles.card}>✔ Como ouvir Deus com clareza</div>
          <div style={styles.card}>✔ Restaurar sua vida emocional</div>
          <div style={styles.card}>✔ Vencer bloqueios espirituais</div>
          <div style={styles.card}>✔ Desenvolver intimidade real</div>
        </div>
      </section>


      {/* EBOOK */}
      <img
  src="/ebook.png"
  alt="Ebook"
  style={{
    width: "100%",
    maxWidth: "200px",
    margin: "0 auto 15px",
    display: "block",
    borderRadius: "10px"
  }}
/>
      <section style={styles.ebook}>
        <h2 style={styles.sectionTitle}>📘 Ebook disponível</h2>

        <h3>Primeiros Conceitos – O Caminho da Intimidade</h3>

        <p style={styles.text}>
          Um guia profundo para iniciar uma jornada real com Deus.
        </p>

        <h2 style={{ marginTop: "10px" }}>R$ 49</h2>

        <button
          onClick={() => navigate("/ebook")}
          style={styles.button}
        >
          Comprar Ebook
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