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
      <section style={{ padding: "80px 20px", background: "#F8F5F1" }}>
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
          <div style={{ flex: 1, minWidth: "300px", color: "#5A534C" }}>
            <h1 style={{ fontSize: "44px", lineHeight: "1.2" }}>
              Você sente que sua vida espiritual está travada?
            </h1>

            <p style={{ fontSize: "20px", marginTop: "20px" }}>
              Descubra como desenvolver uma intimidade REAL com Deus
              mesmo se você se sente distante hoje
            </p>

            <button
              onClick={comprarEbook}
              style={{
                marginTop: "30px",
                padding: "18px 40px",
                background: "#B4533A",
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontSize: "18px",
                cursor: "pointer"
              }}
            >
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
      <section style={{ padding: "80px 20px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", color: "#5A534C" }}>

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
            <div style={{ background: "#F8F5F1", padding: "20px", borderRadius: "12px" }}>
              ❌ Falta de conexão com Deus
            </div>

            <div style={{ background: "#F8F5F1", padding: "20px", borderRadius: "12px" }}>
              ❌ Vida espiritual inconsistente
            </div>

            <div style={{ background: "#F8F5F1", padding: "20px", borderRadius: "12px" }}>
              ❌ Dificuldade de ouvir Deus
            </div>

            <div style={{ background: "#F8F5F1", padding: "20px", borderRadius: "12px" }}>
              ❌ Bloqueios emocionais
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <button
              onClick={comprarEbook}
              style={{
                marginTop: "30px",
                padding: "16px 40px",
                background: "#B4533A",
                color: "white",
                borderRadius: "8px",
                border: "none"
              }}
            >
              Quero mudar isso agora
            </button>
          </div>

        </div>
      </section>

      {/* TRANSFORMAÇÃO */}
      <section style={{ padding: "80px 20px", background: "#F8F5F1" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", color: "#5A534C" }}>

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
            <div style={{ background: "#fff", padding: "20px", borderRadius: "12px" }}>
              ✔ Clareza espiritual
            </div>

            <div style={{ background: "#fff", padding: "20px", borderRadius: "12px" }}>
              ✔ Intimidade verdadeira com Deus
            </div>

            <div style={{ background: "#fff", padding: "20px", borderRadius: "12px" }}>
              ✔ Liberação emocional
            </div>

            <div style={{ background: "#fff", padding: "20px", borderRadius: "12px" }}>
              ✔ Direção espiritual prática
            </div>
          </div>

        </div>
      </section>

      {/* PRODUTO */}
      <section style={{ padding: "80px 20px", background: "#7A4A3A", color: "#F8F5F1" }}>
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

          <div style={{ flex: 1, textAlign: "center" }}>
            <img
              src="/ebook.png"
              alt="Ebook"
              style={{
                width: "100%",
                maxWidth: "300px",
                borderRadius: "10px"
              }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <h2>📘 Primeiros Conceitos: O Caminho da Intimidade</h2>

            <p style={{ marginTop: "10px" }}>
              Volume 1 da Trilogia da Intimidade
            </p>

            <p style={{ marginTop: "20px" }}>
              Um guia prático para destravar sua vida espiritual
              e iniciar sua jornada de intimidade real com Deus.
            </p>

            <h3 style={{ textDecoration: "line-through" }}>R$97</h3>
            <h2 style={{ fontSize: "36px" }}>R$49</h2>

            <button
              onClick={comprarEbook}
              style={{
                marginTop: "20px",
                padding: "18px 40px",
                background: "#B4533A",
                color: "white",
                borderRadius: "10px",
                border: "none"
              }}
            >
              Comprar Agora
            </button>
          </div>

        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: "80px 20px", background: "#F8F5F1", textAlign: "center" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", color: "#5A534C" }}>

          <h2>⚠️ Oferta por tempo limitado</h2>

          <button
            onClick={comprarEbook}
            style={{
              marginTop: "20px",
              padding: "20px 60px",
              background: "#B4533A",
              color: "white",
              borderRadius: "12px",
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