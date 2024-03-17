import { create } from "zustand";
import { PlaceDataType } from "@/types/DataProps";

interface SelectedPlanState {
  selectedPlan:
    | { places: PlaceDataType[]; accommodations: PlaceDataType[] }[]
    | undefined;
  setSelectedPlan: (data: any) => void;
}

export const SelectedPlanStore = create<SelectedPlanState>((set) => ({
  selectedPlan: undefined,
  setSelectedPlan: (data) => set({ selectedPlan: data }),
}));
