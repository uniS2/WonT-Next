import { create } from "zustand";

interface useTabTitleStoreType {
  tabTitle: string;
  setTabTitle: (text: string) => void;
}

export const useTabTitleStore = create<useTabTitleStoreType>((set) => ({
  tabTitle: "나의 일정",
  setTabTitle: (text: string) => set({ tabTitle: text }),
}));
