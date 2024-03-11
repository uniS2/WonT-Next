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
  // setSelectedAccommodations: (id: number) => void;
  resetSelectedAccommodations: () => void;
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
      /* setSelectedAccommodations: (id: number) =>
        set((state) => {
          if (
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
        }), */
      resetSelectedAccommodations: () => set({ selectedAccommodations: null }),
    }),
    {
      name: "tripAccommodationStorage",
    },
  ),
);
