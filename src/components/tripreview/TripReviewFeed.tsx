import Image from "next/image";
import EnterButton from "./EnterButton";
import myPlanDefaultImage from "/public/mypage/myPlanDefaultImage.jpg";

function TripReviewFeed() {
  return (
    <a href="" className="flex flex-col w-100%  border-[#EDF2F2] border-[1px]">
      <Image
        src={myPlanDefaultImage}
        alt="Plan Image"
        className=" aspect-square object-cover"
      />
      <div className="flex flex-col px-3">
        <span className="text-primary text-sm underline w-fit my-[26px] ">
          제주
        </span>
        <h3 className="text-3xl font-bold text-contentSecondary mb-2">
          제주 여행
        </h3>
        <span className="text-xs text-contentMuted font-light">
          24.01.20 - 24.01.22
        </span>
      </div>
      <button className="self-end px-3 my-auto mb-7">
        <EnterButton />
      </button>
    </a>
  );
}

export default TripReviewFeed;
