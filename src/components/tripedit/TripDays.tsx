import React, { useEffect } from "react";
import AddPlanButton from "./AddPlanButton";
import { useTripPlaceStore } from "@/store/useTripPlaceStore";

interface TripDaysProps {
  days?: string;
  date?: string;
  testTripPlan?: string[];
}

function TripDays({ days, date, testTripPlan }: TripDaysProps) {
  const { place, setPlace } = useTripPlaceStore();

  return (
    <ul className="flex flex-col  my-5 gap-[10px]">
      <p className="bg-secondary flex items-center h-14  px-5 gap-2 font-semibold">
        {days} <span className="font-light text-contentMuted">| {date}</span>
      </p>
      {testTripPlan ? (
        <>
          {testTripPlan.map((item) => (
            <>
              {/* <AddPlanButton text={item} /> */}
              <AddPlanButton text="장소" place={item} />
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
