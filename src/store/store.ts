import { useToastStore } from './toast';
import { useUserStore } from './user';

const zustandStore = [
  { name: 'toast', zustand: useToastStore },
  { name: 'user', zustand: useUserStore },
];

export { zustandStore };
