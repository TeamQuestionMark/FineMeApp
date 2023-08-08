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
import SplashScreen from 'react-native-splash-screen';
import { registerFcmToken } from '@/utils/fcm/requests';
import { useToastStore } from '@/store/toast';
import { SnackBar } from '@/common/components/SnackBar';

export const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  const { getUser, user, reset } = useUserStore();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isUserLogin, setIsUserLogin] = useState(false);

  const { toastMessage, isToastVisible, onCloseSnackbar } = useToastStore(
    state => ({
      toastMessage: state.message,
      isToastVisible: state.isVisible,
      onCloseSnackbar: state.close,
      setToast: state.setToast,
    }),
  );

  useEffect(() => {
    getUser()
      .then(() => setIsUserLogin(true))
      .catch(reset)
      .finally(() => setIsSuccess(true));
  }, [getUser, reset]);

  useEffect(() => {
    if (user) registerFcmToken();
  }, [user]);

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

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
          {isUserLogin && user?.birth && user?.gender ? (
            <TabNavigation />
          ) : (
            <LandingStack />
          )}
        </Suspense>
      )}
      {isToastVisible && (
        <SnackBar message={toastMessage} onClose={onCloseSnackbar} />
      )}
    </SafeAreaView>
  );
};

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.MANUAL,
})(RootStack);
