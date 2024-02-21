import React from "react";

const SearchName = () => {
  return (
    <div className="flex w-[320px] justify-between mt-[24px] border-b-2">
      <p className="text-[24px] font-suitBold">검색</p>
      <button
        type="button"
        className="text-[14px] font-suitLight text-contentMuted"
      >
        초기화
      </button>
    </div>
  );
};

export default SearchName;
