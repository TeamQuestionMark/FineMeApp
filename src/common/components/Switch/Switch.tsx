import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';

import FastImage from 'react-native-fast-image';

import { ScaledSheet } from '@/utils/scale';
import SwitchDeselectedDisabled from '@/assets/icons/Switch/icon-switch-deselected-disabled.png';
import SwitchDeselectedEnabled from '@/assets/icons/Switch/icon-switch-deselected-enabled.png';
import SwitchSelectedDisabled from '@/assets/icons/Switch/icon-switch-selected-disabled.png';
import SwitchSelectedEnabled from '@/assets/icons/Switch/icon-switch-selected-enabled.png';

interface Switch {
  disabled?: boolean;
  isClicked: boolean;
  onPress: () => void;
}

const styles = ScaledSheet.create({
  imageContainer: {
    width: '41@s',
    height: '24@s',
  },
});

const Switch = ({ disabled = false, isClicked, onPress }: Switch) => {
  const switchImage = useMemo(() => {
    if (disabled) {
      if (isClicked) {
        return SwitchSelectedDisabled;
      } else {
        return SwitchDeselectedDisabled;
      }
    } else {
      if (isClicked) {
        return SwitchSelectedEnabled;
      } else {
        return SwitchDeselectedEnabled;
      }
    }
  }, [disabled, isClicked]);

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} activeOpacity={0.8}>
      <FastImage style={styles.imageContainer} source={switchImage} />
    </TouchableOpacity>
  );
};

export default Switch;
