import { useNavigate } from "react-router-dom";

export default function ProducerProfile() {

  const navigate = useNavigate();

  return (

    <div
      style={{
        maxWidth: "900px",
        margin: "auto",
        padding: "60px",
        textAlign: "center"
      }}
    >

      <img
        src="/vanessa.jpg"
        alt="Vanessa Nonato"
        style={{
          width: "180px",
          borderRadius: "100%",
          marginBottom: "20px"
        }}
      />

      <h1>Vanessa Nonato</h1>

      <h3 style={{ color: "#8B4533" }}>
        Pastora • Escritora • Mentora Cristã
      </h3>

      <div style={{ maxWidth: "700px", margin: "auto" }}>

        <p style={{ marginTop: "20px", fontSize: "18px", lineHeight: "1.6" }}>
          Filha amada do Pai, esposa do Jeferson e mãe do Gabriel e do Noah.
        </p>

        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          Eu conduzo cristãos que se sentem travados em sua vida emocional
          e espiritual no resgate da intimidade com Deus e da saúde da alma.
        </p>

        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          Através de uma metodologia que une <strong>Neurociência</strong> e
          <strong> Fundamentos Bíblicos</strong>, eu estruturo o caminho da
          cura real, ensinando-os a viver uma fé prática e apaixonada
          pelo Espírito Santo.
        </p>

        <p style={{ fontStyle: "italic", marginTop: "20px" }}>
          O Espírito Santo é o meu bem mais precioso.
        </p>

      </div>

      <div
        style={{
          marginTop: "50px",
          padding: "30px",
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
        }}
      >

        <h2>📖 Ebook disponível</h2>

        <h3 style={{ marginTop: "15px" }}>
          O Caminho da Intimidade
        </h3>

        <p style={{ marginTop: "10px" }}>
          Um guia espiritual profundo para desenvolver
          intimidade verdadeira com Deus.
        </p>

        <button
          onClick={() => navigate("/ebook")}
          style={{
            marginTop: "20px",
            padding: "12px 30px",
            background: "#8B4533",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Ver Ebook
        </button>

      </div>

    </div>

  );

}