import MyBookmarkIcon from "./MyBookmarkIcon";
import MyPlanIcon from "./MyPlanIcon";
import MyReviewIcon from "./MyReviewIcon";

function MyPageTab({ tab }: { tab: string }) {
  return (
    <button className="font-extrabold flex flex-col justify-end w-[70px] h-16 items-center ">
      {tab === "나의 일정" ? (
        <MyPlanIcon />
      ) : tab === "여행 리뷰" ? (
        <MyReviewIcon />
      ) : (
        <MyBookmarkIcon />
      )}

      <span className="font-normal">{tab}</span>
      <hr className="border-2 border-secondary w-full" />
    </button>
  );
}

export default MyPageTab;
