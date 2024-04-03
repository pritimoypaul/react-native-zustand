import { create } from "zustand";

export const useStore = create((set) => ({
  count: 1,
  setCount: (newVal) => set((state) => ({ count: newVal })),
}));
