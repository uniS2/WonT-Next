import Image from "next/image";
import myReviewDefaultImage1 from "/public/mypage/myReviewDefaultImage-1.jpg";
import MyPageTitle from "../../../components/mypage/MyPageTitle";
import ReviewFeed from "@/components/mypage/ReviewFeed";

function MyReview() {
  return (
    <div>
      <MyPageTitle text="여행 리뷰" />
      <div className="grid grid-cols-2 my-5 gap-3">
        <ReviewFeed />
        <ReviewFeed />
      </div>
    </div>
  );
}

export default MyReview;
