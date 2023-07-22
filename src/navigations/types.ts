import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {
  CompositeNavigationProp,
  ParamListBase,
} from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type LandingStackParamList = {
  Landing: undefined;
  Update: undefined;
  Login: undefined;
  EditProfile: undefined;
};

export type MyPageParamList = {
  MyPage: undefined;
  Notification: undefined;
  Result: { uuid: string };
  SettingPage: undefined;
};

export type SettingParamList = {
  Setting: undefined;
  Account: undefined;
  PrivacyPolicy: undefined;
  ServiceInfo: undefined;
  Terms: undefined;
  Notification: undefined;
};

export type StageParamList = {
  Stage: undefined;
  StagePreview: { stageId: number; stageName: string };
  StageCustomWriting: undefined;
  Notification: undefined;
  Setting: undefined;
};

export type CharacterParamList = {
  Character: undefined;
};

export type TabStackParamsList = {
  MyPageTab: undefined;
  StageTab: undefined;
  CharacterTab: undefined;
};

export type RootStackParamList = TabStackParamsList &
  LandingStackParamList &
  MyPageParamList &
  StageParamList &
  CharacterParamList &
  SettingParamList;

export type ScreenList<StackParamList extends ParamListBase> = {
  name: keyof StackParamList;
  component: (
    props: NativeStackScreenProps<StackParamList, keyof StackParamList>,
  ) => JSX.Element;
}[];

export type TabRouteProps = {
  name: keyof RootStackParamList;
};

export type NavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamsList>,
  NativeStackNavigationProp<RootStackParamList>
>;
