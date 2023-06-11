import React from 'react';
import { View } from 'react-native';

import Text from '@/common/components/Text';
import { TEXT_COLORS } from '@/themes/colors';

const LoginScreen = () => {
  return (
    <View>
      <Text
        typography="body1"
        fontWeight="medium"
        color={TEXT_COLORS.textPrimary}
        isFontTypeEnglish={false}
      >
        로그인 페이지
      </Text>
    </View>
  );
};

export default LoginScreen;
