import { create } from "zustand";

type DaysStoreType = {
  tripDays: Date[];
  setTripDays: (e: any) => void;
};

export const DaysStore = create<DaysStoreType>((set) => ({
  tripDays: [new Date()],
  setTripDays: (e: Date[]) => set({ tripDays: e }),
  resetTripDays: () => set({ tripDays: [new Date()] }),
}));
