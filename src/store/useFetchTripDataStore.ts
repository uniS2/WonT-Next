import { create } from "zustand";

type tripPlanType = {
  tripPlan: {
    accommondations: [];
    created_at: string;
    id: number;
    places: [];
    plan: [{}];
    region_name: string;
    user_email: string;
    user_id: string;
  };
};

interface FetchTripDataType {
  planData: any[] | null;
  setPlanData: (data: any[] | null) => void;
}

export const useFetchTripDataStore = create<FetchTripDataType>((set) => ({
  planData: [],
  setPlanData: (data) => set({ planData: data }),
}));
