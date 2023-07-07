import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { map } from 'lodash';

import { LANDING_STACK_SCREEN_LIST } from '@/screens/constants';

import { RootStackParamList } from './types';
import { Stack } from './RootStack';

const LandingStack = () => {
  //TODO: 추후 코드푸시 업데이트 적용
  const isUpdateAvailable = false;

  return (
    <Stack.Navigator initialRouteName={isUpdateAvailable ? 'Update' : 'Login'}>
      {map(LANDING_STACK_SCREEN_LIST, screen => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{ headerShown: false }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default LandingStack;
