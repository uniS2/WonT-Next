import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AccommodationDataType } from "@/types/DataProps";

type AccommodationsStoreType = {
  locationAccommodations: AccommodationDataType[] | null;
  selectedAccommodations: AccommodationDataType[] | null;
  setLocationAccommodations: (location: AccommodationDataType[]) => void;
  setSelectedAccommodations: (id: number) => void;
  resetSelectedAccommodations: () => void;
};

export const AccommodationsStore = create(
  persist<AccommodationsStoreType>(
    (set) => ({
      locationAccommodations: null,
      selectedAccommodations: null,
      setLocationAccommodations: (location: AccommodationDataType[]) =>
        set({ locationAccommodations: location }),
      setSelectedAccommodations: (id: number) =>
        set((state) => {
          if (
            !state.selectedAccommodations?.filter((sa) => sa.contentid == id)
              .length
          ) {
            return state.selectedAccommodations
              ? {
                  selectedAccommodations: [
                    ...state.selectedAccommodations,
                    ...state.locationAccommodations!.filter(
                      (location) => location.contentid == id,
                    ),
                  ],
                }
              : {
                  selectedAccommodations: [
                    ...state.locationAccommodations!.filter(
                      (location) => location.contentid == id,
                    ),
                  ],
                };
          } else {
            return {
              selectedAccommodations: state.selectedAccommodations?.filter(
                (sa) => sa.contentid != id,
              ),
            };
          }
        }),
      resetSelectedAccommodations: () => set({ selectedAccommodations: null }),
    }),
    {
      name: "tripAccommodationStorage",
    },
  ),
);
