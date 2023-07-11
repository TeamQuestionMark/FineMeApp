import React from 'react';
import { View } from 'react-native';

import { StageMain } from './components';
import globalStyles from '@/themes/globalStyles';

const StageScreen = () => {
  return (
    <View
      style={[
        globalStyles.defaultFlexContainer,
        globalStyles.defaultBackgroundColor,
      ]}
    >
      <StageMain />
    </View>
  );
};

export default StageScreen;
