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
          marginBottom: "60px"
        }}
      >

        <img
          src="/vanessa.jpg"
          alt="Vanessa Nonato"
          style={{
            width: "320px",
            borderRadius: "20px",
            boxShadow: "0 15px 35px rgba(0,0,0,0.2)"
          }}
        />

        <div style={{ maxWidth: "500px" }}>

          <h1 style={{ fontSize: "36px" }}>
            AVIVAI
          </h1>

          <h2 style={{ marginTop: "10px", color: "#8B4533" }}>
            Caminhos de intimidade com Deus
          </h2>

          <p style={{ marginTop: "20px", fontSize: "18px" }}>
            Conteúdos espirituais profundos para transformar
            sua vida emocional e espiritual através da intimidade
            com o Espírito Santo.
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
              cursor: "pointer"
            }}
          >
            Conhecer o Ebook
          </button>

        </div>

      </section>


      {/* SOBRE VANESSA */}

      <section
        style={{
          textAlign: "center",
          marginBottom: "60px"
        }}
      >

        <h2>Quem é Vanessa Nonato</h2>

        <p style={{ maxWidth: "700px", margin: "20px auto" }}>
          Filha amada do Pai, esposa do Jefferson e mãe do Gabriel e do Noah.
          Pastora, escritora, palestrante e mentora cristã.
        </p>

        <p style={{ maxWidth: "700px", margin: "0 auto" }}>
          Vanessa conduz cristãos que se sentem travados em sua vida emocional
          e espiritual no resgate da intimidade com Deus e da saúde da alma,
          unindo princípios da neurociência com fundamentos bíblicos.
        </p>

      </section>


      {/* EBOOK */}

      <section
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          textAlign: "center"
        }}
      >

        <h2>📘 Ebook disponível</h2>

        <h3 style={{ marginTop: "10px" }}>
          Primeiros Conceitos – O Caminho da Intimidade
        </h3>

        <p style={{ marginTop: "15px" }}>
          Um guia profundo para iniciar uma jornada real
          de intimidade com Deus.
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