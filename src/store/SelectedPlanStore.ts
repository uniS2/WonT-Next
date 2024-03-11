import { create } from "zustand";
import { PlaceDataType } from "@/types/DataProps";

interface SelectedPlanState {
  selectedPlan: PlaceDataType[] | null;
  setSelectedPlan: (data: PlaceDataType[]) => void;
}

export const SelectedPlanStore = create<SelectedPlanState>((set) => ({
  selectedPlan: null,
  setSelectedPlan: (data: PlaceDataType[]) => set({ selectedPlan: data }),
}));
