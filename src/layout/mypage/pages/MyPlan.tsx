import Image from "next/image";
import myPlanDefaultImage from "/public/mypage/myPlanDefaultImage.jpg";
import MyPageTitle from "../../../components/mypage/MyPageTitle";

function MyPlan() {
  return (
    <div>
      <MyPageTitle text="나의 일정" />
      <div className="grid my-5 sm:grid-cols-1 md:grid-cols-2  2xl:grid-cols-4 gap-3">
        <Image
          src={myPlanDefaultImage}
          alt="Plan Image"
          className="w-100% h-[200px] sm:h-[280px] w-full object-cover rounded-lg"
        />
        <Image
          src={myPlanDefaultImage}
          alt="Plan Image"
          className="w-100% h-[200px] sm:h-[280px] w-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
}

export default MyPlan;
