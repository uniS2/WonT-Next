import supabase from "@/lib/supabase/supabase";

export const useUploadImage = async (files: File[]) => {
  const uploadFiles = files.map(async (file) => {
    let fileName = crypto.randomUUID();
    const { data: imageData, error: imageError } = await supabase.storage
      .from("review")
      .upload(`public/${fileName}`, file);

    if (imageError) {
      console.log("파일이 업로드 되지 않습니다.", imageError);
      return;
    }
    const res = supabase.storage.from("review").getPublicUrl(imageData.path);

    return res;
  });

  const imagePaths = await Promise.all(uploadFiles);
  return imagePaths;
};
