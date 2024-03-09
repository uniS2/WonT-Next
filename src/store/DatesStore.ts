import { create } from "zustand";
import { persist } from "zustand/middleware";

type DatesStoreType = {
  tripDates: null | string[];
  setTripDates: (dates: any) => void;
};

export const DatesStore = create(
  persist<DatesStoreType>(
    (set) => ({
      tripDates: null,
      setTripDates: (dates: Date[]) => set({ tripDates: getDateRange(dates) }),
      resetTripDates: () => set({ tripDates: null }),
    }),
    {
      name: "tripDatesStorage",
    },
  ),
);

const getDateRange = (value: Date[]) => {
  const start = new Date(value[0]);
  const end = new Date(value[1]);

  const result = [];

  while (start <= end) {
    result.push(start.toLocaleDateString().split("T")[0].slice(0, -1));
    start.setDate(start.getDate() + 1);
  }

  return result;
};
