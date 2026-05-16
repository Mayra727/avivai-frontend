import { useNavigate } from "react-router-dom";

export default function Livro2Page() {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: "sans-serif" }}>

      {/* HERO */}
      <section style={{ padding: "80px 20px", background: "#F8F5F1", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>

          <h1 style={{ fontSize: "36px", lineHeight: "1.3" }}>
            Caminho da Intimidade – Volume 2
          </h1>

          <p style={{ marginTop: "15px", fontSize: "18px", color: "#555" }}>
            Para quem já começou… mas percebeu que ainda há mais profundidade.
          </p>

        </div>
      </section>

      {/* CONTINUIDADE */}
      <section style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>

          <h2 style={{ textAlign: "center" }}>A continuação da jornada</h2>

          <p style={{ marginTop: "20px" }}>
            Você já deu os primeiros passos.
          </p>

          <p>
            Já começou a perceber mudanças.
          </p>

          <p>
            Mas também percebeu que existe um nível mais profundo.
          </p>

          <p>
            Um lugar onde a fé deixa de ser esforço…
            e se torna natureza.
          </p>

        </div>
      </section>

      {/* O QUE É */}
      <section style={{ padding: "60px 20px", background: "#F8F5F1" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>

          <h2 style={{ textAlign: "center" }}>O que é o Volume 2</h2>

          <p style={{ marginTop: "20px" }}>
            O Volume 2 é a continuidade do caminho.
          </p>

          <p>
            Aqui, você não está mais começando.
          </p>

          <p>
            Você está aprofundando.
          </p>

          <p>
            É onde a prática se torna constância,
            e a constância se transforma em estilo de vida.
          </p>

        </div>
      </section>

      {/* APROFUNDAMENTO */}
      <section style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>

          <h2 style={{ textAlign: "center" }}>O que você vai aprofundar</h2>

          <div style={{ marginTop: "30px", display: "grid", gap: "15px" }}>

            <div>✔ Consistência espiritual no dia a dia</div>
            <div>✔ Maturidade emocional aplicada à fé</div>
            <div>✔ Discernimento espiritual</div>
            <div>✔ Vida guiada e não apenas reativa</div>
            <div>✔ Intimidade contínua com Deus</div>

          </div>

        </div>
      </section>

      {/* DIFERENCIAL */}
      <section style={{ padding: "60px 20px", background: "#F8F5F1" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>

          <h2 style={{ textAlign: "center" }}>Por que continuar a jornada</h2>

          <p style={{ marginTop: "20px" }}>
            Porque começar é importante.
          </p>

          <p>
            Mas permanecer é o que transforma.
          </p>

          <p>
            O Volume 2 foi criado para evitar que você volte ao automático,
            ajudando você a consolidar uma vida espiritual firme e constante.
          </p>

        </div>
      </section>

      {/* PRODUTO */}
      <section style={{ padding: "80px 20px", background: "#7A4A3A", color: "#fff", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>

          <img
            src="/livro2.png"
            alt="Livro 2"
            style={{ maxWidth: "250px", marginBottom: "20px" }}
          />

          <h3 style={{ textDecoration: "line-through" }}>R$97</h3>
          <h2 style={{ fontSize: "32px" }}>R$49</h2>


        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2>A profundidade não está no começo</h2>

        <p style={{ marginTop: "10px" }}>
          Está na continuidade.
        </p>

        <button
          onClick={() => navigate("/mentoria")}
          style={{
            marginTop: "20px",
            padding: "18px 50px",
            background: "#8B4533",
            color: "white",
            borderRadius: "12px",
            border: "none"
          }}
        >
          Quero ir mais fundo
        </button>
      </section>

    </div>
  );
}