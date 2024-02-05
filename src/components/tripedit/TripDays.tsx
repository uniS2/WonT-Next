import React from "react";
import AddPlanButton from "./AddPlanButton";
import { getTripDate, getTripDateUTC } from "@/lib/utils/getTripDay";

interface TripDaysProps {
  days?: string;
  date?: string;
}

function TripDays({ days, date }: TripDaysProps) {
  return (
    <ul className="flex flex-col  my-5 gap-[10px]">
      <p className="bg-secondary flex items-center h-14  px-5 gap-2 font-semibold">
        {days} <span className="font-light text-contentMuted">| {date}</span>
      </p>
      <AddPlanButton text="장소" />
      <AddPlanButton text="숙소" />
      <AddPlanButton text="장소" place="섭지코지" />
    </ul>
  );
}

export default TripDays;
