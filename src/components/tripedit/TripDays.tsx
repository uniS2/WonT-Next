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
    // console.log(testTripPlan);
  }, []);

  const handleDrag = (e: React.MouseEvent) => {
    const target = e.target;
    console.log(target);
  };

  const arrayOfItems: any[] = [];
  const callback = (updatedArray: any[]) => {
    console.log(updatedArray);
  };

  const swapItems = (array: any[], index1: number, index2: number) => {
    const newArray = [...array];
    [newArray[index1], newArray[index2]] = [newArray[index2], newArray[index1]];
    return newArray;
  };

  const onDragStart = (e: React.DragEvent<HTMLDivElement>, id: number) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("planIndex", String(id));
  };

  const onDragDrop = (e: React.DragEvent, index: number) => {
    e.preventDefault();

    const movingTarget = e.dataTransfer.getData("planIndex/plain");
    const updatedArray = swapItems(arrayOfItems, parseInt(movingTarget), index);
    callback(updatedArray);
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <ul className="flex flex-col  my-5 gap-[10px]">
      <p className="bg-secondary flex items-center h-14  px-5 gap-2 font-semibold">
        {days} <span className="font-light text-contentMuted">| {date}</span>
      </p>
      {place.length !== 0 ? (
        <>
          {place.map((item, index) => (
            <>
              <div className="flex h-14 border-[1px] border-[#EDF2F2]  bg-[#F3F5F5] items-center justify-between px-5 ">
                {/* <div draggable="true" onClick={(e) => handleDrag(e)}> */}
                <div
                  draggable="true"
                  onDragOver={onDragOver}
                  onDrop={(e) => onDragDrop(e, index)}
                >
                  <span></span>
                  <AddPlanButton
                    text="장소"
                    place={item}
                    key={item}
                    onDragStart={(e) => onDragStart(e, index)}
                    onDragOver={onDragOver}
                    onDrop={(e: React.DragEvent<Element>) =>
                      onDragDrop(e, index)
                    }
                  />
                </div>
              </div>
            </>
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
