import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { map } from 'lodash';
import { CHARACTER_STACK_SCREEN_LIST } from '@/screens/constants';

const Stack = createNativeStackNavigator<RootStackParamList>();

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
