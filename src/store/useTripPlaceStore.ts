import { create } from "zustand";

interface TripPlaceState {
  place: string[] | [];
  setPlace: (data: string[] | []) => void;
}

export const useTripPlaceStore = create<TripPlaceState>()((set) => ({
  place: [],
  setPlace: (data: string[] | []) => set({ place: data }),
}));
