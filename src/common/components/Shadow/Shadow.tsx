import React, { ReactNode } from 'react';
import { Shadow } from 'react-native-shadow-2';
import { COLORS } from '@/themes/colors';
import { StyleProp, ViewStyle } from 'react-native';

const CustomShadow = ({
  children,
  borderRadius = 20,
  shadowColor = COLORS.black,
  style,
}: {
  children: ReactNode;
  borderRadius?: number;
  shadowColor?: string;
  style?: StyleProp<ViewStyle>;
}) => {
  return (
    <Shadow
      distance={1}
      startColor={shadowColor}
      endColor={shadowColor}
      paintInside={true}
      safeRender
      offset={[4, 4]}
      style={[{ borderRadius: borderRadius }, style]}
      sides={{
        bottom: true,
        end: true,
        start: false,
        top: false,
      }}
      corners={{
        bottomStart: true,
        bottomEnd: true,
        topEnd: true,
        topStart: false,
      }}
    >
      {children}
    </Shadow>
  );
};

export default CustomShadow;
