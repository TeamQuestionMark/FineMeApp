import { Divider } from '@/common/components/Divider';
import Icon from '@/common/components/Icon/Icon';
import { CustomShadow } from '@/common/components/Shadow';
import Text from '@/common/components/Text';
import { COLORS } from '@/themes/colors';
import globalStyles from '@/themes/globalStyles';
import { ScaledSheet } from '@/utils/scale';
import React from 'react';
import { View } from 'react-native';

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: '55@s',
    paddingVertical: '41@vs',
    borderWidth: 2,
    borderColor: COLORS.black,
    borderRadius: 20,
    backgroundColor: COLORS.white,
  },
});

const StageMainEmptyCustomCard = () => {
  return (
    <CustomShadow>
      <View style={[globalStyles.alignCenter, styles.container]}>
        <Text
          textAlign="center"
          fontSize="14"
          fontWeight="Regular"
          color={COLORS.gray500}
        >
          커스텀 스테이지가 없습니다.
        </Text>
        <Text
          textAlign="center"
          fontSize="14"
          fontWeight="Regular"
          color={COLORS.gray500}
        >
          새로운 커스텀 스테이지를 만들어 보세요
        </Text>
      </View>
    </CustomShadow>
  );
};

export default StageMainEmptyCustomCard;
