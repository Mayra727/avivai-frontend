import { useSearchParams } from "react-router-dom";

export default function DownloadPage() {

  const [params] = useSearchParams();

  const paymentId = params.get("payment");

  const downloadUrl =
    `https://avivai-backend-production.up.railway.app/download/${paymentId}`;

  return (
    <div style={{ padding: "60px", textAlign: "center" }}>

      <h1>Pagamento aprovado 🎉</h1>

      <p>Seu ebook está pronto para download.</p>

      <a href={downloadUrl}>
        <button
          style={{
            marginTop: "20px",
            padding: "12px 28px",
            background: "#8B4533",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Baixar Ebook
        </button>
      </a>

    </div>
  );
}