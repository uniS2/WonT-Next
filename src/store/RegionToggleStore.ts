import { create } from "zustand";

type RegionToggleStoreType = {
  toggleRegionName: null | string;
  setToggleRegionName: (name: string | null) => void;
};

export const RegionToggleStore = create<RegionToggleStoreType>((set) => ({
  toggleRegionName: null,
  setToggleRegionName: (name: string | null) => set({ toggleRegionName: name }),
}));
