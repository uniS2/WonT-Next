import { useRef } from "react";
import MapPin from "./MapPin";
import { AiFillPlusCircle } from "react-icons/ai";

interface AddPlanButtonProps {
  text?: string;
  place?: string;
  onDragStart?: (e: React.DragEvent) => void;
  onDragOver?: (e: React.DragEvent) => void;
  onDrop?: (e: React.DragEvent<Element>) => void;
}

function AddPlanButton({ text, place }: AddPlanButtonProps) {
  return (
    <li className="flex h-14 border-[1px] border-[#EDF2F2]  bg-[#F3F5F5] items-center justify-between px-5 w-full">
      <button className="flex justify-between w-full">
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
        <AiFillPlusCircle size="28px" color="#828282" />
      </button>
    </li>
  );
}

export default AddPlanButton;
