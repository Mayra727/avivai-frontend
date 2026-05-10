export async function uploadFile(
  file: File
) {

  const formData = new FormData();

  formData.append("file", file);

  formData.append(
    "upload_preset",
    "avivai_upload"
  );

  // 🔥 DETECTA PDF

  const isPdf =
    file.type === "application/pdf";

  // 🔥 endpoint correto

  const endpoint = isPdf
    ? "raw/upload"
    : "auto/upload";

  try {

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/djawb7xgu/${endpoint}`,
      {
        method: "POST",
        body: formData
      }
    );

    const data = await response.json();

    console.log("UPLOAD:", data);

    if (!data.secure_url) {

      console.log(data);

      throw new Error("Upload falhou");
    }

    return data.secure_url;

  } catch (error) {

    console.log(
      "ERRO REAL:",
      error
    );

    return null;
  }
}