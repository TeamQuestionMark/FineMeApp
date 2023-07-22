import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface ToastStore {
  message: string;
  isVisible: boolean;
  setToast: (message: string) => void;
  close: () => void;
}

export const useToastStore = create<ToastStore>()(
  devtools(set => ({
    message: '',
    isVisible: false,
    setToast: message => set(() => ({ message, isVisible: true })),
    close: () => set(() => ({ message: '', isVisible: false })),
  })),
);
