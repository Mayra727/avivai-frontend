import { useNavigate } from "react-router-dom";

export default function ProducerProfile() {

  const navigate = useNavigate();

  function verEbook() {
    navigate("/ebook");
  }

  return (
    <div
      style={{
        padding: "60px 20px",
        textAlign: "center",
        maxWidth: "700px",
        margin: "0 auto"
      }}
    >

      {/* FOTO */}
      <img
  src="/vanessa.jpg"
  alt="Vanessa Nonato"
  style={{
    width: "260px",
    height: "auto",
    borderRadius: "20px",
    marginBottom: "25px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
  }}
/>

      {/* NOME */}
      <h1 style={{ marginBottom: "5px" }}>
        Vanessa Nonato
      </h1>

      {/* AUTORIDADE */}
      <p
        style={{
          color: "#8B4533",
          fontWeight: "600",
          marginBottom: "20px"
        }}
      >
        Pastora • Escritora • Mentora Cristã
      </p>

      {/* BIO */}
      <p>
        Filha amada do Pai, esposa do Jeferson e mãe do Gabriel e do Noah.
      </p>

      <p>
        Eu conduzo cristãos que se sentem travados em sua vida emocional
        e espiritual no resgate da intimidade com Deus e da saúde da alma.
      </p>

      <p>
        Através de uma metodologia que une
        <b> Neurociência e Fundamentos Bíblicos</b>,
        eu estruturo o caminho da cura real,
        ensinando-os a viver uma fé prática e apaixonada pelo Espírito Santo.
      </p>

      <p
        style={{
          fontStyle: "italic",
          marginTop: "10px"
        }}
      >
        O Espírito Santo é o meu bem mais precioso.
      </p>

      {/* CARD DO EBOOK */}
      <div
        style={{
          marginTop: "50px",
          padding: "30px",
          background: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
        }}
      >

        <h2>
          📘 Ebook disponível
        </h2>

        <h3 style={{ marginTop: "10px" }}>
          O Caminho da Intimidade
        </h3>

        <p>
          Um guia espiritual profundo para desenvolver
          intimidade verdadeira com Deus.
        </p>

        <button
          onClick={verEbook}
          style={{
            marginTop: "15px",
            padding: "12px 25px",
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