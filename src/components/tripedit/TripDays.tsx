import React, { useEffect, useRef } from "react";
import AddPlanButton from "./AddPlanButton";
import { useDayStore, useTripPlaceStore } from "@/store/useTripPlaceStore";

interface TripDaysProps {
  days?: string;
  date?: string;
}

// function TripDays({ days, date }: TripDaysProps) {
//   const { place, setPlace } = useTripPlaceStore();
//   const { day, setDay } = useDayStore();
//   const dragItem = useRef<number | null>(null);
//   const dragOverItem = useRef<number | null>(null);

//   useEffect(() => {
//     const testDay1 = ["새별오름", "성산일출봉", "카멜리아 힐"];
//     const testDay2 = ["새별오름", "성산일출봉", "카멜리아 힐"];
//     const testDay3 = ["새별오름", "성산일출봉", "카멜리아 힐"];
//     setDay(3);
//     setPlace(testDay1);
//     setPlace(testDay2);
//     setPlace(testDay3);
//   }, []);

//   const dragStart = (e: React.DragEvent<HTMLDivElement>, position: number) => {
//     dragItem.current = position;
//     console.log((dragItem.current = position));

//     // console.log((e.target as HTMLDivElement).innerHTML);
//   };

//   const dragEnter = (e: React.DragEvent<HTMLDivElement>, position: number) => {
//     dragOverItem.current = position;
//     console.log((dragOverItem.current = position));

//     // console.log((e.target as HTMLDivElement).innerHTML);
//   };

//   const drop = (e: React.DragEvent<HTMLDivElement>) => {
//     const copyListItems = [...place];
//     console.log("copy", copyListItems);

//     const dragItemContent = copyListItems[dragItem.current as number];
//     console.log("copydrag", dragItemContent);

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

function TripDays({ days, date }: TripDaysProps) {
  const { place, setPlace } = useTripPlaceStore();
  const { day, setDay } = useDayStore();
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  useEffect(() => {
    setDay(3);
    const testTripPlan = [
      { places: ["새별오름", "성산일출봉", "카멜리아 힐"] },
      { places: ["오설록", "스누피가든", "용머리해안"] },
      { places: ["금오름", "쇠소깍", "정방폭포"] },
    ];
    setPlace(testTripPlan);
  }, []);

  const dragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    dragItem.current = index;
    console.log((dragItem.current = index));
  };

  const dragEnter = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    dragOverItem.current = index;
    console.log((dragOverItem.current = index));
  };

  const drop = (e: React.DragEvent<HTMLDivElement>) => {
    const copyListItems = [...place];
    // console.log("copy", copyListItems);

    const dragItemContent = copyListItems[dragItem.current as number];
    console.log("copydrag", dragItemContent);

    copyListItems.splice(dragItem.current as number, 1);
    copyListItems.splice(dragOverItem.current as number, 0, dragItemContent);
    dragItem.current = dragOverItem.current;
    dragItem.current = null;
    dragOverItem.current = null;
    setPlace(copyListItems);
  };

  // console.log("place", place);

  return (
    <ul className="flex flex-col  my-5 gap-[10px]">
      {place.map((item, index) => (
        <React.Fragment key={index}>
          <p className="bg-secondary flex items-center h-14  px-5 gap-2 font-semibold">
            {index}{" "}
            <span className="font-light text-contentMuted">| {date}</span>
          </p>
          {item.places.map((place, index) => (
            <>
              <div
                key={place}
                draggable
                onDragStart={(e) => dragStart(e, index)}
                onDragEnter={(e) => dragEnter(e, index)}
                onDragEnd={drop}
                // onDragEnd={(e) => drop(e, index)}
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
