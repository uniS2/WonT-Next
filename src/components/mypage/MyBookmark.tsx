import MyPageTitle from "@/components/mypage/MyPageTitle";
import BookmarkFeed from "./BookmarkFeed";

function MyBookmark() {
  return (
    <div>
      <MyPageTitle text="북마크" />
      <div className="grid grid-cols-2 lg:grid-cols-3 my-5 gap-3">
        <BookmarkFeed />
        <BookmarkFeed />
      </div>
    </div>
  );
}

export default MyBookmark;
