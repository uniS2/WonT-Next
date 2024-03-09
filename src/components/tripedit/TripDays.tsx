import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import AddPlanButton from "./AddPlanButton";
import React, { useCallback, useEffect, useState } from "react";
import { useTripPlaceStore } from "@/store/useTripPlaceStore";
import { CiSquareChevDown, CiSquareChevUp } from "react-icons/ci";
import { motion } from "framer-motion";
import { useViewPlanStore } from "@/store/useViewPlanStore";
import { AccommodationStore } from "@/store/AccommodationStore";
import { DaysStore } from "@/store/DaysStore";
import { AccommodationDataType } from "@/types/DataProps";

interface TripDaysProps {
  days?: string;
  // date?: string;
  date?: any;
  tripDate?: string[];
}

function TripDays({ days, date }: TripDaysProps) {
  const { place, setPlace } = useTripPlaceStore();
  const { viewPlanStates, setViewPlanStates } = useViewPlanStore();
  const { selectedAccommodation, setselectedAccommodation } =
    AccommodationStore();
  const { tripDays, setTripDays } = DaysStore();
  const [tripDate, setTripDate] = useState<string[]>([]);

  useEffect(() => {
    const dates = tripDays.map((dateString) =>
      new Date(dateString).toISOString().slice(0, 10),
    );

    setTripDate(dates);
  }, [tripDays]);

  useEffect(() => {
    // setViewPlanStates(new Array(testTripPlan.length).fill(true));
    setViewPlanStates(new Array(tripDate.length).fill(true));
    console.log(viewPlanStates);
  }, []);

  const onDragEnd = (result: { source: any; destination: any }) => {
    const { source, destination } = result;

    // 드래그가 유효한 목적지로 이동한 경우
    if (destination && destination.droppableId !== source.droppableId) {
      const sourceListIndex = parseInt(source.droppableId.split("-")[1]);
      const destinationListIndex = parseInt(
        destination.droppableId.split("-")[1],
      );

      // 선택한 숙소 리스트 복사
      // const copiedAccommodation = [...selectedAccommodation];
      const copiedAccommodation: AccommodationDataType[] = selectedAccommodation
        ? [...selectedAccommodation]
        : [];

      // 드래그한 아이템의 정보 가져오기
      const draggedItem = copiedAccommodation[sourceListIndex];

      // 드래그한 아이템을 원래 리스트에서 제거
      copiedAccommodation.splice(sourceListIndex, 1);

      // 드롭한 위치에 아이템 삽입
      copiedAccommodation.splice(destinationListIndex, 0, draggedItem);

      // 변경된 숙소 리스트로 업데이트
      setselectedAccommodation(copiedAccommodation);
    }
  };

  const handleViewPlan = (e: React.MouseEvent, index: number) => {
    const newViewPlanStates = [...viewPlanStates];
    newViewPlanStates[index] = !newViewPlanStates[index];
    console.log(newViewPlanStates);

    setViewPlanStates(newViewPlanStates);
  };

  const variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: {
      height: 0,
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3,
      },
    },
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <ul className="flex flex-col my-5 gap-[10px]">
        {tripDate.length !== 0 ? (
          tripDate.map((item, index) => (
            <React.Fragment key={item}>
              <div className="bg-secondary flex items-center h-14 px-5 gap-2 font-semibold justify-between">
                <span className="font-light text-contentMuted">
                  {`Day${index + 1} | ${item}`}
                </span>
                <button
                  className="p-0 m-0"
                  onClick={(e) => handleViewPlan(e, index)}
                >
                  {viewPlanStates[index] ? (
                    <CiSquareChevUp size={20} color="#828282" />
                  ) : (
                    <CiSquareChevDown size={20} color="#828282" />
                  )}
                </button>
              </div>
              <Droppable droppableId={`day-${index}`}>
                {(provided) => (
                  <motion.div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="overflow-hidden"
                    animate={viewPlanStates[index] ? "open" : "closed"}
                    variants={variants}
                    transition={{ ease: "easeIn", duration: 0.3 }}
                    style={{ originY: 0.55 }}
                  >
                    {selectedAccommodation?.map((item, index) => (
                      <Draggable
                        key={item.title}
                        draggableId={item.title}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="flex h-14 border-[1px] border-[#EDF2F2] bg-[#F3F5F5] items-center justify-between px-5"
                          >
                            <AddPlanButton
                              text="장소"
                              place={item.title}
                              key={index}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </motion.div>
                )}
              </Droppable>
            </React.Fragment>
          ))
        ) : (
          <>
            <div className="bg-secondary flex items-center h-14 px-5 gap-2 font-semibold justify-between">
              <span className="font-light text-contentMuted">
                {days} | {date}
              </span>
            </div>

            <AddPlanButton text="장소" />
            <AddPlanButton text="숙소" />
          </>
        )}
      </ul>
    </DragDropContext>
  );
}

export default TripDays;
