import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { ScaledSheet } from '@/utils/scale';
import FastImage from 'react-native-fast-image';
import LargeLogoImage from '@/assets/icons/Logo/fineme-logo-large.png';
import SmallLogoImage from '@/assets/icons/Logo/fineme-logo-small.png';

type Size = 'small' | 'large';
interface LogoProps {
  size?: Size;
  style?: StyleProp<TextStyle>;
}

const styles = ScaledSheet.create({
  image: {
    small: {
      width: '107@s',
      height: '27@vs',
    },
    large: {
      width: '207@s',
      height: '54@s',
    },
  },
});

const Logo: React.FC<LogoProps> = ({ size = 'small', style }) => {
  return (
      <FastImage style={[styles.image[size], style]} source={size === 'small' ? SmallLogoImage : LargeLogoImage} />
  );
};

export default Logo;
