import React from 'react';
import { View } from 'react-native';

import Text from '@/common/components/Text';
import { TEXT_COLORS } from '@/themes/colors';
import globalStyles from '@/themes/globalStyles';
import { ScaledSheet } from '@/utils/scale';
import { AppleLoginButton } from '@/features/Landing/Components';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
});

const LandingScreen = () => {
  return (
    <View style={styles.container}>
      <Text
        typography="body1"
        fontWeight="medium"
        color={TEXT_COLORS.textPrimary}
        isFontTypeEnglish={false}
      >
        랜딩 페이지
      </Text>
      <AppleLoginButton />
    </View>
  );
};

export default LandingScreen;
