import MapPin from "./MapPin";
import { AiFillPlusCircle } from "react-icons/ai";
import { BsX } from "react-icons/bs";
import { SelectAccommodationsStore } from "@/store/AccommodationsStore";
import { useEffect } from "react";
import { SelectPlacesStore } from "@/store/PlacesStore";
import Router from "next/router";
import { useModifyPlanArray } from "@/store/useModifyTripArrayStore";

interface AddPlanButtonProps {
  text?: string;
  place?: string;
  index: number;
  placeIndex?: number;
  accommondationIndex?: number;
  onDragStart?: (e: React.DragEvent) => void;
  onDragOver?: (e: React.DragEvent) => void;
  onDrop?: (e: React.DragEvent<Element>) => void;
  handleRoute?: (e: React.MouseEvent) => void;
  handleRemove?: (e: React.MouseEvent) => void;
}

function AddPlanButton({
  text,
  place,
  index,
  placeIndex,
  accommondationIndex,
}: AddPlanButtonProps) {
  const { selectedAccommodations } = SelectAccommodationsStore();
  const { selectedPlaces, setSelectedPlacesArray } = SelectPlacesStore();

  // const handleRemove = (e: React.MouseEvent) => {
  //   const target = e.currentTarget;
  //   console.log(target);
  //   console.log("index", index);
  //   const newSelectedAccommodations = Array.from(selectedAccommodations || []);
  //   console.log(newSelectedAccommodations);
  //   resetSelectedAccommodations();
  // };
  const handleRoute = (e: React.MouseEvent, index: number) => {
    const target = e.currentTarget.textContent;

    if (target === "장소를 추가해주세요.") {
      Router.push(`/tripplace/${index + 1}`);
      // Router.push("/tripplace");
    } else if (target === "숙소를 추가해주세요.") {
      Router.push(`/tripaccommodation/${index + 1}`);
    }
  };

  const handleRemove = (e: React.MouseEvent, removeIndex: number) => {
    e.stopPropagation();
    console.log(index);

    if (typeof index === "number") {
      if (text === "장소") {
        const newSelectedPlaces = Array.from(selectedPlaces || []);
        newSelectedPlaces.forEach((innerArray, outerIndex) => {
          if (
            innerArray &&
            innerArray.length > outerIndex &&
            outerIndex === removeIndex
          ) {
            console.log("여깅", innerArray[outerIndex]); // n번 인덱스 안의 n번째 아이템 출력
            innerArray.splice(outerIndex, 1);
          }
        });
        // setSelectedPlacesArray(newSelectedPlaces);
      }

      if (text === "숙소") {
        const newSelectedAccommodations = Array.from(
          selectedAccommodations || [],
        );
        newSelectedAccommodations.splice(index, 1);
        // setSelectedAccommodationArray(newSelectedAccommodations);
      }
    }
  };

  // const handleRemove = (e: React.MouseEvent) => {
  //   e.stopPropagation();

  //   if (typeof index === "number") {
  //     if (text === "장소") {
  //       const newSelectedPlaces = Array.from(selectedPlaces || []);
  //       const [removed] = newSelectedPlaces.splice(index, 1);
  //       newSelectedPlaces.splice(index, 0, removed);
  //       console.log(newSelectedPlaces);

  //       setSelectedPlacesArray(newSelectedPlaces);
  //     }

  //     if (text === "숙소") {
  //       const newSelectedAccommodations = Array.from(
  //         selectedAccommodations || [],
  //       );
  //       newSelectedAccommodations.splice(index, 1);
  //       // setSelectedAccommodationArray(newSelectedAccommodations);
  //     }
  //   }
  // };
  return (
    <div
      className="flex h-14 border-[1px] border-[#EDF2F2]  bg-[#F3F5F5] items-center justify-between px-5 w-full cursor-pointer"
      onClick={(e) => handleRoute(e, index)}
    >
      <div className="flex justify-between w-full items-center">
        {text === "장소" && place ? (
          <span className="flex items-center gap-2">
            <MapPin color="#63D4F2" />
            {place}
          </span>
        ) : text === "장소" ? (
          <span className="flex items-center gap-2">
            <MapPin color="#63D4F2" />
            장소를 추가해주세요.
          </span>
        ) : text === "숙소" && place ? (
          <span className="flex items-center gap-2">
            <MapPin color="#F38733" />
            {place}
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <MapPin color="#F38733" />
            숙소를 추가해주세요.
          </span>
        )}
      </div>
      {(text === "장소" && selectedPlaces?.length !== 0) ||
      (text === "숙소" && selectedAccommodations?.length !== 0) ? (
        <button onClick={(e) => handleRemove(e, 1)}>
          <BsX color="#828282" />
        </button>
      ) : (
        <AiFillPlusCircle size="28px" color="#828282" />
      )}
    </div>
  );
}

export default AddPlanButton;
