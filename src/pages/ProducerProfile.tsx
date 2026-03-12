import { useNavigate } from "react-router-dom";

export default function ProducerProfile() {

  const navigate = useNavigate();

 
  return (
    <div
      style={{
        padding: "60px 20px",
        maxWidth: "1000px",
        margin: "0 auto"
      }}
    >

      {/* CONTAINER PRINCIPAL */}
      <div
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >

        {/* FOTO */}
        <div>
          <img
            src="/vanessa.jpg"
            alt="Vanessa Nonato"
            style={{
              width: "320px",
              borderRadius: "20px",
              boxShadow: "0 15px 35px rgba(0,0,0,0.15)"
            }}
          />
        </div>

        {/* TEXTO */}
        <div style={{ maxWidth: "500px" }}>

          <h1 style={{ marginBottom: "5px" }}>
            Vanessa Nonato
          </h1>

          <p
            style={{
              color: "#8B4533",
              fontWeight: "600",
              marginBottom: "20px"
            }}
          >
            Pastora • Escritora • Mentora Cristã
          </p>

          <p>
            Filha amada do Pai, esposa do Jeferson e mãe do Gabriel e do Noah.
          </p>

          <p>
            Eu conduzo cristãos que se sentem travados em sua vida emocional e espiritual
            no resgate da intimidade com Deus e da saúde da alma.
          </p>

          <p>
            Através de uma metodologia que une <b>Neurociência e Fundamentos Bíblicos</b>,
            eu estruturo o caminho da cura real,
            ensinando-os a viver uma fé prática e apaixonada pelo Espírito Santo.
          </p>

          <p style={{ fontStyle: "italic" }}>
            O Espírito Santo é o meu bem mais precioso.
          </p>

        </div>

      </div>

      {/* CARD DO EBOOK */}
      <div
        style={{
          marginTop: "60px",
          padding: "35px",
          background: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          textAlign: "center"
        }}
      >

        <h2>📘 Ebook disponível</h2>

        <h3 style={{ marginTop: "10px" }}>
          O Caminho da Intimidade
        </h3>

        <p>
          Um guia espiritual profundo para desenvolver
          intimidade verdadeira com Deus.
        </p>

        <button
  onClick={() => navigate("/ebook")}
  style={{
    marginTop: "15px",
    padding: "12px 28px",
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