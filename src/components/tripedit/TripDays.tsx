import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import AddPlanButton from "./AddPlanButton";
import React, { useCallback, useEffect } from "react";
import { useDayStore, useTripPlaceStore } from "@/store/useTripPlaceStore";

interface TripDaysProps {
  days?: string;
  date?: string;
}

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

      if (source.droppableId === destination.droppableId) {
        const listIndex = parseInt(source.droppableId.split("-")[1]);
        const copiedPlace = [...place];
        const items = copiedPlace[listIndex];
        const [removed] = items.splice(source.index, 1);
        items.splice(destination.index, 0, removed);
        setPlace(copiedPlace);
      } else {
        const sourceListIndex = parseInt(source.droppableId.split("-")[1]);
        const destinationListIndex = parseInt(
          destination.droppableId.split("-")[1],
        );
        const copiedPlace = [...place];
        const sourceItems = copiedPlace[sourceListIndex];
        const destinationItems = copiedPlace[destinationListIndex];
        const [removed] = sourceItems.splice(source.index, 1);
        destinationItems.splice(destination.index, 0, removed);
        setPlace(copiedPlace);
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
    /* -------------------------------------------------------------------------- */
    // <DragDropContext onDragEnd={onDragEnd}>
    //   <ul className="flex flex-col my-5 gap-[10px]">
    //     {place.map((item, index) => (
    //       <React.Fragment key={index}>
    //         <p className="bg-secondary flex items-center h-14 px-5 gap-2 font-semibold">
    //           <span className="font-light text-contentMuted">| {date}</span>
    //         </p>
    //         <Droppable droppableId={`day-${index}`}>
    //           {(provided) => (
    //             <div {...provided.droppableProps} ref={provided.innerRef}>
    //               {item.map((place, index) => (
    //                 <Draggable key={place} draggableId={place} index={index}>
    //                   {(
    //                     provided,
    //                     snapshot, // provided, snapshot 추가
    //                   ) => (
    //                     <div
    //                       ref={provided.innerRef}
    //                       {...provided.draggableProps}
    //                       {...provided.dragHandleProps}
    //                       className="flex h-14 border-[1px] border-[#EDF2F2] bg-[#F3F5F5] items-center justify-between px-5"
    //                     >
    //                       {/* AddPlanButton을 Draggable로 감싸기 */}
    //                       <Draggable
    //                         draggableId={`button-${index}`}
    //                         index={index}
    //                       >
    //                         {(buttonProvided) => (
    //                           <div
    //                             ref={buttonProvided.innerRef}
    //                             {...buttonProvided.draggableProps}
    //                             {...buttonProvided.dragHandleProps}
    //                           >
    //                             <AddPlanButton
    //                               text="장소"
    //                               place={place}
    //                               key={index}
    //                             />
    //                           </div>
    //                         )}
    //                       </Draggable>
    //                     </div>
    //                   )}
    //                 </Draggable>
    //               ))}
    //               {provided.placeholder}
    //             </div>
    //           )}
    //         </Droppable>
    //       </React.Fragment>
    //     ))}
    //   </ul>
    // </DragDropContext>
  );
}

export default TripDays;
