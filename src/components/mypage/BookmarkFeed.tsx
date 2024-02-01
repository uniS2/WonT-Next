import Image from "next/image";
import React from "react";
import myBookmarkDefaultImage from "/public/mypage/myBookmarkDefaultImage.jpg";

function BookmarkFeed() {
  return (
    <li>
      <Image
        src={myBookmarkDefaultImage}
        alt=""
        className="w-100% h-100% rounded-md  aspect-square object-cover"
      />
    </li>
  );
}

export default BookmarkFeed;
