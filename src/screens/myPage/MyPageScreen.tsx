import React from 'react';
import { View } from 'react-native';

import CustomText from '@/common/components/Text/index';
import { COLORS } from '@/themes/colors';

const MyPageScreen = () => {
  return (
    <View>
      <CustomText fontSize="28" fontWeight="Regular" color={COLORS.gray800}>
        MyPageScreen
      </CustomText>
    </View>
  );
};

export default MyPageScreen;
