import { create } from "zustand";
import { persist } from "zustand/middleware";

type DaysStoreType = {
  tripDays: Date[];
  setTripDays: (e: any) => void;
};

export const DaysStore = create(
  persist<DaysStoreType>(
    (set) => ({
      tripDays: [new Date()],
      setTripDays: (e: Date[]) => set({ tripDays: e }),
      resetTripDays: () => set({ tripDays: [new Date()] }),
    }),
    {
      name: "tripDaysStorage",
    },
  ),
);
