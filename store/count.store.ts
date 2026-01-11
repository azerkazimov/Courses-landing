import { create } from "zustand";

interface CountStore {
  count: number;
  currentCount: number;
  autoIncrement: () => void;
  setCurrentCount: (count: number) => void;
}

export const useCountStore = create<CountStore>((set) => ({
  count: 0,
  currentCount: 0,
  autoIncrement: () => set((state) => ({ currentCount: state.currentCount + 1 })),
  setCurrentCount: (count: number) => set({ currentCount: count }),
}));