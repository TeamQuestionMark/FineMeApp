import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from './types';
import { BOTTOM_TAB } from '@/screens/constants';
import StageStack from './StageStack';
import CharacterStack from './CharacterStack';
import MyPageStack from './MyPageStack';
import TabBar from './Tab/TabBar';

const Tab = createBottomTabNavigator<RootStackParamList>();

const TabNavigation = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name={BOTTOM_TAB.STAGE_TAB} component={StageStack} />
      <Tab.Screen name={BOTTOM_TAB.CHARACTER_TAB} component={CharacterStack} />
      <Tab.Screen name={BOTTOM_TAB.MY_PAGE_TAB} component={MyPageStack} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
