import { create } from 'zustand';

interface ToastStore {
  message: string;
  isVisible: boolean;
  setToast: (message: string) => void;
  close: () => void;
}

export const useToastStore = create<ToastStore>()(set => ({
  message: '',
  isVisible: false,
  setToast: message => set(() => ({ message, isVisible: true })),
  close: () => set(() => ({ message: '', isVisible: false })),
}));
