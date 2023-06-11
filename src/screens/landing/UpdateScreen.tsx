import React from 'react';
import { View } from 'react-native';

import Text from '@/common/components/Text';
import { TEXT_COLORS } from '@/themes/colors';

const UpdateScreen = () => {
  return (
    <View>
      <Text
        typography="body1"
        fontWeight="medium"
        color={TEXT_COLORS.textPrimary}
        isFontTypeEnglish={false}
      >
        업데이트 페이지
      </Text>
    </View>
  );
};

export default UpdateScreen;
