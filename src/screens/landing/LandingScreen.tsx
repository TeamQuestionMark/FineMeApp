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
import OXButtonGroup from '@/common/components/OXButtonGroup/OXButtonGroup';
import TextField from '@/common/components/TextField/TextField';
import Validator from '@/utils/Validator';
import CheckBox from '@/common/components/CheckBox/CheckBox';
import { Accordion } from '@/common/components/Accordion';
import { Menu } from '@/common/components/Menu';

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

const validator = new Validator().required().max(5);
const LandingScreen = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [chipInputs, setChipInputs] = useState(CHIP_INPUTS);
  const [text, setText] = useState('');

  const handlePressChip = (value: string) => {
    setChipInputs(prev => ({
      ...prev,
      [value]: !prev[value as keyof typeof CHIP_INPUTS],
    }));
  };

  return (
    <View style={styles.container}>
      <Text fontSize="28" fontWeight="Regular" color={TEXT_COLORS.textPrimary}>
        랜딩 페이지
      </Text>
      <Accordion title="테스트" description="테스트" />
      <Menu title="메뉴이동" onPress={() => {}} />
      <TextField
        label="이름"
        onInput={setText}
        validator={validator}
        placeholder="이름을 입력해주세요"
      />
      <TextField
        placeholder="이름을 입력해주세요"
        onInput={setText}
        editable={false}
      />
      <ChipGroup>
        {Object.entries(chipInputs).map(([label, isChecked]) => (
          <Chip key={label} onPress={handlePressChip} isChecked={isChecked}>
            {label}
          </Chip>
        ))}
      </ChipGroup>
      <OXButtonGroup
        onChange={value => {
          console.log('🔸 → LandingScreen → value:', value);
          return;
        }}
      />
      <CheckBox
        onPress={() => setIsClicked(prev => !prev)}
        isClicked={isClicked}
      />
      <CheckBox
        onPress={() => setIsClicked(prev => !prev)}
        isClicked={!isClicked}
      />
      <CheckBox
        onPress={() => setIsClicked(prev => !prev)}
        isClicked={isClicked}
        disabled
      />
      <CheckBox
        onPress={() => setIsClicked(prev => !prev)}
        isClicked={!isClicked}
        disabled
      />
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
