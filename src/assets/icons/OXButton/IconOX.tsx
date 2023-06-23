import React from 'react';
import Svg, { Circle, G, Path } from 'react-native-svg';
interface Props {
  ox: 'o' | 'x';
  checked: boolean;
}
export default function IconOX({ checked, ox }: Props) {
  const fill = checked ? '#FEDE46' : '#F7F7F7';
  const stroke = checked ? '#864B0D' : '#A4A4A4';
  return (
    <Svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      {(ox === 'o' && (
        <Circle
          id="Ellipse 82"
          cx="13"
          cy="13"
          r="12"
          fill={fill}
          stroke={stroke}
          stroke-width="2"
        />
      )) || (
        <G id="Group 129">
          <Path
            id="Vector 152"
            d="M1 1L22 22"
            stroke={stroke}
            stroke-width="2"
            stroke-linecap="round"
          />
          <Path
            id="Vector 153"
            d="M22 1L0.999999 22"
            stroke={stroke}
            stroke-width="2"
            stroke-linecap="round"
          />
        </G>
      )}
    </Svg>
  );
}

