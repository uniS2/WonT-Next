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
  setSelctedPlaces: (date: number, id: number) => void;
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
      setSelctedPlaces: (date: number, id: number) =>
        set((state) => {
          if (!state.selectedPlaces || !state.selectedPlaces[date]) {
            state.selectedPlaces = [];
            state.selectedPlaces[date] = [];
          }

          const locationPlaces = LocationPlacesStore.getState().locationPlaces;
          const index = state.selectedPlaces[date].findIndex(
            (place) => place.contentid === id,
          );

          if (index == -1) {
            const selectPlace = locationPlaces!.find(
              (place) => place.contentid === id,
            );
            if (selectPlace) {
              state.selectedPlaces[date].push(selectPlace);
            }
          } else {
            state.selectedPlaces[date].splice(index, 1);
          }
          return {
            selectedPlaces: [...state.selectedPlaces],
          };
        }),
    }),
    {
      name: "tripPlaceStorage",
    },
  ),
);
