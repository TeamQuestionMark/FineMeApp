import { LandingStackParamList, ScreenList } from '@/navigations/types';
import { LandingScreen, LoginScreen, UpdateScreen } from './landing';

export const LANDING_STACK_SCREEN_LIST: ScreenList<LandingStackParamList> = [
  {
    name: 'Update',
    component: UpdateScreen,
  },
  {
    name: 'Landing',
    component: LandingScreen,
  },
  {
    name: 'Login',
    component: LoginScreen,
  },
];
