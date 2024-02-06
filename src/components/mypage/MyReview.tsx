import MyPageTitle from "@/components/mypage/MyPageTitle";
import ReviewFeed from "@/components/mypage/ReviewFeed";

function MyReview() {
  return (
    <div>
      <MyPageTitle text="여행 리뷰" />
      <ul className="grid grid-cols-2 my-5 gap-3 ">
        <ReviewFeed />
        <ReviewFeed />
      </ul>
    </div>
  );
}

export default MyReview;
