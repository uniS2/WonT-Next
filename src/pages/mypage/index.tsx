import DefaultProfile from "@/components/mypage/DefaultProfile";
import MyPageTab from "@/components/mypage/MyPageTab";
import MyPageLayout from "@/layout/mypage/layout";
import MyBookmark from "@/components/mypage/MyBookmark";
import MyPlan from "@/components/mypage/MyPlan";
import MyReview from "@/components/mypage/MyReview";
import { TbSettings } from "react-icons/tb";
import { useState } from "react";
import { useTabTitleStore } from "@/store/useTabTitleStore";

function Mypage() {
  const { tabTitle, setTabTitle } = useTabTitleStore();

  const handleTab = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget.querySelector("span");
    const tabText = target?.textContent;
    console.log(tabText);
    if (tabText) {
      setTabTitle(tabText);
    }
  };

  console.log(tabTitle);

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
        <MyPageTab tab="나의 일정" onClick={handleTab} />
        <MyPageTab tab="여행 리뷰" onClick={handleTab} />
        <MyPageTab tab="북마크" onClick={handleTab} />
      </div>
      <hr className="border-[#D0CFD7]" />
      <section className="bg-[#EFF0F0] h-screen p-5">
        {tabTitle === "나의 일정" ? (
          <MyPlan />
        ) : tabTitle === "여행 리뷰" ? (
          <MyReview />
        ) : (
          <MyBookmark />
        )}
      </section>
    </MyPageLayout>
  );
}

export default Mypage;
