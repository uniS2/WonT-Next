import { create } from "zustand";
import { ReviewDataTypes } from "@/types/ReviewDataTypes";

interface ReviewStoreState {
  reviewData: ReviewDataTypes[] | null;
  setReviewData: (data: ReviewDataTypes[]) => void;
}

export const useReviewStore = create<ReviewStoreState>((set) => ({
  reviewData: [],
  setReviewData: (data: ReviewDataTypes[]) => set({ reviewData: data }),
}));
