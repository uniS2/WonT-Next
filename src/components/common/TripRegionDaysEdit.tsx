import { DatesStore } from "@/store/DatesStore";
import { RegionStore } from "@/store/RegionStore";
import { getTripDate } from "@/utils/getTripDate";

const TripRegionDaysEdit = () => {
  const { selectedRegionName } = RegionStore();
  const { tripDates } = DatesStore();

  // 모달창 구현 예정
  const toggleTripEdit = () => {};

  return (
    <aside className="flex justify-between items-center w-full h-20 px-5 bg-contentSecondary">
      <div>
        <p className="text-white">
          {selectedRegionName
            ? selectedRegionName
            : "여행 지역을 다시 선택해주세요."}
        </p>
        <p className=" text-white">
          {tripDates
            ? `${getTripDate(tripDates[0])} - ${getTripDate(tripDates[tripDates.length - 1])}`
            : "여행 기간을 다시 선택해주세요."}
        </p>
      </div>
      <button
        type="button"
        onClick={toggleTripEdit}
        className="w-[3.5rem] h-7 rounded-md border border-contentMuted  text-sm text-contentMuted hover:bg-secondary hover:border-black hover:text-black hover:font-semibold"
      >
        수정
      </button>
    </aside>
  );
};

export default TripRegionDaysEdit;
