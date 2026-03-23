import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "40px 20px"
      }}
    >

      {/* HERO */}
      <section
        style={{
          display: "flex",
          alignItems: "center",
          gap: "40px",
          flexWrap: "wrap",
          marginBottom: "60px",
          justifyContent: "space-between",
          padding: "20px"
        }}
      >

        {/* TEXTO */}
        <div
          style={{
            flex: "1 1 300px",
            maxWidth: "500px",
            width: "100%"
          }}
        >

          <h1 style={{ fontSize: "clamp(26px, 6vw, 38px)", lineHeight: "1.2" }}>
            Você sente que sua vida espiritual está travada?
          </h1>

          <p
            style={{
              marginTop: "15px",
              fontSize: "clamp(15px, 4vw, 18px)",
              color: "#555",
              lineHeight: "1.6"
            }}
          >
            Descubra como desenvolver uma intimidade REAL com Deus
            mesmo se você se sente distante hoje.
          </p>

          <button
            onClick={() => navigate("/ebook")}
            style={{
              marginTop: "25px",
              padding: "14px 30px",
              background: "#8B4533",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
              transition: "0.3s"
            }}
          >
            Quero destravar minha vida espiritual
          </button>

        </div>

        {/* IMAGEM */}
        <div
          style={{
            flex: "1 1 300px",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <img
            src="/vanessa.jpg"
            alt="Vanessa Nonato"
            style={{
              width: "100%",
              maxWidth: "320px",
              borderRadius: "20px",
              objectFit: "cover",
              boxShadow: "0 15px 35px rgba(0,0,0,0.2)"
            }}
          />
        </div>

      </section>


      {/* DOR DO PÚBLICO */}
      <section
        style={{
          textAlign: "center",
          marginBottom: "60px"
        }}
      >

        <h2 style={{ fontSize: "clamp(22px, 5vw, 28px)" }}>
          Você se sente assim?
        </h2>

        <div style={{ marginTop: "20px", lineHeight: "2" }}>
          <p>• Ora, mas não sente Deus</p>
          <p>• Se sente emocionalmente travado</p>
          <p>• Vive altos e baixos espirituais</p>
          <p>• Sente que está distante de Deus</p>
        </div>

      </section>


      {/* SOBRE VANESSA */}
      <section
        style={{
          textAlign: "center",
          marginBottom: "60px"
        }}
      >

        <h2 style={{ fontSize: "clamp(22px, 5vw, 28px)" }}>
          Quem é Vanessa Nonato
        </h2>

        <p style={{
          maxWidth: "700px",
          margin: "20px auto",
          lineHeight: "1.6"
        }}>
          Filha amada do Pai, esposa do Jefferson e mãe do Gabriel e do Noah.
          Pastora, escritora, palestrante e mentora cristã.
        </p>

        <p style={{
          maxWidth: "700px",
          margin: "0 auto",
          lineHeight: "1.6"
        }}>
          Vanessa conduz cristãos que se sentem travados em sua vida emocional
          e espiritual no resgate da intimidade com Deus e da saúde da alma,
          unindo princípios da neurociência com fundamentos bíblicos.
        </p>

      </section>


      {/* BENEFÍCIOS */}
      <section
        style={{
          textAlign: "center",
          marginBottom: "60px"
        }}
      >

        <h2 style={{ fontSize: "clamp(22px, 5vw, 28px)" }}>
          O que você vai receber
        </h2>

        <div style={{ marginTop: "20px", lineHeight: "2" }}>
          <p>✔ Clareza espiritual</p>
          <p>✔ Cura emocional</p>
          <p>✔ Intimidade real com Deus</p>
          <p>✔ Direcionamento espiritual</p>
        </div>

      </section>


      {/* EBOOK */}
      <section
        style={{
          background: "#fff",
          padding: "30px 20px",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          textAlign: "center"
        }}
      >

        <h2 style={{ fontSize: "clamp(22px, 5vw, 28px)" }}>
          📘 Ebook disponível
        </h2>

        <h3 style={{ marginTop: "10px" }}>
          Primeiros Conceitos – O Caminho da Intimidade
        </h3>

        <p style={{ marginTop: "15px" }}>
          Um guia profundo para iniciar uma jornada real com Deus.
        </p>

        <h2 style={{ marginTop: "20px" }}>
          R$ 49
        </h2>

        <button
          onClick={() => navigate("/ebook")}
          style={{
            marginTop: "20px",
            padding: "14px 30px",
            background: "#8B4533",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Comprar Ebook
        </button>

      </section>

    </div>
  );
}