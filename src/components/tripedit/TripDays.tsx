import React, { useEffect, useRef } from "react";
import AddPlanButton from "./AddPlanButton";
import { useDayStore, useTripPlaceStore } from "@/store/useTripPlaceStore";

interface TripDaysProps {
  days?: string;
  date?: string;
}

function TripDays({ days, date }: TripDaysProps) {
  const { place, setPlace } = useTripPlaceStore();
  const { day, setDay } = useDayStore();
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  useEffect(() => {
    // const testTripPlan = ["새별오름", "성산일출봉", "카멜리아 힐"];
    setDay(3);
    const testTripPlan = {
      day1: ["새별오름", "성산일출봉", "카멜리아 힐"],
      day2: ["오설록", "스누피가든", "용머리해안"],
      day3: ["금오름", "쇠소깍", "정방폭포"],
    };
    setPlace(testTripPlan);
  }, []);

  const dragStart = (
    e: React.DragEvent<HTMLDivElement>,
    // placeIndex: number,
    position: number,
  ) => {
    // dragItem.current = placeIndex;
    dragItem.current = position;
  };

  const dragEnter = (
    e: React.DragEvent<HTMLDivElement>,
    // placeIndex: number,
    position: number,
  ) => {
    // dragOverItem.current = placeIndex;
    dragOverItem.current = position;
  };

  const drop = (e: React.DragEvent<HTMLDivElement>) => {
    const targetPlace = Object.entries(place);
    console.log(targetPlace);
    const copyListItems = [...targetPlace];
    const dragItemContent = copyListItems[dragItem.current as number];
    console.log(dragItemContent);

    copyListItems.splice(dragItem.current as number, 1);
    copyListItems.splice(dragOverItem.current as number, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    console.log(copyListItems);

    // setPlace(copyListItems);
  };

  console.log(place);
  console.log(Object.entries(place));

  return (
    <ul className="flex flex-col  my-5 gap-[10px]">
      {place ? (
        <>
          {Object.entries(place).map(([dayKey, dayData]) => (
            <React.Fragment key={dayKey}>
              <p className="bg-secondary flex items-center h-14  px-5 gap-2 font-semibold">
                {dayKey}{" "}
                <span className="font-light text-contentMuted">| {date}</span>
              </p>
              <div key={dayKey}>
                {dayData.map((place, placeIndex) => (
                  <div
                    key={placeIndex}
                    draggable
                    onDragStart={(e) => dragStart(e, placeIndex)}
                    onDragEnter={(e) => dragEnter(e, placeIndex)}
                    onDragEnd={drop}
                    onDragOver={(e) => e.preventDefault()}
                    className="flex h-14 border-[1px] border-[#EDF2F2]  bg-[#F3F5F5] items-center justify-between px-5"
                  >
                    <AddPlanButton text="장소" place={place} />
                  </div>
                ))}
              </div>
            </React.Fragment>
          ))}
        </>
      ) : (
        <>
          <p className="bg-secondary flex items-center h-14  px-5 gap-2 font-semibold">
            {days}{" "}
            <span className="font-light text-contentMuted">| {date}</span>
          </p>
          <AddPlanButton text="장소" />
          <AddPlanButton text="숙소" />
        </>
      )}
    </ul>
  );
}

export default TripDays;
