import { createPayment } from "../services/payment";
import { useState } from "react";

export default function MentoriaPage() {
  const [loading, setLoading] = useState(false);

async function comprarMentoria() {
  setLoading(true);

  try {
    const payment = await createPayment(
      "MENTORIA_AVIVAI",
      "Mentoria AVIVAI",
      197
    );

    if (!payment?.id) {
      alert("Erro ao gerar pagamento");
      return;
    }

    window.location.href =
      `https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=${payment.id}`;

  } catch (error) {
    console.error(error);
    alert("Erro ao iniciar pagamento");
  } finally {
    setLoading(false);
  }
}

  return (
    <div style={{ fontFamily: "sans-serif" }}>

      {/* HERO */}
      <section style={{ padding: "80px 20px", background: "#F8F5F1", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>

          <h1 style={{ fontSize: "36px", lineHeight: "1.3" }}>
            Mentoria AVIVAI
          </h1>

          <p style={{ marginTop: "15px", fontSize: "18px", color: "#555" }}>
            A leitura abre o caminho. A prática constrói a morada.
          </p>

        </div>
      </section>

      {/* A VIRADA */}
      <section style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>

          <h2 style={{ textAlign: "center" }}>A virada que falta</h2>

          <p style={{ marginTop: "20px" }}>
            Você já entendeu muita coisa.
          </p>

          <p>
            Já leu. Já buscou. Já tentou aplicar.
          </p>

          <p>
            Mas a rotina voltou… e tudo se perdeu no caminho.
          </p>

          <p>
            O problema não é falta de conteúdo.
          </p>

          <p>
            É falta de direção, constância e acompanhamento.
          </p>

        </div>
      </section>

      {/* O QUE É A MENTORIA */}
      <section style={{ padding: "60px 20px", background: "#F8F5F1" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>

          <h2 style={{ textAlign: "center" }}>O que é a Mentoria AVIVAI</h2>

          <p style={{ marginTop: "20px" }}>
            A Mentoria AVIVAI é uma jornada guiada para transformar conhecimento em prática.
          </p>

          <p>
            Aqui, você não caminha sozinho.
          </p>

          <p>
            Cada etapa foi desenhada para conduzir você à construção de uma vida espiritual real,
            com direção clara e aplicação no dia a dia.
          </p>

        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>

          <h2 style={{ textAlign: "center" }}>Como funciona</h2>

          <div style={{ marginTop: "30px", display: "grid", gap: "15px" }}>

            <div>✔ Aulas curtas e objetivas</div>
            <div>✔ Direcionamento prático</div>
            <div>✔ Exercícios aplicáveis no dia a dia</div>
            <div>✔ Construção de constância espiritual</div>
            <div>✔ Jornada progressiva e organizada</div>

          </div>

        </div>
      </section>

      {/* DIFERENCIAL */}
      <section style={{ padding: "60px 20px", background: "#F8F5F1" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>

          <h2 style={{ textAlign: "center" }}>Por que essa mentoria é diferente</h2>

          <p style={{ marginTop: "20px" }}>
            Não é mais conteúdo para consumir.
          </p>

          <p>
            É um caminho para viver.
          </p>

          <p>
            Aqui, teologia sólida e práticas aplicáveis se encontram,
            criando uma experiência que transforma sua vida espiritual de dentro para fora.
          </p>

        </div>
      </section>

      {/* TRANSFORMAÇÃO */}
      <section style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>

          <h2 style={{ textAlign: "center" }}>O que você vai se tornar</h2>

          <div style={{ marginTop: "30px", display: "grid", gap: "15px" }}>

            <div>✔ Uma vida espiritual com constância</div>
            <div>✔ Clareza na direção de Deus</div>
            <div>✔ Intimidade real com o Espírito Santo</div>
            <div>✔ Equilíbrio emocional e espiritual</div>
            <div>✔ Uma fé vivida, não apenas entendida</div>

          </div>

        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: "80px 20px", background: "#7A4A3A", color: "#fff", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>

          <h2 style={{ fontSize: "28px" }}>
            Sua transformação não acontece sozinha
          </h2>

          <p style={{ marginTop: "10px" }}>
            Ela precisa de direção, prática e constância.
          </p>

          <button
  onClick={comprarMentoria}
  style={{
    marginTop: "25px",
    padding: "18px 50px",
    background: "#B4533A",
    color: "white",
    borderRadius: "12px",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
    opacity: loading ? 0.7 : 1 // 🔥 efeito visual
  }}
  disabled={loading} // 🔥 bloqueia clique
>
  {loading ? "Carregando..." : "Quero viver essa jornada"}
</button>

        </div>
      </section>

    </div>
  );
}