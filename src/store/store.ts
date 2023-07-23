import { useCustomStageStore } from './customStage';
import { useToastStore } from './toast';
import { useUserStore } from './user';

const zustandStore = [
  { name: 'toast', zustand: useToastStore },
  { name: 'user', zustand: useUserStore },
  { name: 'customStageStore', zustand: useCustomStageStore },
];

export { zustandStore };
