import React, { useState } from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';

import { COLORS } from '@/themes/colors';
import globalStyles from '@/themes/globalStyles';
import { ScaledSheet } from '@/utils/scale';
import Text from '../Text';

import CircleArrowRight from '@/assets/icons/CircleArrow/icon-circle-right.png';
import FastImage from 'react-native-fast-image';
import { Divider } from '../Divider';

/**
 * @component
 * 메뉴

 * @example
 * <Menu
 *   title="테스트"                               // required
 *   description="테스트"                         // required
 * />
 */

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    paddingVertical: '17@vs',
    paddingLeft: '20@s',
    paddingRight: '17@s',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: COLORS.gray900,
  },
  icon: {
    width: '34@s',
    height: '36@s',
  },
  innerContainer: {
    width: '100%',
  },
});

interface MenuProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const Menu = ({ title, onPress, style }: MenuProps) => {
  return (
    <View style={[globalStyles.alignCenter, styles.container, style]}>
      <TouchableOpacity
        style={[
          styles.innerContainer,
          globalStyles.rowAlignCenterContainer,
          globalStyles.justifySpaceBetween,
        ]}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Text fontSize="16" fontWeight="bold" color={COLORS.black}>
          {title}
        </Text>
        <FastImage style={styles.icon} source={CircleArrowRight} />
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
