import { create } from "zustand";

type IndexStoreType = {
  tripIndex: number;
  setTripIndex: (e: any) => void;
};

export const useIndexStore = create<IndexStoreType>((set) => ({
  tripIndex: 0,
  setTripIndex: (index: number) => set({ tripIndex: index }),
}));
