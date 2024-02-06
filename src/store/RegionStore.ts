import { create } from "zustand";
// import { persist } from "zustand/middleware";

type RegionStoreState = {
  selectedRegionName: string;
  setRegionName: (name: string) => void;
};

export const RegionStore = create<RegionStoreState>((set) => ({
  selectedRegionName: "",
  setRegionName: (name) => set({ selectedRegionName: name }),
  resetRegionName: () => set({ selectedRegionName: "" }),
}));
