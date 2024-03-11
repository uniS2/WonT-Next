import TripRegionDaysEdit from "@/components/common/TripRegionDaysEdit";
import SaveButton from "@/components/tripedit/SaveButton";
import TripDays from "@/components/tripedit/TripDays";
import TripEditMap from "@/components/tripedit/TripEditMap";
import TripEditLayout from "@/layout/tripedit/layout";
import { DatesStore } from "@/store/DatesStore";

function TripEdit() {
  const { tripDates } = DatesStore();
  //TODO@uniS2
  console.log("여행일자", tripDates);

  //TODO@uniS2: 각 일자에 맞는 숙박 선택 정보 제공을 위한 storage 초기화
  // const clearAccommodationIdStorage = AccommodationsStore.persist.clearStorage;

  return (
    <TripEditLayout>
      <div>
        <TripEditMap />
        <TripRegionDaysEdit />
        <section>
          <div className="mt-7 mb-10">
            <TripDays days="Day 1" date="24.01.20" />
            {/* <TripDays days="Day 2" date="24.01.21" /> */}
            {/* <TripDays days="Day 3" date="24.01.22" /> */}
            {/* <TripDays days="Day 4" date="24.01.23" /> */}
            <SaveButton text="저장" />
          </div>
        </section>
      </div>
    </TripEditLayout>
  );
}

export default TripEdit;
