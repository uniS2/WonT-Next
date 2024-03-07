import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AccommodationDataType } from "@/types/DataProps";

type AccommodationStoreType = {
  locationAccommodation: AccommodationDataType[] | null;
  setLocationAccommodation: (l: AccommodationDataType[]) => void;
};

export const AccommodationStore = create(
  persist<AccommodationStoreType>(
    (set) => ({
      locationAccommodation: null,
      setLocationAccommodation: (la: AccommodationDataType[]) =>
        set({ locationAccommodation: la }),
    }),
    {
      name: "tripDaysStorage",
    },
  ),
);
