import {
  CharacterParamList,
  LandingStackParamList,
  MyPageParamList,
  RootStackParamList,
  ScreenList,
  SettingParamList,
  StageParamList,
} from '@/navigations/types';
import {
  EditProfileScreen,
  LandingScreen,
  LoginScreen,
  UpdateScreen,
} from './landing';
import { MyPageScreen, NotificationScreen, ResultScreen } from './myPage';
import {
  StageCustomWritingScreen,
  StageScreen,
  StagePreviewScreen,
} from './stage';
import {
  SettingScreen,
  AccountScreen,
  PrivacyPolicyScreen,
  ServiceInfoScreen,
  TermsScreen,
  EditNicknameScreen,
} from './setting';
import { CharacterScreen } from './character';

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
  {
    name: 'EditProfile',
    component: EditProfileScreen,
  },
];

export const MY_PAGE_STACK_SCREEN_LIST: ScreenList<MyPageParamList> = [
  {
    name: 'MyPage',
    component: MyPageScreen,
  },
  {
    name: 'Notification',
    component: NotificationScreen,
  },
  {
    name: 'Result',
    component: ResultScreen,
  },
];

export const SETTING_STACK_SCREEN_LIST: ScreenList<SettingParamList> = [
  {
    name: 'Setting',
    component: SettingScreen,
  },
  {
    name: 'Account',
    component: AccountScreen,
  },
  {
    name: 'PrivacyPolicy',
    component: PrivacyPolicyScreen,
  },
  {
    name: 'ServiceInfo',
    component: ServiceInfoScreen,
  },
  {
    name: 'Terms',
    component: TermsScreen,
  },
  {
    name: 'EditNickname',
    component: EditNicknameScreen,
  },
];

export const STAGE_STACK_SCREEN_LIST: ScreenList<StageParamList> = [
  {
    name: 'Stage',
    component: StageScreen,
  },
  {
    name: 'StagePreview',
    component: StagePreviewScreen,
  },
  {
    name: 'StageCustomWriting',
    component: StageCustomWritingScreen,
  },
  {
    name: 'Notification',
    component: NotificationScreen,
  },
];

export const CHARACTER_STACK_SCREEN_LIST: ScreenList<CharacterParamList> = [
  {
    name: 'Character',
    component: CharacterScreen,
  },
];

export const BOTTOM_TAB: {
  STAGE_TAB: keyof RootStackParamList;
  CHARACTER_TAB: keyof RootStackParamList;
  MY_PAGE_TAB: keyof RootStackParamList;
} = {
  STAGE_TAB: 'StageTab',
  CHARACTER_TAB: 'CharacterTab',
  MY_PAGE_TAB: 'MyPageTab',
};
