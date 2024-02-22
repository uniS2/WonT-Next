import React from "react";
import Image from "next/image";

const SearchInput = () => {
  return (
    <div className="flex justify-center relative items-center w-[320px] h-[60px]">
      <Image
        src="/svg/search.svg"
        width={20}
        height={20}
        alt="검색"
        className="absolute bottom-5 left-1"
      />
      <input
        type="text"
        name="Search"
        id=""
        className="w-[270px] h-[32px] rounded-md border border-primary"
      />
      <button
        type="button"
        className="w-[44px] h-[32px] bg-primary text-white ml-[6px] rounded-md"
      >
        검색
      </button>
    </div>
  );
};

export default SearchInput;
