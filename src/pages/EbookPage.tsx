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
    <div style={{ fontFamily: "sans-serif" }}>

      {/* HERO */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          <h1 style={{ fontSize: "42px", maxWidth: "750px", margin: "0 auto", lineHeight: "1.3" }}>
            Você sente que sua vida espiritual está travada?
          </h1>

          <p style={{ fontSize: "20px", marginTop: "20px" }}>
            Descubra como desenvolver uma intimidade REAL com Deus
            mesmo se você se sente distante hoje
          </p>

          <img
            src="/vanessa.jpg"
            alt="Vanessa"
            style={{
              width: "260px",
              borderRadius: "20px",
              marginTop: "30px"
            }}
          />

          <button
            onClick={comprarEbook}
            style={{
              marginTop: "30px",
              padding: "18px 50px",
              background: "#8B4533",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "20px",
              cursor: "pointer"
            }}
          >
            Quero destravar minha vida espiritual
          </button>

        </div>
      </section>

      {/* DOR */}
      <section style={{ padding: "60px 20px", textAlign: "center", background: "#f9f6f4" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          <h2>Se você sente isso, esse livro é pra você:</h2>

          <ul style={{ marginTop: "20px", lineHeight: "32px", listStyle: "none" }}>
            <li>❌ Falta de conexão com Deus</li>
            <li>❌ Vida espiritual inconsistente</li>
            <li>❌ Dificuldade de ouvir Deus</li>
            <li>❌ Bloqueios emocionais</li>
          </ul>

          <button
            onClick={comprarEbook}
            style={{
              marginTop: "30px",
              padding: "16px 40px",
              background: "#8B4533",
              color: "white",
              borderRadius: "8px",
              fontSize: "18px",
              border: "none"
            }}
          >
            Quero mudar isso agora
          </button>

        </div>
      </section>

      {/* TRANSFORMAÇÃO */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          <h2>O que você vai viver:</h2>

          <ul style={{ marginTop: "20px", lineHeight: "32px", listStyle: "none" }}>
            <li>✔ Clareza espiritual</li>
            <li>✔ Intimidade verdadeira com Deus</li>
            <li>✔ Liberação emocional</li>
            <li>✔ Direção espiritual prática</li>
          </ul>

        </div>
      </section>

      {/* PRODUTO */}
      <section style={{ padding: "60px 20px", textAlign: "center", background: "#f3ece8" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          <h2>📘 Primeiros Conceitos: O Caminho da Intimidade</h2>

          <img
            src="/ebook.png"
            alt="Ebook"
            style={{
              width: "220px",
              marginTop: "20px",
              borderRadius: "10px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
            }}
          />

          <p style={{ marginTop: "10px", fontSize: "16px", color: "#666" }}>
            Volume 1 da Trilogia da Intimidade
          </p>

          <p style={{ maxWidth: "650px", margin: "20px auto" }}>
            Um guia prático para destravar sua vida espiritual
            e iniciar sua jornada de intimidade real com Deus.
          </p>

          <h3 style={{ textDecoration: "line-through", color: "#888" }}>R$97</h3>
          <h2 style={{ fontSize: "36px" }}>R$49</h2>

          <button
            onClick={comprarEbook}
            style={{
              marginTop: "20px",
              padding: "18px 50px",
              background: "#8B4533",
              color: "white",
              borderRadius: "10px",
              fontSize: "20px",
              border: "none"
            }}
          >
            Comprar Agora
          </button>

        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          <h2>⚠️ Oferta por tempo limitado</h2>

          <button
            onClick={comprarEbook}
            style={{
              marginTop: "20px",
              padding: "20px 60px",
              background: "#8B4533",
              color: "white",
              borderRadius: "12px",
              fontSize: "22px",
              border: "none"
            }}
          >
            Quero meu Ebook agora
          </button>

        </div>
      </section>

    </div>
  );
}