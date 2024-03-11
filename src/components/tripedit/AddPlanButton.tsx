import MapPin from "./MapPin";
import { AiFillPlusCircle } from "react-icons/ai";
import { BsX } from "react-icons/bs";
import { AccommodationsStore } from "@/store/AccommodationsStore";
import { useEffect } from "react";
import { PlacesStore } from "@/store/PlacesStore";

interface AddPlanButtonProps {
  text?: string;
  place?: string;
  index?: number;
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
  handleRoute,
  // handleRemove
}: AddPlanButtonProps) {
  const { selectedAccommodations, setSelectedAccommodationArray } =
    AccommodationsStore();
  const { selectedPlaces, setSelectedPlacesArray } = PlacesStore();

  // const handleRemove = (e: React.MouseEvent) => {
  //   const target = e.currentTarget;
  //   console.log(target);
  //   console.log("index", index);
  //   const newSelectedAccommodations = Array.from(selectedAccommodations || []);
  //   console.log(newSelectedAccommodations);
  //   resetSelectedAccommodations();
  // };
  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (typeof index === "number") {
      if (text === "장소") {
        const newSelectedPlaces = Array.from(selectedPlaces || []);
        newSelectedPlaces.splice(index, 1);
        setSelectedPlacesArray(newSelectedPlaces);
      }

      if (text === "숙소") {
        const newSelectedAccommodations = Array.from(
          selectedAccommodations || [],
        );
        newSelectedAccommodations.splice(index, 1);
        setSelectedAccommodationArray(newSelectedAccommodations);
      }
    }
  };

  return (
    <div
      className="flex h-14 border-[1px] border-[#EDF2F2]  bg-[#F3F5F5] items-center justify-between px-5 w-full cursor-pointer"
      onClick={handleRoute}
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
      {(text === "장소" && selectedPlaces !== null) ||
      (text === "숙소" && selectedAccommodations !== null) ? (
        <button onClick={handleRemove}>
          <BsX color="#828282" />
        </button>
      ) : (
        <AiFillPlusCircle size="28px" color="#828282" />
      )}
    </div>
  );
}

export default AddPlanButton;
