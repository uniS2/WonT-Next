import { create } from "zustand";
import { persist } from "zustand/middleware";
import { PlaceDataType } from "@/types/DataProps";
import { setTripRange } from "@/utils/setTripRange";

type LocationPlacesStoreType = {
  locationPlaces: PlaceDataType[] | null;
  setLocationPlaces: (location: PlaceDataType[]) => void;
};

type SelectPlacesStoreType = {
  selectedPlaces: PlaceDataType[][] | null;
  setTripPlacesRange: (range: number) => void;
  // setSelctedPlaces: (id: number) => void;
  resetSelectedPlaces: () => void;
};

export const LocationPlacesStore = create<LocationPlacesStoreType>((set) => ({
  locationPlaces: null,
  setLocationPlaces: (location: PlaceDataType[]) =>
    set({ locationPlaces: location }),
}));

export const SelectPlacesStore = create(
  persist<SelectPlacesStoreType>(
    (set) => ({
      selectedPlaces: null,
      setTripPlacesRange: (range: number) =>
        set({ selectedPlaces: setTripRange(range) }),
      /* setSelctedPlaces: (id: number) =>
        set((state) => {d
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
        }), */
      resetSelectedPlaces: () => set({ selectedPlaces: null }),
    }),
    {
      name: "tripPlaceStorage",
    },
  ),
);
