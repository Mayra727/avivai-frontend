import { useState } from "react";

export default function CoursePlayer() {

  const aulas = [
    {
      title: "Aula 1 - Introdução",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      title: "Aula 2 - Intimidade com Deus",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      title: "Aula 3 - Vida Espiritual",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ];

  const [aulaAtual, setAulaAtual] = useState(aulas[0]);

  return (
    <div style={{ display: "flex", padding: "40px" }}>

      {/* Lista de aulas */}
      <div style={{ width: "300px", marginRight: "30px" }}>
        <h2>Aulas</h2>

        {aulas.map((aula, index) => (
          <div
            key={index}
            onClick={() => setAulaAtual(aula)}
            style={{
              padding: "10px",
              marginBottom: "10px",
              cursor: "pointer",
              background: "#eee",
              borderRadius: "5px"
            }}
          >
            {aula.title}
          </div>
        ))}

      </div>

      {/* Player */}
      <div style={{ flex: 1 }}>

        <h2>{aulaAtual.title}</h2>

        <iframe
          width="100%"
          height="500"
          src={aulaAtual.video}
          title="Video aula"
          frameBorder="0"
          allowFullScreen
        />

      </div>

    </div>
  );
}