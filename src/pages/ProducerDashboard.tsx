import "./Producer.css";

export default function ProducerDashboard() {

  const user = JSON.parse(
    localStorage.getItem("user") || "null"
  );

  return (

    <div className="dashboard-page">

      <section className="dashboard-hero">

        <h1>
          Painel da Produtora
        </h1>

        <p>
          Bem-vinda,
          {user?.name || "Vanessa"} ✨
        </p>

      </section>

      <section className="dashboard-grid">

        {/* ALUNOS */}

        <div className="dashboard-card">

          <h2>
            👥 Alunos
          </h2>

          <p>
            Visualize e acompanhe
            os alunos cadastrados
            na plataforma.
          </p>

          <button>
            Ver alunos
          </button>

        </div>

        {/* CURSOS */}

        <div className="dashboard-card">

          <h2>
            📘 Cursos
          </h2>

          <p>
            Gerencie ebooks,
            cursos e materiais
            da AVIVAI.
          </p>

          <button>
            Gerenciar cursos
          </button>

        </div>

        {/* UPLOAD */}

        <div className="dashboard-card">

          <h2>
            ☁ Uploads
          </h2>

          <p>
            Envie PDFs,
            vídeos e conteúdos
            da plataforma.
          </p>

          <button>
            Enviar materiais
          </button>

        </div>

        {/* MÉTRICAS */}

        <div className="dashboard-card">

          <h2>
            📊 Plataforma
          </h2>

          <p>
            Acompanhe crescimento,
            acessos e evolução
            dos alunos.
          </p>

          <button>
            Ver métricas
          </button>

        </div>

      </section>

    </div>

  );

}