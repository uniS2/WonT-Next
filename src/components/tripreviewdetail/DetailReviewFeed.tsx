import myPlanDefaultImage from "/public/mypage/myPlanDefaultImage.jpg";
import Image from "next/image";

function DetailReviewFeed() {
  return (
    <div className="flex flex-col gap-4">
      <Image
        src={myPlanDefaultImage}
        alt=""
        className="aspect-square object-fill w-[560px]  mt-5 "
      />
      <div className="my-4 p-3">
        <h3 className="font-bold text-2xl text-contentSecondary">제주 여행</h3>
        <span className="font-light text-xs text-contentMuted">
          24.01.02 - 24.01.22
        </span>
        <p className="text-contentMuted my-4">
          제주도 여행 재미있었다~ 제주도 여행 재미있었다~ 제주도 여행
          재미있었다~ 제주도 여행 재미있었다~
        </p>
        <button className="text-primary underline my-2">더보기</button>
      </div>
    </div>
  );
}

export default DetailReviewFeed;
