import { create } from "zustand";
import { persist } from "zustand/middleware";

type RegionStoreType = {
  selectedRegionCode: null | number;
  selectedRegionName: null | string;
  setRegionCode: (code: number | null) => void;
  setRegionName: (name: string) => void;
  resetRegionName: () => void;
};

export const RegionStore = create(
  persist<RegionStoreType>(
    (set) => ({
      selectedRegionCode: null,
      selectedRegionName: null,
      setRegionCode: (code: number | null) => set({ selectedRegionCode: code }),
      setRegionName: (name: string) => set({ selectedRegionName: name }),
      resetRegionName: () => set({ selectedRegionName: "" }),
    }),
    {
      name: "tripRegionStorage",
    },
  ),
);
