import { useEffect, useState } from "react";

export default function Biblioteca() {

  const [livros, setLivros] = useState<any[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("biblioteca");

    if (data) {
      setLivros(JSON.parse(data));
    }
  }, []);

  return (
    <div style={{ padding: "40px" }}>

      <h1 style={{ marginBottom: "30px" }}>📚 Biblioteca</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "20px"
      }}>

        {livros.map((livro, index) => (
          <div key={index} style={{
            background: "#fff",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
          }}>

            {/* CAPA */}
            <img
              src={livro.cover}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover"
              }}
            />

            {/* INFO */}
            <div style={{ padding: "15px" }}>

              <h3 style={{ fontSize: "16px" }}>
                {livro.title}
              </h3>

              <a
                href={`/pdf-viewer?url=${encodeURIComponent(livro.url)}`}
                style={{
                  display: "block",
                  marginTop: "10px",
                  padding: "10px",
                  background: "#7A4A3A",
                  color: "#fff",
                  textAlign: "center",
                  borderRadius: "8px",
                  textDecoration: "none"
                }}
              >
                📖 Ler
              </a>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}