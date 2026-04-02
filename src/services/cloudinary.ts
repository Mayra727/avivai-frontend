export async function uploadFile(file: File) {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", "avivai_upload");

  const isPdf = file.type === "application/pdf";

  const uploadUrl = isPdf
    ? "https://api.cloudinary.com/v1_1/djawb7xgu/raw/upload"
    : "https://api.cloudinary.com/v1_1/djawb7xgu/video/upload";

  const res = await fetch(uploadUrl, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  console.log("UPLOAD CLOUDINARY:", data);

  return data.secure_url;
}