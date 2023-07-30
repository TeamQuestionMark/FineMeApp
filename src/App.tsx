import React, { Suspense } from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';

import { QueryClient, QueryClientProvider } from 'react-query';
import { RootStackParamList } from './navigations/types';
import Spinner from './common/components/Spinner/Spinner';
import RootStack from './navigations/RootStack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import globalStyles from './themes/globalStyles';
import useFcmHandler from './hooks/useFcmHandler';
import { queryClient } from './utils/queryClient';

export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();

function App(): JSX.Element {
  useFcmHandler();
  return (
    <Suspense fallback={<View />}>
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView style={globalStyles.defaultFlexContainer}>
          <SafeAreaProvider>
            <NavigationContainer ref={navigationRef} fallback={<Spinner />}>
              <RootStack />
            </NavigationContainer>
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
