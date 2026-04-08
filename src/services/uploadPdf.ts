import { supabase } from "./supabase";

export async function uploadPdf(file: File) {
  const fileName = `${Date.now()}-${file.name}`;

  const { error } = await supabase.storage
    .from("PDF")
    .upload(fileName, file);

  if (error) {
    console.error("Erro upload PDF:", error);
    return null;
  }

  const { data } = supabase.storage
    .from("PDF")
    .getPublicUrl(fileName);

  return data.publicUrl;
}