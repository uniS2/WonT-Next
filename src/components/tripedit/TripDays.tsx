import React, { useEffect, useRef } from "react";
import AddPlanButton from "./AddPlanButton";
import { useTripPlaceStore } from "@/store/useTripPlaceStore";

interface TripDaysProps {
  days?: string;
  date?: string;
}

function TripDays({ days, date }: TripDaysProps) {
  const { place, setPlace } = useTripPlaceStore();
  const dragItem = useRef<number | null>(null); // Specify the type for dragItem
  const dragOverItem = useRef<number | null>(null); // Specify the type for dragOverItem

  useEffect(() => {
    const testTripPlan = ["새별오름", "성산일출봉", "카멜리아 힐"];
    // const testTripPlan: string[] = [];
    setPlace(testTripPlan);
    // console.log(testTripPlan);
  }, []);

  const handleDrag = (e: React.MouseEvent) => {
    const target = e.target;
    console.log(target);
  };
  /* -------------------------------------------------------------------------- */
  // const arrayOfItems: any[] = [];
  // const callback = (updatedArray: any[]) => {
  //   console.log(updatedArray);
  // };

  // const swapItems = (array: any[], index1: number, index2: number) => {
  //   const newArray = [...array];
  //   [newArray[index1], newArray[index2]] = [newArray[index2], newArray[index1]];
  //   return newArray;
  // };

  // const onDragStart = (e: React.DragEvent<HTMLDivElement>, id: number) => {
  //   e.dataTransfer.effectAllowed = "move";
  //   e.dataTransfer.setData("planIndex", String(id));
  // };

  // const onDragDrop = (e: React.DragEvent, index: number) => {
  //   e.preventDefault();

  //   const movingTarget = e.dataTransfer.getData("planIndex/plain");
  //   const updatedArray = swapItems(arrayOfItems, parseInt(movingTarget), index);
  //   callback(updatedArray);
  // };

  // const onDragOver = (e: React.DragEvent) => {
  //   e.preventDefault();
  // };
  /* -------------------------------------------------------------------------- */

  const dragStart = (e: React.DragEvent<HTMLDivElement>, position: number) => {
    dragItem.current = position;
    // console.log((e.target as HTMLDivElement).innerHTML);
  };

  const dragEnter = (e: React.DragEvent<HTMLDivElement>, position: number) => {
    dragOverItem.current = position;
    // console.log((e.target as HTMLDivElement).innerHTML);
  };

  const drop = (e: React.DragEvent<HTMLDivElement>) => {
    const copyListItems = [...place];
    const dragItemContent = copyListItems[dragItem.current as number];
    copyListItems.splice(dragItem.current as number, 1);
    copyListItems.splice(dragOverItem.current as number, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setPlace(copyListItems);
  };

  console.log(place);

  return (
    <ul className="flex flex-col  my-5 gap-[10px]">
      <p className="bg-secondary flex items-center h-14  px-5 gap-2 font-semibold">
        {days} <span className="font-light text-contentMuted">| {date}</span>
      </p>
      {place.length !== 0 ? (
        <>
          {place.map((item, index) => (
            <React.Fragment key={index}>
              <div
                draggable
                onDragStart={(e) => dragStart(e, index)}
                onDragEnter={(e) => dragEnter(e, index)}
                onDragEnd={drop}
                onDragOver={(e) => e.preventDefault()}
                className="flex h-14 border-[1px] border-[#EDF2F2]  bg-[#F3F5F5] items-center justify-between px-5"
              >
                <AddPlanButton text="장소" place={item} key={item} />
              </div>
            </React.Fragment>
          ))}
        </>
      ) : (
        <>
          <AddPlanButton text="장소" />
          <AddPlanButton text="숙소" />
        </>
      )}
    </ul>
  );
}

export default TripDays;
