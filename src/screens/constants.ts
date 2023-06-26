import { CharacterParamList, LandingStackParamList, MyPageParamList, RootStackParamList, ScreenList, StageParamList } from '@/navigations/types';
import { CharacterScreen } from './charater';
import { LandingScreen, LoginScreen, UpdateScreen } from './landing';
import { MyPageScreen } from './myPage';
import { StageScreen } from './stage';

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

export const MY_PAGE_STACK_SCREEN_LIST: ScreenList<MyPageParamList> = [
  {
    name: "MyPage",
    component: MyPageScreen
  }
];

export const STAGE_STACK_SCREEN_LIST: ScreenList<StageParamList> = [
  {
    name: "Stage",
    component: StageScreen
  }
];

export const CHARACTER_STACK_SCREEN_LIST: ScreenList<CharacterParamList> = [
  {
    name: "Character",
    component: CharacterScreen
  }
];

export const BOTTOM_TAB: {
  STAGE_TAB: keyof RootStackParamList;
  CHARACTER_TAB: keyof RootStackParamList;
  MY_PAGE_TAB: keyof RootStackParamList;
} = {
  STAGE_TAB: "StageTab",
  CHARACTER_TAB: "CharacterTab",
  MY_PAGE_TAB: "MyPageTab"
};
