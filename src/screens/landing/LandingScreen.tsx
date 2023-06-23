import React, { useState } from 'react';
import { View } from 'react-native';

import Text from '@/common/components/Text';
import { TEXT_COLORS } from '@/themes/colors';
import { ScaledSheet } from '@/utils/scale';
import { AppleLoginButton } from '@/features/Landing/Components';
import { isIOS } from '@/utils/device';
import { Radio } from '@/common/components/Radio';
import Switch from '@/common/components/Switch/Switch';
import Chip from '@/common/components/Chip/Chip';
import ChipGroup from '@/common/components/Chip/ChipGroup';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
});

const CHIP_INPUTS = {
  아메리카노: false,
  이어폰: false,
  포스트잇: false,
  달력: false,
  사원증: false,
};

const LandingScreen = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [chipInputs, setChipInputs] = useState(CHIP_INPUTS);

  const handlePressChip = (value: string) => {
    setChipInputs(prev => ({
      ...prev,
      [value]: !prev[value as keyof typeof CHIP_INPUTS],
    }));
  };

  console.log('isClicked: ', isClicked);
  return (
    <View style={styles.container}>
      <Text fontSize="28" fontWeight="Regular" color={TEXT_COLORS.textPrimary}>
        랜딩 페이지
      </Text>
      <ChipGroup>
        {Object.entries(chipInputs).map(([label, isChecked]) => (
          <Chip
            onPress={handlePressChip}
            isChecked={isChecked}
          >
            {label}
          </Chip>
        ))}
      </ChipGroup>

      <Radio
        onPress={() => setIsClicked(prev => !prev)}
        isClicked={isClicked}
      />
      <Radio
        onPress={() => setIsClicked(prev => !prev)}
        isClicked={!isClicked}
      />
      <Radio
        onPress={() => setIsClicked(prev => !prev)}
        isClicked={isClicked}
        disabled
      />
      <Radio
        onPress={() => setIsClicked(prev => !prev)}
        isClicked={!isClicked}
        disabled
      />
      <Switch
        onPress={() => setIsClicked(prev => !prev)}
        isClicked={isClicked}
      />
      <Switch
        onPress={() => setIsClicked(prev => !prev)}
        isClicked={!isClicked}
      />
      <Switch
        onPress={() => setIsClicked(prev => !prev)}
        isClicked={isClicked}
        disabled
      />
      <Switch
        onPress={() => setIsClicked(prev => !prev)}
        isClicked={!isClicked}
        disabled
      />
      {isIOS && <AppleLoginButton />}
    </View>
  );
};

export default LandingScreen;
