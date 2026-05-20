import "./AlunoPage.css";

export default function AlunoPage() {

  const user = JSON.parse(
    localStorage.getItem("user") || "null"
  );

  return (

    <div className="aluno-page">

      <section className="aluno-hero">

        <h1>
          Bem-vinda de volta,
          {user?.name || "Aluno"}
        </h1>

        <p>
          Continue sua jornada de intimidade
          e transformação com Deus.
        </p>

      </section>

      <section className="aluno-grid">

        {/* EBOOK */}

        <div className="curso-card">

          <img
            src="/ebook.png"
            alt="Ebook"
          />

          <h2>
            Primeiros Conceitos
          </h2>

          <p>
            Um guia para transformar
            conhecimento em experiência
            real com Deus.
          </p>

          <a
            href="/ebook.pdf"
            target="_blank"
            className="curso-btn"
          >
            Continuar jornada
          </a>

        </div>

        {/* LIVRO */}

        <div className="curso-card">

          <img
            src="/ebook.png"
            alt="Livro Vivencial"
          />

          <h2>
            Livro Vivencial 2
          </h2>

          <p>
            Aprofunde sua caminhada
            espiritual com exercícios
            e experiências práticas.
          </p>

          <button className="curso-btn disabled">
            Em breve
          </button>

        </div>

        {/* MENTORIA */}

        <div className="curso-card">

          <img
            src="/vanessa.jpg"
            alt="Mentoria"
          />

          <h2>
            Mentoria AVIVAI
          </h2>

          <p>
            Uma experiência guiada
            para cura emocional
            e intimidade com Deus.
          </p>

          <button className="curso-btn disabled">
            Em breve
          </button>

        </div>

      </section>

    </div>

  );

}