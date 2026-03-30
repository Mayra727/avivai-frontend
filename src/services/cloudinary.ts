export async function uploadFile(file: File) {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", "avivai_upload");

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/djawb7xgu/auto/upload",
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await res.json();

  return data.secure_url;
}