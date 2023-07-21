import { SettingParamList } from '@/navigations/types';

type SettingMenu = {
  title: string;
  screenName: keyof SettingParamList;
};
export const SETTING_MENU_LIST: SettingMenu[] = [
  {
    title: '계정 정보',
    screenName: 'Account',
  },
  {
    title: '알림함',
    screenName: 'Notification',
  },
  {
    title: '서비스 소개',
    screenName: 'ServiceInfo',
  },
  {
    title: '사용자 이용약관',
    screenName: 'Terms',
  },
  {
    title: '개인정보 처리방침',
    screenName: 'PrivacyPolicy',
  },
];
