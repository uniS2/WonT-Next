import React from "react";
import SearchLayout from "@/layout/search/layout";
import SearchName from "@/components/search/SearchName";
import SearchInput from "@/components/search/SearchInput";
import SearchModal from "@/components/search/SearchModal";
import Link from "next/link";
import MyBookmarkIcon from "@/components/mypage/MyBookmarkIcon";
const index = () => {
  return (
    <SearchLayout>
      <SearchName />
      <SearchInput />
      <SearchModal />
      {/* <div className="grid grid-cols-2 gap-6 mt-[20px]">
        <div className="rounded-md h-[148px] w-[148px] bg-primary relative hover:scale-110 transition">
          <Link href={"/search"}>
            <div>이미지</div>
          </Link>
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
        <div className="rounded-md h-[148px] w-[148px] bg-primary relative">
          <button type="button" className="absolute right-3 top-3">
            <MyBookmarkIcon size="26px" fill="#363636" />
          </button>
        </div>
      </div> */}
    </SearchLayout>
  );
};

export default index;
