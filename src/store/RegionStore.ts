import { create } from "zustand";
// import { persist } from "zustand/middleware";

type RegionStoreType = {
  selectedRegionName: string;
  setRegionName: (name: string) => void;
};

export const RegionStore = create<RegionStoreType>((set) => ({
  selectedRegionName: "",
  setRegionName: (name: string) => set({ selectedRegionName: name }),
  resetRegionName: () => set({ selectedRegionName: "" }),
}));
