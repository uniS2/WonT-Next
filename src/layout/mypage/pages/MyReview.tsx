import MyPageTitle from "../../../components/mypage/MyPageTitle";
import ReviewFeed from "@/components/mypage/ReviewFeed";

function MyReview() {
  return (
    <div>
      <MyPageTitle text="여행 리뷰" />
      <div className="grid grid-cols-2 my-5 gap-3 border-orange-800 border-8">
        <ReviewFeed />
        <ReviewFeed />
      </div>
    </div>
  );
}

export default MyReview;
