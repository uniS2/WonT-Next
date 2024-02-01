import MyPageTitle from "@/components/mypage/MyPageTitle";
import Image from "next/image";
import myBookmarkDefaultImage from "/public/mypage/myBookmarkDefaultImage.jpg";

function MyBookmark() {
  return (
    <div>
      <MyPageTitle text="북마크" />
      <ul className="grid grid-cols-2 my-5 bg-pink-100 h-[303px]">
        <li className=" bg-red-400 w-[120px] h-[120px] ">
          <Image
            src={myBookmarkDefaultImage}
            alt=""
            className="w-100% h-100% rounded-md"
          />
        </li>
      </ul>
    </div>
  );
}

export default MyBookmark;
