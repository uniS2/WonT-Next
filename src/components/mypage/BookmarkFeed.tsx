import Image from "next/image";
import React from "react";
import myBookmarkDefaultImage from "/public/mypage/myBookmarkDefaultImage.jpg";
import MyBookmarkIcon from "./MyBookmarkIcon";

function BookmarkFeed() {
  return (
    <div className="relative">
      <Image
        src={myBookmarkDefaultImage}
        alt=""
        className="w-100% h-100% rounded-md  aspect-square object-cover relative"
      />
      <button className="absolute right-3 top-3 ">
        <MyBookmarkIcon size="32px" fill="white" />
      </button>
    </div>
  );
}

export default BookmarkFeed;
