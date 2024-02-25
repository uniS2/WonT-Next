import React, { useEffect } from "react";
import AddPlanButton from "./AddPlanButton";
import { useTripPlaceStore } from "@/store/useTripPlaceStore";

interface TripDaysProps {
  days?: string;
  date?: string;
}

function TripDays({ days, date }: TripDaysProps) {
  const { place, setPlace } = useTripPlaceStore();

  useEffect(() => {
    const testTripPlan = ["새별오름", "성산일출봉", "카멜리아 힐"];
    // const testTripPlan: string[] = [];
    setPlace(testTripPlan);
    console.log(testTripPlan);
  }, []);

  console.log(place);
  console.log(place.length);

  return (
    <ul className="flex flex-col  my-5 gap-[10px]">
      <p className="bg-secondary flex items-center h-14  px-5 gap-2 font-semibold">
        {days} <span className="font-light text-contentMuted">| {date}</span>
      </p>
      {place.length !== 0 ? (
        <>
          {place.map((item) => (
            <>
              {/* <AddPlanButton text={item} /> */}
              <AddPlanButton text="장소" place={item} key={item} />
            </>
          ))}
        </>
      ) : (
        <>
          <AddPlanButton text="장소" />
          <AddPlanButton text="숙소" />
        </>
      )}
      {/* <AddPlanButton text="장소" />
      <AddPlanButton text="숙소" /> */}
    </ul>
  );
}

export default TripDays;
