import { API_URL } from "./api";

export async function uploadFile(file: File) {

  const formData = new FormData();

  formData.append("video", file);

  try {

    const response = await fetch(
      `${API_URL}/upload-video`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    console.log("🔥 VIDEO URL:", data);

    return data.url;

  } catch (error) {

    console.log("❌ ERRO UPLOAD:", error);

    return null;
  }
}