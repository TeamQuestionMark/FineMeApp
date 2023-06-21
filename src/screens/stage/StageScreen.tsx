import React from 'react';
import { View } from 'react-native';

import CustomText from '@/common/components/Text/index';
import { COLORS } from '@/themes/colors';

const StageScreen = () => {
  return (
    <View>
      <CustomText fontSize="28" fontWeight="Regular" color={COLORS.gray800}>
        StageScreen
      </CustomText>
    </View>
  );
};

export default StageScreen;
