import Link from "next/link";
import React from "react";
import { IoSearch } from "react-icons/io5";
import MyBookmarkIcon from "../mypage/MyBookmarkIcon";

const RecommandRegion = () => {
  const test = () => {
    console.log("test");
  };

  return (
    <div className=" w-[320px]">
      <div className="flex justify-between border-b-2 items-center my-[26px]">
        {/* Tour API 사용 후 map 사용 예정 */}
        <p className="text-[24px] font-bold">국내 추천 여행지</p>
        <Link href={"/search"}>
          <IoSearch size={20} />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-6 ">
        <div className="rounded-md h-[148px] w-[148px] bg-primary relative hover:scale-110 transition">
          <Link href={"/search"}>
            <div>이미지</div>
          </Link>
          <button
            type="button"
            className="absolute right-3 top-3"
            onClick={test} // 북마크 후 마이페이지 나의 계정에 들어가게끔 구현
          >
            <MyBookmarkIcon size="26px" fill="#363636" />
          </button>
        </div>
        <div className="rounded-md h-[148px] w-[148px] bg-primary relative">
          <button type="button" className="absolute right-3 top-3">
            <MyBookmarkIcon size="26px" fill="#363636" />
          </button>
        </div>
        <div className="rounded-md h-[148px] w-[148px] bg-primary relative">
          <button type="button" className="absolute right-3 top-3">
            <MyBookmarkIcon size="26px" fill="#363636" />
          </button>
        </div>
        <div className="rounded-md h-[148px] w-[148px] bg-primary relative">
          <button type="button" className="absolute right-3 top-3">
            <MyBookmarkIcon size="26px" fill="#363636" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommandRegion;
