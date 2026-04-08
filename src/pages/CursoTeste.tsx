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
        overflowY: "auto",
        borderRight: "1px solid #eee"
      }}>

        <h3 style={{ marginBottom: "10px" }}>{curso.title}</h3>

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
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <video
              src={aulaAtual.content}
              controls
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain"
              }}
            />
          </div>
        )}

        {/* 📄 PDF (COM PREVIEW + DOWNLOAD) 
{aulaAtual?.type === "pdf" && aulaAtual?.content && (
  <div style={{
    maxWidth: "900px",
    background: "#fff",
    borderRadius: "16px",
    padding: "30px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.08)"
  }}>

    <h2>📄 Material da Aula</h2>

    <p style={{ color: "#666" }}>
      Visualize ou baixe o material completo
    </p>

    <div style={{
      marginTop: "20px",
      marginBottom: "20px",
      padding: "40px",
      borderRadius: "12px",
      background: "linear-gradient(135deg, #8B5E3C, #C89B7B)",
      color: "white",
      textAlign: "center"
    }}>
      📘 Documento PDF disponível
    </div>

    <div style={{ display: "flex", gap: "15px" }}>

      <a
        href={aulaAtual.content}
        target="_blank"
        style={{
          padding: "12px 24px",
          background: "#444",
          color: "#fff",
          borderRadius: "10px",
          textDecoration: "none"
        }}
      >
        👀 Visualizar
      </a>

      <a
        href={aulaAtual.content}
        download
        style={{
          padding: "12px 24px",
          background: "#7A4A3A",
          color: "#fff",
          borderRadius: "10px",
          textDecoration: "none"
        }}
      >
        ⬇️ Baixar PDF
      </a>

    </div>

  </div>
)}
        {/* 🖼️ IMAGEM */}
        {aulaAtual?.type === "image" && aulaAtual?.content && (
          <img
            src={aulaAtual.content}
            style={{
              maxWidth: "900px",
              width: "100%",
              borderRadius: "12px"
            }}
          />
        )}

        {/* 📝 TEXTO */}
        {aulaAtual?.type === "text" && (
          <div style={{
            maxWidth: "800px",
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            lineHeight: 1.6
          }}>
            {aulaAtual.content}
          </div>
        )}

      </div>

    </div>
  );
}