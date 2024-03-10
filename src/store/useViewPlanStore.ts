import { create } from "zustand";

interface ViewPlanStoreState {
  viewPlanStates: boolean[];
  setViewPlanStates: (data: boolean[]) => void;
}

export const useViewPlanStore = create<ViewPlanStoreState>((set) => ({
  viewPlanStates: [],
  setViewPlanStates: (data) => set({ viewPlanStates: data }),
}));
