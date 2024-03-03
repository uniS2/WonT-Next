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
// import {
//   DragDropContext,
//   Droppable,
//   Draggable,
//   DropResult,
// } from "react-beautiful-dnd";
// import AddPlanButton from "./AddPlanButton";
// import React, { useCallback, useEffect } from "react";
// import { useDayStore, useTripPlaceStore } from "@/store/useTripPlaceStore";

// function TripDays({ days, date }: TripDaysProps) {
//   const { place, setPlace } = useTripPlaceStore();
//   const { day, setDay } = useDayStore();

//   useEffect(() => {
//     setDay(3);
//     const testTripPlan = [
//       { places: ["새별오름", "성산일출봉", "카멜리아 힐"] },
//       { places: ["오설록", "스누피가든", "용머리해안"] },
//       { places: ["금오름", "쇠소깍", "정방폭포"] },
//     ];
//     setPlace(testTripPlan.map((item) => item.places));
//   }, []);

//   // const onDragEnd = useCallback(
//   //   (result: { destination: { index: any }; source: { index: any } }) => {
//   //     if (!result.destination) return;

//   //     const sourceIndex = result.source.index;
//   //     const destinationIndex = result.destination.index;

//   //     const copiedPlace = Array.from(place);
//   //     const [removed] = copiedPlace.splice(sourceIndex, 1);
//   //     copiedPlace.splice(destinationIndex, 0, removed);

//   //     setPlace(copiedPlace);
//   //   },
//   //   [place, setPlace],
//   // );
//   const onDragEnd = useCallback(
//     (result: DropResult) => {
//       if (!result.destination) return;

//       const sourceIndex = result.source.index;
//       const destinationIndex = result.destination.index;

//       const copiedPlace = Array.from(place);
//       console.log(copiedPlace);

//       const [removed] = copiedPlace.splice(sourceIndex, 1);
//       copiedPlace.splice(destinationIndex, 0, removed);

//       setPlace(copiedPlace);
//     },
//     [place, setPlace],
//   );
//   console.log(place);

//   return (
//     <DragDropContext onDragEnd={onDragEnd}>
//       <ul className="flex flex-col my-5 gap-[10px]">
//         {place.map((item, index) => (
//           <React.Fragment key={index}>
//             <p className="bg-secondary flex items-center h-14 px-5 gap-2 font-semibold">
//               <span className="font-light text-contentMuted">| {date}</span>
//             </p>
//             <Droppable droppableId={`day-${index}`}>
//               {(provided) => (
//                 <div {...provided.droppableProps} ref={provided.innerRef}>
//                   {item.map((place, index) => (
//                     <Draggable key={place} draggableId={place} index={index}>
//                       {(provided) => (
//                         <div
//                           ref={provided.innerRef}
//                           {...provided.draggableProps}
//                           {...provided.dragHandleProps}
//                           className="flex h-14 border-[1px] border-[#EDF2F2] bg-[#F3F5F5] items-center justify-between px-5"
//                         >
//                           <AddPlanButton
//                             text="장소"
//                             place={place}
//                             key={index}
//                           />
//                         </div>
//                       )}
//                     </Draggable>
//                   ))}
//                   {provided.placeholder}
//                 </div>
//               )}
//             </Droppable>
//           </React.Fragment>
//         ))}
//       </ul>
//     </DragDropContext>
//   );
// }

// export default TripDays;
/* -------------------------------------------------------------------------- */
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import AddPlanButton from "./AddPlanButton";
import React, { useCallback, useEffect } from "react";
import { useDayStore, useTripPlaceStore } from "@/store/useTripPlaceStore";

function TripDays({ days, date }: TripDaysProps) {
  const { place, setPlace } = useTripPlaceStore();
  const { day, setDay } = useDayStore();

  useEffect(() => {
    setDay(3);
    const testTripPlan = [
      { places: ["새별오름", "성산일출봉", "카멜리아 힐"] },
      { places: ["오설록", "스누피가든", "용머리해안"] },
      { places: ["금오름", "쇠소깍", "정방폭포"] },
    ];
    setPlace(testTripPlan.map((item) => item.places));
  }, []);

  const onDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) return;

      const { source, destination } = result;

      // Moving within the same list
      if (source.droppableId === destination.droppableId) {
        const listIndex = parseInt(source.droppableId.split("-")[1]);
        const copiedPlace = [...place];
        const items = copiedPlace[listIndex];
        const [removed] = items.splice(source.index, 1);
        items.splice(destination.index, 0, removed);
        setPlace(copiedPlace);
      } else {
        // Moving to a different list
        // Implementation for this scenario depends on your use case
      }
    },
    [place, setPlace],
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <ul className="flex flex-col my-5 gap-[10px]">
        {place.map((item, index) => (
          <React.Fragment key={index}>
            <p className="bg-secondary flex items-center h-14 px-5 gap-2 font-semibold">
              <span className="font-light text-contentMuted">| {date}</span>
            </p>
            <Droppable droppableId={`day-${index}`}>
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {item.map((place, index) => (
                    <Draggable key={place} draggableId={place} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="flex h-14 border-[1px] border-[#EDF2F2] bg-[#F3F5F5] items-center justify-between px-5"
                        >
                          <AddPlanButton
                            text="장소"
                            place={place}
                            key={index}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </React.Fragment>
        ))}
      </ul>
    </DragDropContext>
  );
}

export default TripDays;
