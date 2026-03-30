import { useState } from "react";

export default function UploadLesson() {

  const [file, setFile] = useState<File | null>(null);

  function handleUpload() {
    if (!file) return;

    console.log("Enviar vídeo:", file);

    // 🔥 depois conecta com backend
  }

  return (
    <div style={{ padding: "40px" }}>

      <h2>Upload de Aula</h2>

      <input
        type="file"
        accept="video/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <button onClick={handleUpload}>
        Enviar vídeo
      </button>

    </div>
  );
}