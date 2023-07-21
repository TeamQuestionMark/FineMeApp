import React from 'react';

import { map } from 'lodash';
import {
  MY_PAGE_STACK_SCREEN_LIST,
  SETTING_STACK_SCREEN_LIST,
} from '@/screens/constants';
import { Stack } from './RootStack';

const MyPageStack = () => {
  return (
    <Stack.Navigator>
      {map(MY_PAGE_STACK_SCREEN_LIST, screen => {
        return (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={{ headerShown: false }}
          />
        );
      })}
      <Stack.Group>
        {map(SETTING_STACK_SCREEN_LIST, screen => {
          return (
            <Stack.Screen
              key={screen.name}
              name={screen.name}
              component={screen.component}
              options={{ headerShown: false }}
            />
          );
        })}
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MyPageStack;
