import { CustomStageListItem } from '@/api/Question/type';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CustomStageStore {
  customStageLength: number;
  stageLists: CustomStageListItem[];
  setCustomStageLength: (length: number) => void;
  setStageLists: (items: CustomStageListItem[]) => void;
}

export const useCustomStageStore = create<CustomStageStore>()((set, get) => ({
  customStageLength: 0,
  stageLists: [],
  setCustomStageLength: length => set({ customStageLength: length }),
  setStageLists: lists => set({ stageLists: lists }),
}));
