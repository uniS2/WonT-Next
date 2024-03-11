import Router from "next/router";
import { AiFillPlusCircle } from "react-icons/ai";

function AddSchedule() {
  const handleRoute = (e: React.MouseEvent) => {
    const target = e.currentTarget.textContent;

    if (target === "장소 추가") {
      Router.push("/tripplace");
    } else if (target === "숙소 추가") {
      Router.push("/tripaccommodation");
    }
  };
  return (
    <div className="flex w-full ">
      <button
        className="flex gap-2 w-full items-center justify-center border-stone-300  border-r-[1px]"
        onClick={handleRoute}
      >
        <AiFillPlusCircle size="28px" color="#63D4F2" />
        <span>장소 추가</span>
      </button>

      <button
        className="flex  gap-2 w-full items-center justify-center"
        onClick={handleRoute}
      >
        <AiFillPlusCircle size="28px" color="#F38733" />
        <span>숙소 추가</span>
      </button>
    </div>
  );
}

export default AddSchedule;
