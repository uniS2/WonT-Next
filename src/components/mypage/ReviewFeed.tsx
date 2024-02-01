import Image from "next/image";
import myReviewDefaultImage1 from "/public/mypage/myReviewDefaultImage-1.jpg";

function ReviewFeed() {
  return (
    <div className="w-full items-center flex flex-col h-fit bg-white justify-center">
      <Image
        src={myReviewDefaultImage1}
        alt=""
        className="w-100% object-cover"
      />
      <span className="mt-6 text-contentMuted text-xs">2024년 1월</span>
      <span className="mb-6 font-semibold text-[16px] text-contentSecondary">
        서울 여행
      </span>
    </div>
  );
}

export default ReviewFeed;
