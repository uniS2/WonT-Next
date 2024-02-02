import DefaultProfile from "@/components/mypage/DefaultProfile";
import EditProfileLayout from "@/layout/editprofile/layout";

function EditProfile() {
  return (
    <EditProfileLayout>
      <div className="mx-auto w-3/4 flex flex-col gap-5 justify-center items-center h-[80vh]">
        <div className="flex justify-center items-center rounded-full border-[#CADDE2] border-[0.0625rem] w-[100px] h-[100px] bg-secondary">
          <DefaultProfile />
        </div>
        <form action="" className="w-2/5 h-12">
          <p className="w-full h-full">
            <input
              type="text"
              name="nickname"
              placeholder="닉네임"
              className="bg-[#F3F5F5] border-1 border-[#EDF2F2] w-full h-full rounded-md py-1 px-2"
            />
          </p>
        </form>
        <button className="bg-content text-white w-2/5 h-12 rounded-md">
          사진 선택
        </button>
        <button className="bg-content text-error w-2/5 h-12 rounded-md">
          현재 사진 삭제
        </button>
      </div>
    </EditProfileLayout>
  );
}

export default EditProfile;
