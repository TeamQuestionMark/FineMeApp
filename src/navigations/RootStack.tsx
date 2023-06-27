import React, { Suspense, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import CodePush from 'react-native-code-push';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import globalStyles from '@/themes/globalStyles';
import { setDefaultInterceptors } from '@/api/shared/interceptors';
import { mainAxios } from '@/api/shared/axios';
import { RootStackParamList } from './types';
import LandingStack from './LandingStack';
import Spinner from '@/common/components/Spinner/Spinner';
import TabNavigation from './TabNavigation';

export const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  useEffect(() => {
    setDefaultInterceptors(mainAxios);
  }, []);

  return (
    <SafeAreaView
      style={[
        globalStyles.defaultFlexContainer,
        globalStyles.defaultBackgroundColor,
      ]}
    >
      <Suspense fallback={<Spinner />}>
        <LandingStack />
        {/* <TabNavigation /> */}
      </Suspense>
    </SafeAreaView>
  );
};

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.MANUAL,
})(RootStack);
