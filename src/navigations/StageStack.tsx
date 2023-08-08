import React from 'react';

import { map } from 'lodash';
import { STAGE_STACK_SCREEN_LIST } from '@/screens/constants';
import { Stack } from './RootStack';
import { useCodePushVersionStore } from '@/store/codePushVersionStore';

const StageStack = () => {
  const { isUpdateAvailable } = useCodePushVersionStore();

  return (
    <Stack.Navigator initialRouteName={isUpdateAvailable ? 'Update' : 'Stage'}>
      {map(STAGE_STACK_SCREEN_LIST, screen => {
        return (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={{ headerShown: false }}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default StageStack;
