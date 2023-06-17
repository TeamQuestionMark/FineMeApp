import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';

import FastImage from 'react-native-fast-image';

import { ScaledSheet } from '@/utils/scale';
import RadioDeselectedDisabled from '@/assets/icons/Radio/icon-radio-deselected-disabled.png';
import RadioDeselectedEnabled from '@/assets/icons/Radio/icon-radio-deselected-enabled.png';
import RadioSelectedDisabled from '@/assets/icons/Radio/icon-radio-selected-disabled.png';
import RadioSelectedEnabled from '@/assets/icons/Radio/icon-radio-selected-enabled.png';

interface Radio {
  disabled?: boolean;
  isClicked: boolean;
  onPress: () => void;
}

const styles = ScaledSheet.create({
  imageContainer: {
    width: '20@s',
    height: '20@s',
  },
});

const Radio = ({ disabled = false, isClicked, onPress }: Radio) => {
  const radioImage = useMemo(() => {
    if (disabled) {
      if (isClicked) {
        return RadioSelectedDisabled;
      } else {
        return RadioDeselectedDisabled;
      }
    } else {
      if (isClicked) {
        return RadioSelectedEnabled;
      } else {
        return RadioDeselectedEnabled;
      }
    }
  }, []);

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} activeOpacity={0.8}>
      <FastImage style={styles.imageContainer} source={radioImage} />
    </TouchableOpacity>
  );
};

export default Radio;
