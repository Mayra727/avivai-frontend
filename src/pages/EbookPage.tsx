import { createPayment } from "../services/payment";
import type { CSSProperties } from "react";

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

  const cardStyle: CSSProperties = {
    background: "#f9f6f4",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
    fontSize: "16px"
  };

  const ctaStyle: CSSProperties = {
    marginTop: "30px",
    padding: "16px 40px",
    background: "#8B4533",
    color: "white",
    borderRadius: "8px",
    fontSize: "18px",
    border: "none",
    cursor: "pointer"
  };

  return (
    <div style={{ fontFamily: "sans-serif" }}>

      {/* HERO */}
      <section style={{ padding: "80px 20px", background: "#f9f6f4" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "40px",
            flexWrap: "wrap"
          }}
        >

          <div style={{ flex: 1, minWidth: "300px" }}>
            <h1 style={{ fontSize: "44px", lineHeight: "1.2" }}>
              Você sente que sua vida espiritual está travada?
            </h1>

            <p style={{ fontSize: "20px", marginTop: "20px" }}>
              Descubra como desenvolver uma intimidade REAL com Deus
              mesmo se você se sente distante hoje
            </p>

            <button onClick={comprarEbook} style={ctaStyle}>
              Quero destravar minha vida espiritual
            </button>
          </div>

          <div style={{ flex: 1, textAlign: "center" }}>
            <img
              src="/vanessa.jpg"
              alt="Vanessa"
              style={{
                width: "100%",
                maxWidth: "350px",
                borderRadius: "20px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
              }}
            />
          </div>

        </div>
      </section>

      {/* DOR */}
      <section style={{ padding: "80px 20px", background: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          <h2 style={{ textAlign: "center", fontSize: "32px" }}>
            Se você sente isso, esse livro é pra você:
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
              marginTop: "40px"
            }}
          >
            <div style={cardStyle}>❌ Falta de conexão com Deus</div>
            <div style={cardStyle}>❌ Vida espiritual inconsistente</div>
            <div style={cardStyle}>❌ Dificuldade de ouvir Deus</div>
            <div style={cardStyle}>❌ Bloqueios emocionais</div>
          </div>

          <div style={{ textAlign: "center" }}>
            <button onClick={comprarEbook} style={ctaStyle}>
              Quero mudar isso agora
            </button>
          </div>

        </div>
      </section>

      {/* TRANSFORMAÇÃO */}
      <section style={{ padding: "80px 20px", background: "#f9f6f4" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          <h2 style={{ textAlign: "center", fontSize: "32px" }}>
            O que você vai viver:
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
              marginTop: "40px"
            }}
          >
            <div style={cardStyle}>✔ Clareza espiritual</div>
            <div style={cardStyle}>✔ Intimidade verdadeira com Deus</div>
            <div style={cardStyle}>✔ Liberação emocional</div>
            <div style={cardStyle}>✔ Direção espiritual prática</div>
          </div>

        </div>
      </section>

      {/* PRODUTO */}
      <section style={{ padding: "80px 20px", background: "#fff" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: "40px",
            flexWrap: "wrap"
          }}
        >

          {/* IMAGEM */}
          <div style={{ flex: 1, textAlign: "center" }}>
            <img
              src="/ebook.png"
              alt="Ebook"
              style={{
                width: "100%",
                maxWidth: "300px",
                borderRadius: "10px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
              }}
            />
          </div>

          {/* TEXTO */}
          <div style={{ flex: 1, minWidth: "300px" }}>
            <h2>📘 Primeiros Conceitos: O Caminho da Intimidade</h2>

            <p style={{ color: "#666", marginTop: "10px" }}>
              Volume 1 da Trilogia da Intimidade
            </p>

            <p style={{ marginTop: "20px", lineHeight: "26px" }}>
              Um guia prático para destravar sua vida espiritual
              e iniciar sua jornada de intimidade real com Deus.
            </p>

            <h3 style={{ textDecoration: "line-through", color: "#888" }}>
              R$97
            </h3>

            <h2 style={{ fontSize: "36px" }}>R$49</h2>

            <button onClick={comprarEbook} style={ctaStyle}>
              Comprar Agora
            </button>
          </div>

        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: "80px 20px", background: "#f9f6f4", textAlign: "center" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          <h2>⚠️ Oferta por tempo limitado</h2>

          <button onClick={comprarEbook} style={ctaStyle}>
            Quero meu Ebook agora
          </button>

        </div>
      </section>

    </div>
  );
}