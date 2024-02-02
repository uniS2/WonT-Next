import MyBookmarkIcon from "./MyBookmarkIcon";
import MyPlanIcon from "./MyPlanIcon";
import MyReviewIcon from "./MyReviewIcon";
import { useTabTitleStore } from "@/lib/store/useTabTitleStore";

interface MyPageTabProps {
  tab: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function MyPageTab({ tab, onClick }: MyPageTabProps) {
  const { tabTitle } = useTabTitleStore();

  console.log("comp", tabTitle);

  return (
    <button
      className="font-extrabold flex flex-col justify-end w-[70px] h-16 items-center "
      onClick={onClick}
    >
      {tab === "나의 일정" ? (
        <MyPlanIcon />
      ) : tab === "여행 리뷰" ? (
        <MyReviewIcon />
      ) : (
        <MyBookmarkIcon size="26px" fill="#363636" />
      )}

      <span className="font-normal">{tab}</span>
      {tabTitle === tab ? (
        <hr className="border-2 border-secondary w-full" />
      ) : (
        <hr className="border-2 border-secondary w-full opacity-0" />
      )}
    </button>
  );
}

export default MyPageTab;
