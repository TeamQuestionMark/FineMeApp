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
import useFCM from './hooks/useFCM';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      useErrorBoundary: true,
      cacheTime: 1000,
      staleTime: 1000,
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      retry: 0,
    },
  },
});

export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();

function App(): JSX.Element {
  useFCM();
  return (
    <Suspense fallback={<View />}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <NavigationContainer ref={navigationRef} fallback={<Spinner />}>
            <RootStack />
          </NavigationContainer>
        </SafeAreaProvider>
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
