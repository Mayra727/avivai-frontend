import { supabase }
from "./supabase";

export async function uploadPdf(
  file: File
) {

  try {

    console.log("🔥 FILE:", file);

    const fileName =
      `${Date.now()}-${file.name}`;

    const { data, error } =
      await supabase.storage
        .from("PDF")
        .upload(
          fileName,
          file,
          {
            upsert: true
          }
        );

    console.log("🔥 DATA:", data);

    console.log("🔥 ERROR:", error);

    if (error) {

      return null;
    }

    const publicUrl =
      supabase.storage
        .from("PDF")
        .getPublicUrl(fileName);

    console.log(
      "🔥 URL:",
      publicUrl
    );

    return publicUrl.data.publicUrl;

  } catch (error) {

    console.log(
      "🔥 CATCH:",
      error
    );

    return null;
  }
}