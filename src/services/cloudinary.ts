export async function uploadFile(file: File) {
const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", "avivai_upload");

  let uploadUrl = "";

  // 🔥 DETECTA TIPO
  if (file.type.includes("video")) {
    uploadUrl = "https://api.cloudinary.com/v1_1/djawb7xgu/video/upload";
  } 
  else if (file.type.includes("pdf")) {
    uploadUrl = "https://api.cloudinary.com/v1_1/djawb7xgu/raw/upload";
  } 
  else {
    uploadUrl = "https://api.cloudinary.com/v1_1/djawb7xgu/image/upload";
  }

  try {
    const res = await fetch(uploadUrl, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    console.log("UPLOAD RESULT:", data);

    if (!data.secure_url) {
      throw new Error("Upload falhou");
    }

    return data.secure_url;

  } catch (error) {
    console.error("Erro upload:", error);
    return null;
  }
}