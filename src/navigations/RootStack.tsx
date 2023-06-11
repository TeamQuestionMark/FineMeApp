import React, { Suspense } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import LandingStack from './LandingStack';
import Spinner from '@/common/components/Spinner/Spinner';
import CodePush from 'react-native-code-push';
import globalStyles from '@/themes/globalStyles';

const RootStack = () => {
  return (
    <SafeAreaView
      style={[
        globalStyles.defaultFlexContainer,
        globalStyles.defaultBackgroundColor,
      ]}
    >
      <Suspense fallback={<Spinner />}>
        <LandingStack />
      </Suspense>
    </SafeAreaView>
  );
};

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.MANUAL,
})(RootStack);
