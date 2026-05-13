import { supabase } from "./supabase";

export async function uploadPdf(file: File) {

  const fileName = `${Date.now()}-${file.name}`;

  const { error } = await supabase.storage
    .from("PDF")
    .upload(fileName, file);

  if (error) {
    console.error("ERRO REAL PDF:", error);
    alert("Erro no upload do PDF");
    return null;
  }

  // 🔥 URL pública
  const { data } = supabase.storage
    .from("PDF")
    .getPublicUrl(fileName);

  return data.publicUrl;
}