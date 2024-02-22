import { DaysStore } from "@/store/DaysStore";
import { RegionStore } from "@/store/RegionStore";
import { getTripDateKo } from "@/utils/getTripDay";

const TripRegionDaysEdit = () => {
  const { selectedRegionName } = RegionStore();
  const { tripDays } = DaysStore();

  // 모달창 구현 예정
  const toggleTripEdit = () => {};

  return (
    <aside className="flex justify-between items-center w-full h-20 px-5 bg-contentSecondary">
      <div>
        <p className="text-white">{selectedRegionName || "여행 지역"}</p>
        <p className=" text-white">
          {`${getTripDateKo(tripDays[0])} ~
          ${getTripDateKo(tripDays[1])}` || "여행 기간"}
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
