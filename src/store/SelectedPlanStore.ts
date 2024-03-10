import { create } from "zustand";
import { AccommodationDataType } from "@/types/DataProps";

interface SelectedPlanState {
  selectedPlan: AccommodationDataType[] | null;
  setSelectedPlan: (data: AccommodationDataType[]) => void;
}

export const SelectedPlanStore = create<SelectedPlanState>((set) => ({
  selectedPlan: null,
  setSelectedPlan: (data: AccommodationDataType[]) =>
    set({ selectedPlan: data }),
}));
