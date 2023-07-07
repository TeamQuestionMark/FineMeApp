import React from 'react';
import { View } from 'react-native';

import CustomText from '@/common/components/Text/index';
import { COLORS } from '@/themes/colors';
import { useUserStore } from '@/store/user';
import Text from '@/common/components/Text/index';

const StageScreen = () => {
  const {reset} = useUserStore()
  return (
    <View>
      <Text fontSize='28' onPress={reset}>로그아웃</Text>
      <CustomText fontSize="28" fontWeight="Regular" color={COLORS.gray800}>
        StageScreen
      </CustomText>
    </View>
  );
};

export default StageScreen;
