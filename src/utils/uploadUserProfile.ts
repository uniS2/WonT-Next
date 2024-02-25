import supabase from "@/lib/supabase/supabase";

export const uploadUserProfile = async (imgFile: File | undefined) => {
  const uploadFiles = async (imgFile: File) => {
    if (!imgFile) {
      console.log("선택한 이미지 파일이 없습니다.");
      return;
    }

    const { data: avatarsData, error: avatarsError } = await supabase.storage
      .from("avatars")
      .upload(`avartar/${imgFile.name}`, imgFile);
    if (avatarsError) {
      console.error("파일이 업로드 되지 않습니다.", avatarsError);
      return;
    }

    const avartarPath = supabase.storage
      .from("avatars")
      .getPublicUrl(avatarsData.path);

    return avartarPath;
  };

  if (imgFile) {
    const imagePath = await uploadFiles(imgFile);
    return imagePath;
  }
  // return [imagePath];
};
