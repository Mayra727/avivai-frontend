import { supabase } from "./supabase";

export async function uploadPdf(
  file: File
) {

  try {

    const fileName =
      `${Date.now()}-${file.name}`;

    const { error } =
      await supabase.storage
        .from("books")
        .upload(
          fileName,
          file
        );

    if (error) {

      console.log(error);

      return null;
    }

    const { data } =
      supabase.storage
        .from("PDF")
        .getPublicUrl(fileName);

    return data.publicUrl;

  } catch (error) {

    console.log(error);

    return null;
  }
}