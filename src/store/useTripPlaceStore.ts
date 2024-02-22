import { create } from "zustand";

interface TripPlaceState {
  place: [];
  setPlace: (data: string[]) => void;
}

export const useTripPlaceStore = create<TripPlaceState>()((set) => ({
  place: [],
  setPlace: (data: string[]) => {},
}));
