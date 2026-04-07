export async function uploadFile(file: File) {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", "avivai_upload");

  // 👇 ISSO LIBERA O ARQUIVO
  formData.append("access_mode", "public");

  let uploadUrl = "";

  if (file.type.includes("video")) {
    uploadUrl = "https://api.cloudinary.com/v1_1/djawb7xgu/video/upload";
  } 
  else if (file.type.includes("pdf")) {
    uploadUrl = "https://api.cloudinary.com/v1_1/djawb7xgu/raw/upload";
  } 
  else {
    uploadUrl = "https://api.cloudinary.com/v1_1/djawb7xgu/image/upload";
  }

  const res = await fetch(uploadUrl, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  console.log("UPLOAD RESULT:", data);

  return data.secure_url;
}