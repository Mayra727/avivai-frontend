import { useState } from "react";
import { uploadPdf } from "../services/uploadPdf";
import { uploadFile } from "../services/cloudinary";
import { useNavigate } from "react-router-dom";

export default function CreateBook() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [pdf, setPdf] = useState<File | null>(null);
  const [cover, setCover] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSave() {
    if (!title || !pdf) {
      alert("Preencha tudo");
      return;
    }

    try {
      setLoading(true);

      // 📄 upload PDF (Supabase)
      const pdfUrl = await uploadPdf(pdf);

      if (!pdfUrl) {
        alert("Erro no upload do PDF");
        return;
      }

      // 🖼️ upload capa (Cloudinary)
      let coverUrl = "";
      if (cover) {
        const uploadedCover = await uploadFile(cover);
        if (uploadedCover) {
          coverUrl = uploadedCover;
        }
      }

      const newBook = {
        title,
        url: pdfUrl,
        cover: coverUrl
      };

      // 🚀 SALVAR NO BACKEND (Railway)
      await fetch("https://avivai-backend-production.up.railway.app/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newBook)
      });

      alert("Livro criado com sucesso!");
      navigate("/biblioteca");

    } catch (error) {
      console.error(error);
      alert("Erro ao salvar livro");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: 40, maxWidth: "500px" }}>

      <h1>Criar Livro</h1>

      {/* TÍTULO */}
      <input
        placeholder="Nome do livro"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc"
        }}
      />

      <br /><br />

      {/* PDF */}
      <label>📄 PDF do livro</label>
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setPdf(e.target.files?.[0] || null)}
      />

      <br /><br />

      {/* CAPA */}
      <label>🖼️ Capa (opcional)</label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setCover(e.target.files?.[0] || null)}
      />

      <br /><br />

      {/* BOTÃO */}
      <button
        onClick={handleSave}
        disabled={loading}
        style={{
          width: "100%",
          padding: "14px",
          background: "#7A4A3A",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontWeight: "600"
        }}
      >
        {loading ? "Salvando..." : "💾 Salvar livro"}
      </button>

    </div>
  );
}