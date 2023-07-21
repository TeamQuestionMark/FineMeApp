import React from 'react';
import { View } from 'react-native';

import CustomText from '@/common/components/Text/index';
import { COLORS } from '@/themes/colors';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '@/navigations/types';

const MyPageScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <View>
      <CustomText
        fontSize="28"
        onPress={() => navigation.navigate('Result', { uuid: 'uuid' })}
      >
        결과 페이지로 이동
      </CustomText>
      <CustomText fontSize="28" fontWeight="Regular" color={COLORS.gray800}>
        MyPageScreen
      </CustomText>
    </View>
  );
};

export default MyPageScreen;
