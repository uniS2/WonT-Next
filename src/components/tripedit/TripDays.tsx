import React, { useEffect, useRef, useState } from "react";
import AddPlanButton from "./AddPlanButton";
import { useDayStore, useTripPlaceStore } from "@/store/useTripPlaceStore";

interface TripDaysProps {
  days?: string;
  date?: string;
}

// function TripDays({ days, date }: TripDaysProps) {
//   const { place, setPlace } = useTripPlaceStore();
//   const dragItem = useRef<number | null>(null); // Specify the type for dragItem
//   const dragOverItem = useRef<number | null>(null); // Specify the type for dragOverItem

//   useEffect(() => {
//     const testTripPlan = [
//       "새별오름",
//       "성산일출봉",
//       "카멜리아 힐",
//       "오설록",
//       "스누피가든",
//       "용머리해안",
//       "금오름",
//       "쇠소깍",
//       "정방폭포",
//     ];
//     // const testTripPlan: string[] = [];
//     setPlace(testTripPlan);
//     // console.log(testTripPlan);
//   }, []);

//   const handleDrag = (e: React.MouseEvent) => {
//     const target = e.target;
//     console.log(target);
//   };

//   const dragStart = (e: React.DragEvent<HTMLDivElement>, position: number) => {
//     dragItem.current = position;
//     // console.log((e.target as HTMLDivElement).innerHTML);
//   };

//   const dragEnter = (e: React.DragEvent<HTMLDivElement>, position: number) => {
//     dragOverItem.current = position;
//     // console.log((e.target as HTMLDivElement).innerHTML);
//   };

//   const drop = (e: React.DragEvent<HTMLDivElement>) => {
//     const copyListItems = [...place];
//     const dragItemContent = copyListItems[dragItem.current as number];
//     copyListItems.splice(dragItem.current as number, 1);
//     copyListItems.splice(dragOverItem.current as number, 0, dragItemContent);
//     dragItem.current = null;
//     dragOverItem.current = null;
//     setPlace(copyListItems);
//   };

//   console.log(place);

//   return (
//     <ul className="flex flex-col  my-5 gap-[10px]">
//       <p className="bg-secondary flex items-center h-14  px-5 gap-2 font-semibold">
//         {days} <span className="font-light text-contentMuted">| {date}</span>
//       </p>
//       {place.length !== 0 ? (
//         <>
//           {place.map((item, index) => (
//             <React.Fragment key={index}>
//               <div
//                 draggable
//                 onDragStart={(e) => dragStart(e, index)}
//                 onDragEnter={(e) => dragEnter(e, index)}
//                 onDragEnd={drop}
//                 onDragOver={(e) => e.preventDefault()}
//                 className="flex h-14 border-[1px] border-[#EDF2F2]  bg-[#F3F5F5] items-center justify-between px-5"
//               >
//                 <AddPlanButton text="장소" place={item} key={item} />
//               </div>
//             </React.Fragment>
//           ))}
//         </>
//       ) : (
//         <>
//           <AddPlanButton text="장소" />
//           <AddPlanButton text="숙소" />
//         </>
//       )}
//     </ul>
//   );
// }

// export default TripDays;
/* -------------------------------------------------------------------------- */
// #배열일 경우
function TripDays({ days, date }: TripDaysProps) {
  const { place, setPlace } = useTripPlaceStore();
  const { day, setDay } = useDayStore();
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);
  const [dragTripPlan, setDragTripPlan] = useState<string[]>([]);

  useEffect(() => {
    setDay(3);
    const testTripPlan = [
      { places: ["새별오름", "성산일출봉", "카멜리아 힐"] },
      { places: ["오설록", "스누피가든", "용머리해안"] },
      { places: ["금오름", "쇠소깍", "정방폭포"] },
    ];
    setPlace(testTripPlan);
  }, []);

  const dragStart = (
    e: React.DragEvent<HTMLDivElement>,
    index: number,
    itemList: string[],
  ) => {
    setDragTripPlan(itemList);
    console.log("dragstart", itemList);

    dragItem.current = index;
  };

  const dragEnter = (
    e: React.DragEvent<HTMLDivElement>,
    index: number,
    itemList: string[],
  ) => {
    dragOverItem.current = index;
    console.log("dragEnter", (dragOverItem.current = index));
  };

  // const drop = (
  //   e: React.DragEvent<HTMLDivElement>,
  //   index: number,
  //   itemList: string[],
  // ) => {
  //   // console.log(dragTripPlan);
  //   const copyListItems = [...dragTripPlan];
  //   const dragItemContent = copyListItems[dragItem.current as number];
  //   console.log(dragItem);

  //   copyListItems.splice(dragItem.current as number, 1);
  //   copyListItems.splice(index, 0, dragItemContent);
  //   dragItem.current = null;
  //   dragOverItem.current = null;
  //   console.log(dragItemContent);
  // };

  const drop = (
    e: React.DragEvent<HTMLDivElement>,
    itemIndex: number,
    itemList: string[],
  ) => {
    const copyListItems = [...itemList];
    const dragItemContent = copyListItems[dragItem.current as number];
    console.log(dragItemContent);

    copyListItems.splice(dragItem.current as number, 1);
    copyListItems.splice(itemIndex, 0, dragItemContent);

    dragItem.current = null;
    dragOverItem.current = null;
    // setPlace(copyListItems);
  };

  // console.log("place", place);
  // console.log(place.map((item) => item));

  return (
    <ul className="flex flex-col  my-5 gap-[10px]">
      {place.map((item, index) => (
        <React.Fragment key={index}>
          <p className="bg-secondary flex items-center h-14  px-5 gap-2 font-semibold">
            {index}{" "}
            <span className="font-light text-contentMuted">| {date}</span>
          </p>
          {item.places.map((place, index, itemList) => (
            <>
              <div
                key={place}
                draggable
                onDragStart={(e) => dragStart(e, index, itemList)}
                onDragEnter={(e) => dragEnter(e, index, itemList)}
                // onDragEnd={(e) => drop(e, index)}
                onDragEnd={(e) => drop(e, index, itemList)}
                onDragOver={(e) => e.preventDefault()}
                className="flex h-14 border-[1px] border-[#EDF2F2]  bg-[#F3F5F5] items-center justify-between px-5"
              >
                <AddPlanButton text="장소" place={place} key={index} />
              </div>
            </>
          ))}
        </React.Fragment>
      ))}
    </ul>
  );
}

export default TripDays;
