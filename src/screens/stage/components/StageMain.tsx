import React from 'react';
import { Divider } from '@/common/components/Divider';
import { ScrollView, View } from 'react-native';

import Text from '@/common/components/Text';
import { COLORS } from '@/themes/colors';
import { ScaledSheet } from '@/utils/scale';
import StageMainSelector from './StageMain/StageMainSelector';
import StageMainCustomSection from './StageMain/StageMainCustomSection';
import StageMainAddButton from './StageMain/StageMainAddButton';
import { useUserStore } from '@/store/user';
import { AlarmHeader } from '@/common/components/Header';

const styles = ScaledSheet.create({
  padding: {
    paddingHorizontal: '20@s',
  },
});

const StageMain = () => {
  const { user } = useUserStore();

  return (
    <View>
      <ScrollView>
        <Divider vertical={25} />
        <AlarmHeader />
        <Divider vertical={25} />
        <View style={styles.padding}>
          {user?.nickname && (
            <Text fontSize="24" fontWeight="extraBold" color={COLORS.black}>
              {`${user.nickname}님`}
            </Text>
          )}
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
