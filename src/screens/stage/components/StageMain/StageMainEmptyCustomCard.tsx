import { Divider } from '@/common/components/Divider';
import Icon from '@/common/components/Icon/Icon';
import Text from '@/common/components/Text';
import { COLORS } from '@/themes/colors';
import globalStyles from '@/themes/globalStyles';
import { ScaledSheet } from '@/utils/scale';
import React from 'react';
import { View } from 'react-native';

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    paddingVertical: '20@vs',
    borderWidth: 1,
    borderRadius: 20,
  },
});

const StageMainEmptyCustomCard = () => {
  return (
    <View
      style={[
        globalStyles.alignCenter,
        globalStyles.justifyCenter,
        styles.container,
      ]}
    >
      <Text fontSize="20" fontWeight="Regular" color={COLORS.black}>
        나만의 질문지를 직접 만들어보세요!
      </Text>
      <Divider vertical={9} />
      <Icon icon="Add" size={24} />
    </View>
  );
};

export default StageMainEmptyCustomCard;
