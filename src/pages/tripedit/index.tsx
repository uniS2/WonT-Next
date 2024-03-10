import SaveButton from "@/components/tripedit/SaveButton";
import TripDays from "@/components/tripedit/TripDays";
import TripEditMap from "@/components/tripedit/TripEditMap";
import TripEditLayout from "@/layout/tripedit/layout";
import { RegionStore } from "@/store/RegionStore";
import React, { useEffect, useState } from "react";
import { DatesStore } from "@/store/DatesStore";
import { useRouter } from "next/router";
import { PlacesStore } from "@/store/PlacesStore";
import { AccommodationsStore } from "@/store/AccommodationsStore";

function TripEdit() {
  const { selectedRegionName, resetRegionName } = RegionStore();
  const { tripDates, resetTripDates } = DatesStore();
  const { selectedAccommodations, setSelectedAccommodationArray } =
    AccommodationsStore();
  const { selectedPlaces, setSelectedPlacesArray } = PlacesStore();

  //TODO@uniS2: 각 일자에 맞는 숙박 선택 정보 제공을 위한 storage 초기화
  // const clearAccommodationIdStorage = AccommodationStore.persist.clearStorage;

  const router = useRouter();

  const handleModify = () => {
    resetRegionName();
    resetTripDates();
    setSelectedAccommodationArray([]);
    setSelectedPlacesArray([]);

    router.push("/tripregion");
  };

  if (tripDates) {
    return (
      <TripEditLayout>
        <div>
          <TripEditMap />
          <div className="w-full h-[80px] bg-contentSecondary flex justify-between items-center px-5">
            <div className="flex flex-col">
              <span className="text-white">{selectedRegionName}</span>

              <span className="text-white">{`${tripDates[0]} - ${tripDates[tripDates?.length - 1]}`}</span>
            </div>
            <button
              className="border-[1px] w-[56px] h-7 rounded-md border-contentMuted text-contentMuted text-sm"
              onClick={handleModify}
            >
              수정
            </button>
          </div>
          <section>
            <div className="mt-7 mb-10">
              <TripDays />
              <SaveButton text="저장" />
            </div>
          </section>
        </div>
      </TripEditLayout>
    );
  }
}

export default TripEdit;
