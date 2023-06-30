import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';

import FastImage from 'react-native-fast-image';

import { ScaledSheet } from '@/utils/scale';
import CheckBoxDeselectedDisabled from '@/assets/icons/CheckBox/icon-checkbox-deselected-disabled.png';
import CheckBoxDeselectedEnabled from '@/assets/icons/CheckBox/icon-checkbox-deselected-enabled.png';
import CheckBoxSelectedDisabled from '@/assets/icons/CheckBox/icon-checkbox-selected-disabled.png';
import CheckBoxSelectedEnabled from '@/assets/icons/CheckBox/icon-checkbox-selected-enabled.png';

/**
 * @component
 * 체크박스

 * @example
 * <CheckBox
 *   disabled={false}                               // optional
 *   isClicked={false}                              // optional
 *   onPress={() => {}}                             // optional
 * />
 */

interface CheckBox {
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

const CheckBox = ({ disabled = false, isClicked, onPress }: CheckBox) => {
  const radioImage = useMemo(() => {
    if (disabled) {
      if (isClicked) {
        return CheckBoxSelectedDisabled;
      } else {
        return CheckBoxDeselectedDisabled;
      }
    } else {
      if (isClicked) {
        return CheckBoxSelectedEnabled;
      } else {
        return CheckBoxDeselectedEnabled;
      }
    }
  }, [disabled, isClicked]);

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} activeOpacity={0.8}>
      <FastImage style={styles.imageContainer} source={radioImage} />
    </TouchableOpacity>
  );
};

export default CheckBox;
