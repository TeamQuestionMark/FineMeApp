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

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
});

const LandingScreen = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  console.log('isClicked: ', isClicked);
  return (
    <View style={styles.container}>
      <Text fontSize="28" fontWeight="Regular" color={TEXT_COLORS.textPrimary}>
        랜딩 페이지
      </Text>
      <Chip onPress={() => setIsClicked(prev => !prev)} isChecked={isClicked}>
        아메리카노
      </Chip>
      <Chip onPress={() => setIsClicked(prev => !prev)} isChecked={isClicked}>
        아메리카노
      </Chip>

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
