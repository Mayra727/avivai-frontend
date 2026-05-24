import { useNavigate } from "react-router-dom";

export default function EbookPage() {

  const navigate = useNavigate();

const user = JSON.parse(
  localStorage.getItem("user") || "null"
);

  return (
    <div style={{ fontFamily: "sans-serif" }}>

      {/* HERO */}
      <section style={{ padding: "80px 20px", background: "#F8F5F1" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>

          <h1 style={{ fontSize: "36px", lineHeight: "1.3" }}>
            Primeiros Conceitos: O Caminho da Intimidade
          </h1>

          <p style={{ marginTop: "10px", fontSize: "18px" }}>
            Princípios para uma jornada de descobertas rumo à vida plena
          </p>

          <p style={{ marginTop: "15px", color: "#555" }}>
            Para quem ama Jesus, mas sente que sua vida com Deus ficou apressada demais e íntima de menos.
          </p>

        </div>
      </section>

      {/* DOR COMPLETA */}
      <section style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>

          <h2 style={{ textAlign: "center" }}>A dor silenciosa</h2>

          <p style={{ marginTop: "20px" }}>
            Você ora. Você lê. Você tenta fazer o certo.
          </p>

          <p>
            E ainda assim, lá por dentro, carrega um cansaço silencioso que você não consegue bem explicar.
          </p>

          <p>
            Não é falta de fé. Não é falta de esforço.
          </p>

          <p>
            É que ninguém te ensinou a viver com Deus, só a saber sobre Ele.
          </p>

          <p>
            Existe um abismo entre esses dois mundos.
          </p>

        </div>
      </section>

      {/* O QUE É O LIVRO */}
      <section style={{ padding: "60px 20px", background: "#F8F5F1" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>

          <h2 style={{ textAlign: "center" }}>O que é este livro vivencial</h2>

          <p style={{ marginTop: "20px" }}>
            Este não é um devocional para você folhear e guardar.
          </p>

          <p>
            É um livro vivencial, criado para tirar a sua espiritualidade do campo das ideias
            e plantá-la no solo da sua vida real.
          </p>

          <p>
            Não é sobre saber. É sobre viver.
          </p>

        </div>
      </section>

      {/* O QUE VOCÊ VAI VIVENCIAR */}
      <section style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>

          <h2 style={{ textAlign: "center" }}>O que você vai vivenciar</h2>

          <div style={{ marginTop: "30px", display: "grid", gap: "15px" }}>

            <div>✔ Tempo interno x tempo externo</div>
            <div>✔ A confusão que nos rouba</div>
            <div>✔ Legado x herança</div>
            <div>✔ Espelho: Deus e pessoas</div>
            <div>✔ Relacionamento com o Espírito Santo</div>

          </div>

        </div>
      </section>

      {/* COMO FOI CONSTRUÍDO */}
      <section style={{ padding: "60px 20px", background: "#F8F5F1" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>

          <h2 style={{ textAlign: "center" }}>Como o material foi construído</h2>

          <ul style={{ marginTop: "20px", lineHeight: "1.8" }}>
            <li>Textos narrativos profundos</li>
            <li>Frases de pausa e reflexão</li>
            <li>Exercícios práticos aplicáveis</li>
            <li>Orações guiadas</li>
            <li>Plano de 7 dias para iniciar</li>
          </ul>

        </div>
      </section>

      {/* PRODUTO */}
      <section style={{ padding: "80px 20px", background: "#7A4A3A", color: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>

          <img
            src="/ebook.png"
            alt="Ebook"
            style={{ maxWidth: "250px", marginBottom: "20px" }}
          />

          <h2>📘 Primeiros Conceitos</h2>

          <p style={{ marginTop: "10px" }}>
            Um guia para transformar conhecimento em experiência real com Deus.
          </p>

          <h3 style={{ textDecoration: "line-through" }}>
  R$97
</h3>

<h2 style={{
  fontSize: "32px",
  color: "#FFE7D9"
}}>
  Gratuito por tempo limitado
</h2>

<button
  onClick={() => {

    if(user){

      window.open("/ebook.pdf", "_blank");

    } else {

      navigate("/cadastro");

    }

  }}
  style={{
    marginTop: "20px",
    padding: "16px 40px",
    background: "#B4533A",
    color: "white",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px"
  }}
>
  Quero acessar gratuitamente
</button>

        </div>
      </section>

      {/* PARA QUEM É */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Para quem é este material</h2>

        <p style={{ marginTop: "15px" }}>
          Para quem ama Jesus, mas sente que a espiritualidade ficou funcional demais.
        </p>

        <p>
          Para quem está cansado de viver uma fé de manutenção.
        </p>

        <p>
          Para quem quer viver uma fé de intimidade real.
        </p>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2>Você não precisa ser perfeito para começar</h2>

      </section>
    </div>
  );
}