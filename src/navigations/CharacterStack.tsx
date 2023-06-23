import React from 'react';

import { map } from 'lodash';
import { CHARACTER_STACK_SCREEN_LIST } from '@/screens/constants';
import { Stack } from './RootStack';

const CharacterStack = () => {
  return (
    <Stack.Navigator>
      {map(CHARACTER_STACK_SCREEN_LIST, screen => {
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

export default CharacterStack;
