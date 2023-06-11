import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';

export type LandingStackParamList = {
  Landing: undefined;
  Update: undefined;
  Login: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
};

export type RootStackParamList = LandingStackParamList & HomeStackParamList;

export type ScreenList<StackParamList extends ParamListBase> = {
  name: keyof StackParamList;
  component: (
    props: NativeStackScreenProps<StackParamList, keyof StackParamList>,
  ) => JSX.Element;
}[];
