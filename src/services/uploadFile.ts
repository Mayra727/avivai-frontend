export async function uploadFile(file: File) {

  const formData = new FormData();

  formData.append("file", file);

  formData.append(
  "upload_preset",
  "avivai_upload"
);

  try {

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/djawb7xgu/auto/upload",
      {
        method: "POST",
        body: formData
      }
    );

    const data = await response.json();

    console.log("UPLOAD:", data);

    if (!data.secure_url) {

      throw new Error("Upload falhou");
    }

    return data.secure_url;

  } catch (error) {

    console.log(error);

    return null;
  }
}