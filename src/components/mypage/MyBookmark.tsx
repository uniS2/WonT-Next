import MyPageTitle from "@/components/mypage/MyPageTitle";
import Image from "next/image";
import myBookmarkDefaultImage from "/public/mypage/myBookmarkDefaultImage.jpg";
import BookmarkFeed from "./BookmarkFeed";

function MyBookmark() {
  return (
    <div>
      <MyPageTitle text="북마크" />
      <ul className="grid grid-cols-2 lg:grid-cols-3 my-5 gap-3">
        <BookmarkFeed />
        <BookmarkFeed />
      </ul>
    </div>
  );
}

export default MyBookmark;
