import React from 'react';
import { IconStyleProps } from './types';
import { Rect, Svg } from 'react-native-svg';
import { COLORS } from '@/themes/colors';

const Hamburger = ({ size, color }: IconStyleProps) => (
  <Svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
    <Rect
      x={2}
      y={5}
      width={21}
      height={1.5}
      rx={0.75}
      fill={color || COLORS.black}
    />
    <Rect
      x={2}
      y={11}
      width={21}
      height={1.5}
      rx={0.75}
      fill={color || COLORS.black}
    />
    <Rect
      x={2}
      y={17}
      width={21}
      height={1.5}
      rx={0.75}
      fill={color || COLORS.black}
    />
  </Svg>
);

export default Hamburger;
