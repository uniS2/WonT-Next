import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AccommodationDataType } from "@/types/DataProps";

type PlacesStoreType = {
  locationPlaces: AccommodationDataType[] | null;
  selectedPlaces: AccommodationDataType[] | null;
  setLocationPlaces: (location: AccommodationDataType[]) => void;
  setSelctedPlaces: (id: number) => void;
  resetSelectedPlaces: () => void;
};

export const PlacesStore = create(
  persist<PlacesStoreType>(
    (set) => ({
      locationPlaces: null,
      selectedPlaces: null,
      setLocationPlaces: (location: AccommodationDataType[]) =>
        set({ locationPlaces: location }),
      setSelctedPlaces: (id: number) =>
        set((state) => {
          if (
            !state.selectedPlaces?.filter((sa) => sa.contentid == id).length
          ) {
            return state.selectedPlaces
              ? {
                  selectedPlaces: [
                    ...state.selectedPlaces,
                    ...state.locationPlaces!.filter(
                      (location) => location.contentid == id,
                    ),
                  ],
                }
              : {
                  selectedPlaces: [
                    ...state.locationPlaces!.filter(
                      (location) => location.contentid == id,
                    ),
                  ],
                };
          } else {
            return {
              selectedPlaces: state.selectedPlaces?.filter(
                (sa) => sa.contentid != id,
              ),
            };
          }
        }),
      resetSelectedPlaces: () => set({ selectedPlaces: null }),
    }),
    {
      name: "tripPlaceStorage",
    },
  ),
);
