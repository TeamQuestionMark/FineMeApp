import React from 'react';

import { map } from 'lodash';

import { LANDING_STACK_SCREEN_LIST } from '@/screens/constants';

import { Stack } from './RootStack';
import { useCodePushVersionStore } from '@/store/codePushVersionStore';

const LandingStack = () => {
  const { isUpdateAvailable } = useCodePushVersionStore();

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
