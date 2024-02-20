import { create } from "zustand";
// import { persist } from "zustand/middleware";

type RegionStoreType = {
  selectedRegionName: null | string;
  setRegionName: (name: string) => void;
  resetRegionName: () => void;
};

export const RegionStore = create<RegionStoreType>((set) => ({
  selectedRegionName: null,
  setRegionName: (name: string) => set({ selectedRegionName: name }),
  resetRegionName: () => set({ selectedRegionName: "" }),
}));
