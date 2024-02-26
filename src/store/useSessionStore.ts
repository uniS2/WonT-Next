import { Session } from "@supabase/supabase-js";
import { create } from "zustand";

interface UserSessionState {
  userSession: Session | null;
  setUserSession: (data: { session: Session | null }) => void;
}

interface UserSessionIdState {
  userSessionId: string | undefined;
  // setUserSessionId: (data: { session: { user: { id: string } } }) => void;
  setUserSessionId: (data: string | undefined) => void;
}

export const useSessionStore = create<UserSessionState>((set) => ({
  userSession: null,
  setUserSession: (data) => set({ userSession: data.session }),
}));

export const useUserSessionIdStore = create<UserSessionIdState>((set) => ({
  userSessionId: undefined,
  // setUserSessionId: (data: { session: { user: { id: string } } }) =>
  //   set({ userSessionId: data.session?.user?.id }),
  setUserSessionId: (data) => set({ userSessionId: data }),
}));
