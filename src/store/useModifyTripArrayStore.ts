import { PlaceDataType } from "@/types/DataProps";
import { create } from "zustand";

interface ModifyTripArrayType {
  modifyPlaceArray: PlaceDataType[][];
  setModifyPlaceArray: (place: PlaceDataType[][]) => void;
}

export const useModifyPlanArray = create<ModifyTripArrayType>((set) => ({
  modifyPlaceArray: [],
  setModifyPlaceArray: (place) =>
    set((state) => ({ ...state, modifyPlaceArray: place })),
}));
