import { PlaceDataType } from "@/types/DataProps";
import { create } from "zustand";

interface TripArrayType {
  placeArray: PlaceDataType[];
  setPlaceArray: (place: PlaceDataType[]) => void;
}

export const useTripPlanArray = create<TripArrayType>((set) => ({
  placeArray: [],
  setPlaceArray: (place) => set((state) => ({ ...state, placeArray: place })),
}));
