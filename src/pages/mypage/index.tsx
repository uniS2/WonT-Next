import DefaultProfile from "@/components/mypage/DefaultProfile";
import MyPageTab from "@/components/mypage/MyPageTab";
import MyPageTitle from "@/components/mypage/MyPageTitle";
import MyPlan from "@/components/mypage/MyPlan";
import MyPageLayout from "@/layout/mypage/layout";
import { TbSettings } from "react-icons/tb";

function Mypage() {
  return (
    <MyPageLayout>
      <div className="bg-primary w-100% h-[220px] rounded-b-[40px] flex justify-center items-center flex-col gap-2">
        <div className="flex justify-center items-center rounded-full border-[#CADDE2] border-[0.0625rem] w-[100px] h-[100px] bg-secondary">
          <DefaultProfile />
        </div>
        <span className="font-medium">닉네임</span>
        <button className="flex gap-1 rounded-xl px-3 py-1 text-xs text-[#898989] bg-[#E9F0F0]">
          <TbSettings size="16px" />
          프로필 수정
        </button>
      </div>
      <div className="flex justify-evenly mx-auto mt-6">
        <MyPageTab tab="나의 일정" />
        <MyPageTab tab="여행 리뷰" />
        <MyPageTab tab="북마크" />
      </div>
      <hr className="border-[#D0CFD7]" />
      <section className="bg-[#EFF0F0] p-5">
        <MyPageTitle text="나의 일정" />
        <MyPlan />
      </section>
    </MyPageLayout>
  );
}

export default Mypage;
