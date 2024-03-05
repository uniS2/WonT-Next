import { create } from "zustand";

type RegionToggleStoreType = {
  toggleRegionName: string;
  setToggleRegionName: (name: string) => void;
};

export const RegionToggleStore = create<RegionToggleStoreType>((set) => ({
  toggleRegionName: "",
  setToggleRegionName: (name: string) => set({ toggleRegionName: name }),
}));
