import { Session } from "@supabase/supabase-js";
import { create } from "zustand";

interface UserSessionState {
  userSession: Session | null;
  setUserSession: (data: { session: Session | null }) => void;
}

export const useSessionStore = create<UserSessionState>((set) => ({
  userSession: null,
  setUserSession: (data) => set({ userSession: data.session }),
}));
