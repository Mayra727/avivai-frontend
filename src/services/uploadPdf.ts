export async function uploadPdf(
  file: File
) {

  const formData = new FormData();

  formData.append("file", file);

  formData.append(
    "upload_preset",
    "avivai_upload"
  );

  try {

    const response = await fetch(

      "https://api.cloudinary.com/v1_1/djawb7xgu/raw/upload",

      {
        method: "POST",
        body: formData
      }

    );

    const data =
      await response.json();

    console.log("PDF:", data);

    if (!data.secure_url) {

      console.log(data);

      throw new Error(
        "Erro upload PDF"
      );

    }

    return data.secure_url;

  } catch (error) {

    console.log(error);

    return null;

  }

}