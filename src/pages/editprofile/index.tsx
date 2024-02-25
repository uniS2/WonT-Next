import DefaultProfile from "@/components/mypage/DefaultProfile";
import EditProfileLayout from "@/layout/editprofile/layout";
import supabase from "@/lib/supabase/supabase";
import { useSessionStore } from "@/store/useSessionStore";
import { uploadUserProfile } from "@/utils/uploadUserProfile";
import { useEffect, useRef, useState } from "react";

function EditProfile() {
  const [userNickname, setUserNickname] = useState<string | null>();
  const { userSession, setUserSession } = useSessionStore();
  const [userSessionId, setUserSessionId] = useState<string | undefined>();
  const [imgFile, setImgFile] = useState<File>();
  const [imgSrc, setImgSrc] = useState<string | ArrayBuffer | null>("");
  const [avatar, setavatar] = useState();

  useEffect(() => {
    const getUserSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      console.log(data);
      setUserSession(data);
      setUserSessionId(data.session?.user.id);

      const { data: profilesData, error: profilesError } = await supabase
        .from("profiles")
        .select()
        .eq("id", data.session?.user.id);

      if (profilesData && profilesData[0].nickname === null) {
        setUserNickname(profilesData[0].full_name);
        setavatar(profilesData[0].avatar_url);
      } else if (profilesData) {
        setUserNickname(profilesData[0]?.nickname);
        setavatar(profilesData[0].avatar_url);
      }
    };

    getUserSession();
  }, []);

  const handleRename = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reName = e.target.value;
    setUserNickname(reName);
  };

  const handleSubmit = async () => {
    if (imgFile) {
      const imagePaths = await uploadUserProfile(imgFile);
      const avatarUrl = imagePaths?.data.publicUrl;

      const updateProfile = async () => {
        const { data, error } = await supabase
          .from("profiles")
          .upsert({ nickname: userNickname, avatar_url: avatarUrl })
          .eq("id", userSessionId)
          .select();

        alert("프로필이 수정되었습니다.");

        if (error) {
          console.log(error);
          alert("프로필 수정에 실패했습니다. 다시 시도해주세요.");
        }
      };
      updateProfile();
    } else {
      const updateNickname = async () => {
        const { data, error } = await supabase
          .from("profiles")
          .upsert({ nickname: userNickname })
          .eq("id", userSessionId)
          .select();

        alert("프로필이 수정되었습니다.");

        if (error) {
          console.log(error);
          alert("프로필 수정에 실패했습니다. 다시 시도해주세요.");
        }
      };
      updateNickname();
    }
  };

  const previewImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files !== null) {
      let reader = new FileReader();
      let file = e.target.files[0];
      console.log(file);

      reader.onloadend = () => {
        setImgFile(file);
        setImgSrc(reader.result);
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    }
  };

  return (
    <EditProfileLayout>
      <div className="mx-auto  flex flex-col gap-5 justify-center items-center h-[50vh] ">
        <div className="flex justify-center items-center rounded-full border-[#CADDE2] border-[0.0625rem] w-[100px] h-[100px] bg-secondary">
          {avatar || imgSrc ? (
            <img
              src={(imgSrc as string) || avatar}
              alt=""
              className="w-[100px] h-[100px] object-cover rounded-full"
            />
          ) : (
            <DefaultProfile />
          )}
        </div>
        <form action="" className="w-2/5 h-12 ">
          <p className="w-full h-full my-3 ">
            <label htmlFor="text" className="invisible"></label>
            <input
              type="text"
              name="nickname"
              placeholder="닉네임"
              value={`${userNickname}`}
              onChange={handleRename}
              className="bg-[#F3F5F5] border-1 border-[#EDF2F2] w-full h-full rounded-md py-1 px-2"
            />
          </p>
          <label htmlFor="file" className="h-fit">
            <div className="bg-content text-white flex justify-center items-center h-12 rounded-md  cursor-pointer my-2">
              사진 선택
            </div>
            <input
              type="file"
              name="file"
              id="file"
              accept="image/*"
              onChange={previewImage}
              className="invisible w-0 h-0"
            />
          </label>
          <button className="bg-content text-error w-full h-12 rounded-md my-2">
            현재 사진 삭제
          </button>
          <input
            type="button"
            onClick={handleSubmit}
            value="저장"
            className="bg-primary text-white w-full h-12 rounded-md my-2 cursor-pointer"
          />
        </form>
      </div>
    </EditProfileLayout>
  );
}

export default EditProfile;
