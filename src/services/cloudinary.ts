export async function uploadFile(file: File) {

  const formData = new FormData();

  formData.append("pdf", file);
  formData.append("upload_preset", "avivai_upload");

  try {

    // 🔥 DETECTA SE É VÍDEO
    const isVideo = file.type.startsWith("video");

    const endpoint = isVideo
      ? "https://api.cloudinary.com/v1_1/djawb7xgu/video/upload"
      : "https://api.cloudinary.com/v1_1/djawb7xgu/image/upload";

    const res = await fetch(endpoint, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    console.log("🔥 CLOUDINARY:", data);

    if (!data.secure_url) {
      throw new Error("Upload falhou");
    }

    return data.secure_url;

  } catch (error) {

    console.error("❌ Erro upload:", error);

    return null;
  }
}