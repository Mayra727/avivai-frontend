import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Biblioteca() {

  const [livros, setLivros] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      useEffect(() => {
  fetch("https://SEU-BACKEND/books")
    .then(res => res.json())
    .then(data => setLivros(data))
    .catch(err => console.error("Erro:", err));
}, []);

    } catch (error) {
      console.error("Erro ao carregar biblioteca:", error);
      setLivros([]);
    }
  }, []);

  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>

      {/* HEADER */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px"
      }}>
        <h1>📚 Biblioteca</h1>

        <button
          onClick={() => navigate("/criar-livro")}
          style={{
            padding: "12px 20px",
            background: "#7A4A3A",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "600"
          }}
        >
          + Novo Livro
        </button>
      </div>

      {/* SEM LIVROS */}
      {livros.length === 0 && (
        <p style={{ color: "#777" }}>
          Nenhum livro cadastrado ainda...
        </p>
      )}

      {/* GRID */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: "25px"
      }}>

        {livros.map((livro, index) => (
          <div key={index} style={{
            background: "#fff",
            borderRadius: "14px",
            overflow: "hidden",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            transition: "0.3s"
          }}>

            {/* CAPA */}
            <div style={{
              width: "100%",
              height: "300px",
              background: "#eee",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              {livro.cover ? (
                <img
                  src={livro.cover}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain" // 🔥 NÃO CORTA
                  }}
                />
              ) : (
                <span>Sem capa</span>
              )}
            </div>

            {/* INFO */}
            <div style={{ padding: "15px" }}>

              <h3 style={{
                fontSize: "16px",
                minHeight: "40px"
              }}>
                {livro.title}
              </h3>

              {/* BOTÕES */}
              <div style={{
                display: "flex",
                gap: "10px",
                marginTop: "10px"
              }}>

                <a
                  href={`/pdf-viewer?url=${encodeURIComponent(livro.url)}`}
                  style={{
                    flex: 1,
                    padding: "10px",
                    background: "#444",
                    color: "#fff",
                    textAlign: "center",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontSize: "14px"
                  }}
                >
                  👁️ Ler
                </a>

                <a
                  href={livro.url}
                  download
                  target="_blank"
                  style={{
                    flex: 1,
                    padding: "10px",
                    background: "#7A4A3A",
                    color: "#fff",
                    textAlign: "center",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontSize: "14px"
                  }}
                >
                  ⬇️ Baixar
                </a>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}