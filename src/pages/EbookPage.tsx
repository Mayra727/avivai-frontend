import { createPayment } from "../services/payment";

export default function EbookPage() {

  async function comprarEbook() {

    const payment = await createPayment(
      "69a07acbf38bdbb559131ea6",
      "Primeiros Conceitos: O Caminho da Intimidade",
      49
    );

    window.location.href =
      `https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=${payment.id}`;
  }

  return (
    <div
      style={{
        padding: "60px 20px",
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center"
      }}
    >

      <h1>📘 O Caminho da Intimidade</h1>

      <p
        style={{
          fontSize: "18px",
          marginTop: "10px"
        }}
      >
        Primeiros conceitos para desenvolver
        intimidade verdadeira com Deus.
      </p>

      <div
        style={{
          marginTop: "40px",
          padding: "40px",
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
        }}
      >

        <h2>O que você vai encontrar</h2>

        <p>✔ Como desenvolver uma vida espiritual profunda</p>

        <p>✔ Exercícios práticos de intimidade com Deus</p>

        <p>✔ Reflexões que transformam sua caminhada</p>

        <p>✔ Um caminho espiritual real e prático</p>

        <h2 style={{ marginTop: "20px" }}>R$ 49</h2>

        <button
          onClick={comprarEbook}
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

      </div>

    </div>
  );
}