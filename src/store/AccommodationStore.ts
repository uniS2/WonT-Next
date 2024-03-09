// import { create } from "zustand";
// import { persist } from "zustand/middleware";
// import { AccommodationDataType } from "@/types/DataProps";

// type AccommodationStoreType = {
//   locationAccommodation: AccommodationDataType[] | null;
//   selectedAccommodation: AccommodationDataType[] | null;
//   setselectedAccommodation: (state: AccommodationDataType[]) => void;
//   setLocationAccommodation: (location: AccommodationDataType[]) => void;
//   setToggleAccommodation: (id: number) => void;
//   resetSelectedAccommodation: () => void;
// };

// export const AccommodationStore = create(
//   persist<AccommodationStoreType>(
//     (set) => ({
//       locationAccommodation: null,
//       selectedAccommodation: null,
//       setselectedAccommodation: (state: AccommodationDataType[]) =>
//         set({ selectedAccommodation: state }),
//       setLocationAccommodation: (location: AccommodationDataType[]) =>
//         set({ locationAccommodation: location }),
//       setToggleAccommodation: (id: number) =>
//         set((state) => {
//           if (
//             !state.selectedAccommodation?.filter((sa) => sa.contentid == id)
//               .length
//           ) {
//             return state.selectedAccommodation
//               ? {
//                   selectedAccommodation: [
//                     ...state.selectedAccommodation,
//                     ...state.locationAccommodation!.filter(
//                       (location) => location.contentid == id,
//                     ),
//                   ],
//                 }
//               : {
//                   selectedAccommodation: [
//                     ...state.locationAccommodation!.filter(
//                       (location) => location.contentid == id,
//                     ),
//                   ],
//                 };
//           } else {
//             return {
//               selectedAccommodation: state.selectedAccommodation?.filter(
//                 (sa) => sa.contentid != id,
//               ),
//             };
//           }
//         }),
//       resetSelectedAccommodation: () => set({ selectedAccommodation: null }),
//     }),
//     {
//       name: "tripAccommodationStorage",
//     },
//   ),
// );
/* -------------------------------------------------------------------------- */

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AccommodationDataType } from "@/types/DataProps";

type AccommodationsStoreType = {
  locationAccommodations: AccommodationDataType[] | null;
  selectedAccommodations: AccommodationDataType[] | null;
  setSelectedAccommodationArray: (state: AccommodationDataType[]) => void;
  setLocationAccommodations: (location: AccommodationDataType[]) => void;
  setSelectedAccommodations: (id: number) => void;
  resetSelectedAccommodations: () => void;
};

export const AccommodationsStore = create(
  persist<AccommodationsStoreType>(
    (set) => ({
      locationAccommodations: null,
      selectedAccommodations: null,
      setSelectedAccommodationArray: (state: AccommodationDataType[]) =>
        set({ selectedAccommodations: state }),
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
