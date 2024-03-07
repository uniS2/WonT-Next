import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import AddPlanButton from "./AddPlanButton";
import React, { useCallback, useEffect, useState } from "react";
import { useDayStore, useTripPlaceStore } from "@/store/useTripPlaceStore";
import { CiSquareChevDown, CiSquareChevUp } from "react-icons/ci";
import { motion } from "framer-motion";
import { useViewPlanStore } from "@/store/useViewPlanStore";

interface TripDaysProps {
  days?: string;
  date?: string;
}

function TripDays({ days, date }: TripDaysProps) {
  const { place, setPlace } = useTripPlaceStore();
  const { day, setDay } = useDayStore();
  const { viewPlanStates, setViewPlanStates } = useViewPlanStore();

  useEffect(() => {
    setDay(3);
    const testTripPlan = [
      { places: ["새별오름", "성산일출봉", "카멜리아 힐"] },
      { places: ["오설록", "스누피가든", "용머리해안"] },
      { places: ["금오름", "쇠소깍", "정방폭포"] },
    ];
    setPlace(testTripPlan.map((item) => item.places));
    setViewPlanStates(new Array(testTripPlan.length).fill(true));
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

  const handleViewPlan = (e: React.MouseEvent, index: number) => {
    const newViewPlanStates = [...viewPlanStates];
    newViewPlanStates[index] = !newViewPlanStates[index];
    console.log(newViewPlanStates);

    setViewPlanStates(newViewPlanStates);
  };

  const variants = {
    // open: { opacity: 1, x: 0 },
    // closed: { opacity: 0, y: "-100%" },
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    // closed: { opacity: 0, y: -20, transition: { duration: 0.2 } },
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
        {place.length !== 0 ? (
          place.map((item, index) => (
            <React.Fragment key={index}>
              <div className="bg-secondary flex items-center h-14 px-5 gap-2 font-semibold justify-between">
                <span className="font-light text-contentMuted">
                  {days} | {date}
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
                    // hidden={viewPlanStates[index] ? false : true}
                    transition={{ ease: "easeIn", duration: 0.3 }}
                    style={{ originY: 0.55 }}
                  >
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
              <button
                className="p-0 m-0"
                // onClick={(e) => handleViewPlan(e, index)}
              >
                {/* {viewPlanStates[index] ? (
                    <CiSquareChevUp size={20} color="#828282" />
                  ) : (
                    <CiSquareChevDown size={20} color="#828282" />
                  )} */}
              </button>
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
