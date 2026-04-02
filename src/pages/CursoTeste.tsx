import { useEffect, useState } from "react";

export default function CursoTeste() {

  const [curso, setCurso] = useState<any>(null);
  const [aulaAtual, setAulaAtual] = useState<any>(null);

  useEffect(() => {
    const cursoSalvo = localStorage.getItem("curso");

    if (cursoSalvo) {
      const data = JSON.parse(cursoSalvo);
      console.log("CURSO CARREGADO:", data);

      setCurso(data);

      // primeira aula automática
      if (data.modules?.length > 0 && data.modules[0].lessons?.length > 0) {
        setAulaAtual(data.modules[0].lessons[0]);
      }
    }
  }, []);

  if (!curso) {
    return <p style={{ padding: 40 }}>Nenhum curso encontrado</p>;
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>

      {/* 🔹 MENU LATERAL */}
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
                  padding: "10px",
                  cursor: "pointer",
                  marginTop: "6px",
                  borderRadius: "6px",
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

      {/* 🔹 PLAYER */}
      <div style={{
        flex: 1,
        padding: "30px"
      }}>

        {!aulaAtual && <p>Selecione uma aula</p>}

        {/* DEBUG */}
        {aulaAtual && (
          <div style={{ marginBottom: "10px", color: "#999" }}>
            <small>Tipo: {aulaAtual.type}</small><br />
            <small>URL: {aulaAtual.content || "❌ sem conteúdo"}</small>
          </div>
        )}

        {/* SEM CONTEÚDO */}
        {aulaAtual && !aulaAtual.content && (
          <p style={{ color: "red" }}>
            ⚠️ Essa aula não possui conteúdo (upload não foi salvo)
          </p>
        )}

        {/* 🎥 VÍDEO */}
        {aulaAtual?.type === "video" && aulaAtual?.content && (
          <div style={{
            width: "100%",
            maxWidth: "900px",
            aspectRatio: "16/9",
            background: "#000",
            borderRadius: "12px",
            overflow: "hidden"
          }}>
            <video
              src={aulaAtual.content}
              controls
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          </div>
        )}

        {/* 📄 PDF (corrigido) */}
        {aulaAtual?.type === "pdf" && aulaAtual?.content && (
          <iframe
            src={`https://docs.google.com/gview?url=${aulaAtual.content}&embedded=true`}
            style={{
              width: "100%",
              height: "600px",
              border: "none"
            }}
          />
        )}

        {/* 🖼️ IMAGEM */}
        {aulaAtual?.type === "image" && aulaAtual?.content && (
          <img
            src={aulaAtual.content}
            style={{
              maxWidth: "100%",
              borderRadius: "10px"
            }}
          />
        )}

        {/* 📝 TEXTO */}
        {aulaAtual?.type === "text" && (
          <p style={{
            fontSize: "18px",
            lineHeight: 1.6
          }}>
            {aulaAtual.content}
          </p>
        )}

      </div>

    </div>
  );
}