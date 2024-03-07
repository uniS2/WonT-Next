import React, { useEffect, useState } from "react";
import SearchLayout from "@/layout/search/layout";
import SearchName from "@/components/search/SearchName";
import SearchInput from "@/components/search/SearchInput";
import SearchModal from "@/components/search/SearchModal";
import Link from "next/link";
import MyBookmarkIcon from "@/components/mypage/MyBookmarkIcon";
import { TOUR_BASE_ACCOMMODATION, TOUR_BASE_SEARCH } from "@/lib/tour/tour";
const index = () => {
  const [test, setTest] = useState();
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${TOUR_BASE_SEARCH}&pageNo=${2}&areaCode=${2}&contentTypeId=${38}`,
      );
      const json = await response.json();
      setTest(json.response.body.items.item);
    })();
  }, []);
  console.log(test);
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
