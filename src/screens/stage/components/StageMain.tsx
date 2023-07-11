import React from 'react';
import { Divider } from '@/common/components/Divider';
import { ScrollView, View } from 'react-native';

import StageMainHeader from './StageMain/StageMainHeader';
import Text from '@/common/components/Text';
import { COLORS } from '@/themes/colors';
import { ScaledSheet } from '@/utils/scale';
import StageMainSelector from './StageMain/StageMainSelector';
import StageMainCustomSection from './StageMain/StageMainCustomSection';
import StageMainAddButton from './StageMain/StageMainAddButton';
import globalStyles from '@/themes/globalStyles';

const styles = ScaledSheet.create({
  padding: {
    paddingHorizontal: '20@s',
  },
});

const StageMain = () => {
  //TODO: 이름 수정
  const userName = '휘파람부는 파이니';

  return (
    <View>
      <ScrollView>
        <Divider vertical={25} />
        <StageMainHeader />
        <Divider vertical={25} />
        <View style={styles.padding}>
          <Text fontSize="24" fontWeight="extraBold" color={COLORS.black}>
            {`${userName}님`}
          </Text>
          <Text fontSize="24" fontWeight="extraBold" color={COLORS.black}>
            찾아보세요, 괜찮은 당신을
          </Text>
        </View>
        <Divider vertical={30} />
        <StageMainSelector />
        <Divider vertical={40} />
        <StageMainCustomSection />
      </ScrollView>
      <StageMainAddButton />
    </View>
  );
};

export default StageMain;
