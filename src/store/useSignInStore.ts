import create from "zustand";

interface SignInState {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

const useSignInStore = create<SignInState>((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (value) => set({ isAuthenticated: value }),
}));

export default useSignInStore;
