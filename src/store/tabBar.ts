import { create } from 'zustand';

interface TabBarStore {
  isVisible: boolean;
  hide: () => void;
  show: () => void;
}

export const useTabBarStore = create<TabBarStore>()(set => ({
  isVisible: true,
  hide: () => set({ isVisible: false }),
  show: () => set({ isVisible: true }),
}));
