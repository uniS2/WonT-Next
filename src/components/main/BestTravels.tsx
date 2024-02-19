import Link from "next/link";
import React from "react";
import Image from "next/image";

const BestTravels = () => {
  return (
    <div className=" w-[320px]">
      <div className="flex justify-between border-b-2 items-center my-[26px]">
        {/* supabase로 맵 돌릴 예정 */}
        <p className="text-[24px] font-bold">Best 여행기</p>
      </div>
      <div className="border-8 hover:scale-110 transition mb-[20px]">
        <Link href={"/search"}>
          <Image
            src="/mypage/myReviewDefaultImage-1.jpg"
            alt="test"
            width={360}
            height={200}
          />
          <div className="pl-[27px] py-[20px] flex flex-col gap-3">
            <p>단지가 좋아하는 인생 사진(제목)</p>
            <p className="text-contentMuted">단지님의 일정(사용자)</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BestTravels;
