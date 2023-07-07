import React, { Suspense, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import CodePush from 'react-native-code-push';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import globalStyles from '@/themes/globalStyles';
import { RootStackParamList } from './types';
import LandingStack from './LandingStack';
import Spinner from '@/common/components/Spinner/Spinner';
import TabNavigation from './TabNavigation';
import { useUserStore } from '@/store/user';

export const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  const { getUser, user, reset } = useUserStore();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isUserLogin, setIsUserLogin] = useState(false);

  useEffect(() => {
    getUser()
      .catch(reset)
      .finally(() => setIsSuccess(true));
  }, [getUser, reset]);

  return (
    <SafeAreaView
      style={[
        globalStyles.defaultFlexContainer,
        globalStyles.defaultBackgroundColor,
      ]}
    >
      {!isSuccess && <Spinner />}
      {isSuccess && (
        <Suspense fallback={<Spinner />}>
          {user ? <TabNavigation /> : <LandingStack />}
        </Suspense>
      )}
    </SafeAreaView>
  );
};

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.MANUAL,
})(RootStack);
