import { useLocation } from "react-router-dom";

export default function PdfViewer() {
  const location = useLocation();

  const url = new URLSearchParams(location.search).get("url");

  if (!url) {
    return <p>PDF não encontrado</p>;
  }

  return (
    <div style={{
      width: "100%",
      height: "100vh",
      background: "#1c1c1c",
      display: "flex",
      flexDirection: "column"
    }}>

      {/* HEADER */}
      <div style={{
        padding: "15px",
        background: "#111",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <span>📖 Leitor de PDF</span>

        <a
          href={url}
          download
          style={{
            background: "#7A4A3A",
            padding: "10px 20px",
            borderRadius: "8px",
            color: "#fff",
            textDecoration: "none"
          }}
        >
          ⬇️ Baixar
        </a>
      </div>

      {/* PDF LIMPO */}
      <iframe
        src={url}
        style={{
          flex: 1,
          width: "100%",
          border: "none"
        }}
      />

    </div>
  );
}