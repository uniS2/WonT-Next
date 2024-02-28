import { create } from "zustand";

// interface TripPlaceState {
//   place: string[] | [];
//   setPlace: (data: string[] | []) => void;
// }

// export const useTripPlaceStore = create<TripPlaceState>()((set) => ({
//   place: [],
//   setPlace: (data: string[] | []) => set({ place: data }),
// }));

// interface TripPlaceState {
//   place: string[] | [];
//   setPlace: (data: string[] | []) => void;
// }

// export const useTripPlaceStore = create<TripPlaceState>()((set) => ({
//   place: [],
//   setPlace: (data: string[] | []) => set({ place: data }),
// }));

// interface DayState {
//   day: number;
//   setDay: (day: number) => void;
// }

// export const useDayStore = create<DayState>()((set) => ({
//   day: 0,
//   setDay: (day: number) => set((state) => ({ day })),
// }));

// export const useTripPlaceStore = create<TripPlaceState>()((set) => ({
//   place: [],
//   setPlace: (data: string[] | []) => set({ place: data }),
//   setPlaceByDay: (day: number) => {
//     set(`day${day}`[{ placeByDay: place }]);
//   },
// }));

// const useCountStore = create((set) => ({
//   plan: { place: [] },
//   inc: () =>
//     set((state) => ({
//       plan: { ...state.plan, count: state.nested.count + 1 },
//     })),
// }))
/* -------------------------------------------------------------------------- */
// interface TripPlaceState {
//   place: {
//     [key: string]: string[];
//   };
//   setPlace: (data: { [key: string]: string[] }) => void;
// }

// export const useTripPlaceStore = create<TripPlaceState>((set) => ({
//   place: {},
//   setPlace: (data: { [key: string]: string[] }) => set({ place: data }),
// }));

interface TripPlaceState {
  place: { [key: string]: string[] }[];
  setPlace: (data: { [key: string]: string[] }[]) => void;
}

export const useTripPlaceStore = create<TripPlaceState>((set) => ({
  place: [],
  setPlace: (data: { [key: string]: string[] }[]) => set({ place: data }),
}));

interface DayState {
  day: number;
  setDay: (day: number) => void;
}

export const useDayStore = create<DayState>((set) => ({
  day: 0,
  setDay: (day: number) => set({ day }),
}));
