import { create } from "zustand";
import { persist } from "zustand/middleware";
import { PlaceDataType } from "@/types/DataProps";
import { setTripRange } from "@/utils/setTripRange";

type LocationAccommodationsStoreType = {
  locationAccommodations: PlaceDataType[] | null;
  setLocationAccommodations: (location: PlaceDataType[]) => void;
};

type SelectAccommodationsStoreType = {
  selectedAccommodations: PlaceDataType[][] | null;
  setTripAccommodationsRange: (range: number) => void;
  setSelectedAccommodations: (date: number, id: number) => void;
  setSelectedAccommodationsArray: (state: PlaceDataType[][]) => void;
};

export const LocationAccommodationsStore =
  create<LocationAccommodationsStoreType>((set) => ({
    locationAccommodations: null,
    setLocationAccommodations: (location: PlaceDataType[]) =>
      set({ locationAccommodations: location }),
  }));

export const SelectAccommodationsStore = create(
  persist<SelectAccommodationsStoreType>(
    (set) => ({
      selectedAccommodations: null,
      setTripAccommodationsRange: (range: number) =>
        set({ selectedAccommodations: setTripRange(range) }),
      setSelectedAccommodations: (date: number, id: number) =>
        set((state) => {
          if (
            !state.selectedAccommodations ||
            !state.selectedAccommodations[date]
          ) {
            state.selectedAccommodations = [];
            state.selectedAccommodations[date] = [];
          }

          const locationAccommodations =
            LocationAccommodationsStore.getState().locationAccommodations;
          const index = state.selectedAccommodations[date].findIndex(
            (accommodation) => accommodation.contentid === id,
          );

          const newSelectedAccomodationsForDate = [
            ...state.selectedAccommodations[date],
          ];

          if (index == -1) {
            const selectAccommodation = locationAccommodations!.find(
              (accommodation) => accommodation.contentid === id,
            );
            if (selectAccommodation) {
              newSelectedAccomodationsForDate.push(selectAccommodation);
            }
          } else {
            newSelectedAccomodationsForDate.splice(index, 1);
          }

          const updatedSelectedAccommodation = [
            ...state.selectedAccommodations,
          ];
          updatedSelectedAccommodation[date] = newSelectedAccomodationsForDate;

          return {
            selectedAccommodations: updatedSelectedAccommodation,
          };
        }),
      setSelectedAccommodationsArray: (state: PlaceDataType[][]) =>
        set({ selectedAccommodations: state }),
    }),
    {
      name: "tripAccommodationStorage",
    },
  ),
);
