import globalStyles from '@/themes/globalStyles';
import React from 'react';
import { View } from 'react-native';
import { StageCustomWriting } from './components';

const StageCustomWritingScreen = () => {
  return (
    <View
      style={[
        globalStyles.defaultFlexContainer,
        globalStyles.defaultBackgroundColor,
      ]}
    >
      <StageCustomWriting />
    </View>
  );
};

export default StageCustomWritingScreen;
