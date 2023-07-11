import React from 'react';
import { IconStyleProps } from './types';
import { Path, Rect, Svg } from 'react-native-svg';
import { COLORS } from '@/themes/colors';

const Add = ({ size, color }: IconStyleProps) => (
  <Svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
    <Rect
      y={10.7368}
      width={24}
      height={1.89474}
      rx={0.947368}
      fill={color || COLORS.black}
    />
    <Rect
      x={13.2627}
      width={24}
      height={1.89474}
      rx={0.947368}
      transform="rotate(90, 13.2627, 0)"
      fill={color || COLORS.black}
    />
  </Svg>
);

export default Add;
