import { useEffect, useState } from "react";

export default function CursoTeste() {

  const [curso, setCurso] = useState<any>(null);
  const [aulaAtual, setAulaAtual] = useState<any>(null);

  useEffect(() => {
    const cursoSalvo = localStorage.getItem("curso");

    if (cursoSalvo) {
      const data = JSON.parse(cursoSalvo);
      setCurso(data);

      // pega primeira aula automaticamente
      if (data.modules?.length > 0) {
        const primeiraAula = data.modules[0].lessons[0];
        setAulaAtual(primeiraAula);
      }
    }
  }, []);

  if (!curso) {
    return <p style={{ padding: 40 }}>Nenhum curso encontrado</p>;
  }

  return (
    <div style={{ display: "flex", height: "100vh" }}>

      {/* LADO ESQUERDO - AULAS */}
      <div style={{
        width: "300px",
        background: "#f5f5f5",
        padding: "20px",
        overflowY: "auto"
      }}>

        <h3>{curso.title}</h3>

        {curso.modules.map((mod: any, mIndex: number) => (
          <div key={mIndex} style={{ marginTop: "20px" }}>

            <strong>{mod.title}</strong>

            {mod.lessons.map((lesson: any, lIndex: number) => (
              <div
                key={lIndex}
                onClick={() => setAulaAtual(lesson)}
                style={{
                  padding: "8px",
                  cursor: "pointer",
                  marginTop: "5px",
                  background:
                    aulaAtual === lesson ? "#ddd" : "transparent"
                }}
              >
                {lesson.title}
              </div>
            ))}

          </div>
        ))}

      </div>

      {/* LADO DIREITO - PLAYER */}
      <div style={{
        flex: 1,
        padding: "20px"
      }}>

        {!aulaAtual && <p>Selecione uma aula</p>}

<p>{aulaAtual?.content}</p>

        {aulaAtual && aulaAtual.type === "video" && (
          <video
            src={aulaAtual.content}
            controls
            style={{ width: "100%", borderRadius: "10px" }}
          />
        )}

        {aulaAtual && aulaAtual.type === "pdf" && (
          <iframe
            src={aulaAtual.content}
            style={{ width: "100%", height: "600px" }}
          />
        )}

        {aulaAtual && aulaAtual.type === "image" && (
          <img
            src={aulaAtual.content}
            style={{ maxWidth: "100%" }}
          />
        )}

        {aulaAtual && aulaAtual.type === "text" && (
          <p>{aulaAtual.content}</p>
        )}

      </div>

    </div>
  );
}