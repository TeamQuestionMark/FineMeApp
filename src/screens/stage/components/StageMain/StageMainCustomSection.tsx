import { Divider } from '@/common/components/Divider';
import Text from '@/common/components/Text';
import { COLORS } from '@/themes/colors';
import { ScaledSheet } from '@/utils/scale';
import React from 'react';
import { View } from 'react-native';
import StageMainEmptyCustomCard from './StageMainEmptyCustomCard';
import StageMainCustomCard from './StageMainCustomCard';

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: '20@s',
  },
});

const StageMainCustomSection = () => {
  return (
    <View style={styles.container}>
      <Text fontSize="24" fontWeight="bold" color={COLORS.black}>
        커스텀 스테이지
      </Text>
      <Divider vertical={20} />
      <StageMainEmptyCustomCard />
      <Divider vertical={20} />
      <StageMainCustomCard
        title="?????????????????????????????"
        createdAt={new Date()}
        category="머임"
      />
      <Divider vertical={40} />
    </View>
  );
};

export default StageMainCustomSection;
