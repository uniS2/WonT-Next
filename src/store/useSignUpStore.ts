import { create } from "zustand";

interface SignUpState {
  email: string;
  password: string;
  confirmPassword: string;
}

interface SignUpStore extends SignUpState {
  setSignUp: (newData: Partial<SignUpState>) => void;
}

const useSignUpStore = create<SignUpStore>((set) => ({
  email: "",
  password: "",
  confirmPassword: "",
  setSignUp: (newData) => set((state) => ({ ...state, ...newData })),
}));

export default useSignUpStore;
