import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';

export type LandingStackParamList = {
  Landing: undefined;
  Update: undefined;
  Login: undefined;
};

export type MyPageParamList = {
  MyPage: undefined;
};

export type StageParamList = {
  Stage: undefined;
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
  CharacterParamList;

export type ScreenList<StackParamList extends ParamListBase> = {
  name: keyof StackParamList;
  component: (
    props: NativeStackScreenProps<StackParamList, keyof StackParamList>,
  ) => JSX.Element;
}[];

export type TabRouteProps = {
  name: keyof RootStackParamList;
}