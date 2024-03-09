import TripRegionDaysEdit from "@/components/common/TripRegionDaysEdit";
import SaveButton from "@/components/tripedit/SaveButton";
import TripDays from "@/components/tripedit/TripDays";
import TripEditMap from "@/components/tripedit/TripEditMap";
import TripEditLayout from "@/layout/tripedit/layout";
import { DaysStore } from "@/store/DaysStore";
import { RegionStore } from "@/store/RegionStore";
import React, { useEffect, useState } from "react";

function TripEdit() {
  const { tripDays, setTripDays } = DaysStore();
  const { selectedRegionName } = RegionStore();
  const [tripDate, setTripDate] = useState<string[]>([]);

  //TODO@uniS2: 각 일자에 맞는 숙박 선택 정보 제공을 위한 storage 초기화
  // const clearAccommodationIdStorage = AccommodationStore.persist.clearStorage;

  useEffect(() => {
    const dates = tripDays.map((dateString) =>
      new Date(dateString).toISOString().slice(0, 10),
    );

    setTripDate(dates);
  }, [tripDays]);

  console.log(typeof tripDays);
  console.log(tripDays);

  return (
    <TripEditLayout>
      <div>
        <TripEditMap />
        <div className="w-full h-[80px] bg-contentSecondary flex justify-between items-center px-5">
          <div className="flex flex-col">
            <span className="text-white">{selectedRegionName}</span>

            <span className="text-white">{`${tripDate[0]?.replaceAll("-", ".")} - ${tripDate[tripDate?.length - 1]}`}</span>
          </div>
          <button className="border-[1px] w-[56px] h-7 rounded-md border-contentMuted text-contentMuted text-sm">
            수정
          </button>
        </div>
        <section>
          <div className="mt-7 mb-10">
            {/* {tripDate.map((item, index) => ( */}
            {/* <React.Fragment key={index}> */}
            <TripDays />
            {/* </React.Fragment> */}
            {/* ))} */}
            <SaveButton text="저장" />
          </div>
        </section>
      </div>
    </TripEditLayout>
  );
}

export default TripEdit;
