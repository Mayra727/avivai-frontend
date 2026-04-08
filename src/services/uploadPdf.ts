import { supabase } from "./supabase";

export async function uploadPdf(file: File) {
  const fileName = `${Date.now()}-${file.name}`;

  const { data, error } = await supabase.storage
    .from("PDF")
    .upload(fileName, file);

  if (error) {
    console.error("ERRO REAL PDF:", error);
    alert("Erro real: " + error.message); // 👈 MOSTRA O ERRO
    return null;
  }

  const { data: publicUrl } = supabase.storage
    .from("PDF")
    .getPublicUrl(fileName);

  return publicUrl.publicUrl;
}