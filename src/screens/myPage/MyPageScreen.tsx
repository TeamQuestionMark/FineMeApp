import React from 'react';
import { View } from 'react-native';

import CustomText from '@/common/components/Text/index';
import { COLORS } from '@/themes/colors';
import { useNavigation } from '@react-navigation/native';
import { MyPageParamList } from '@/navigations/types';
import { StackNavigationProp } from '@react-navigation/stack';

const MyPageScreen = () => {
  const navigation = useNavigation<StackNavigationProp<MyPageParamList>>();
  return (
    <View>
      <CustomText fontSize="28" onPress={() => navigation.navigate('Setting')}>
        설정으로 이동
      </CustomText>
      <CustomText fontSize="28" fontWeight="Regular" color={COLORS.gray800}>
        MyPageScreen
      </CustomText>
    </View>
  );
};

export default MyPageScreen;
