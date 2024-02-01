import { create } from "zustand";

interface useTabTitleStoreType {
  tabTitle: string;
  setTabTitle: (text: string) => void;
}

export const useTabTitleStore = create<useTabTitleStoreType>((set) => ({
  tabTitle: "",
  setTabTitle: (text: string) => set({ tabTitle: text }),
}));
