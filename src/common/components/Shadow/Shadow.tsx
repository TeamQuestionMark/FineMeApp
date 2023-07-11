import React, { ReactNode } from 'react';
import { Shadow } from 'react-native-shadow-2';
import { COLORS } from '@/themes/colors';

const CustomShadow = ({ children }: { children: ReactNode }) => {
  return (
    <Shadow
      distance={1}
      startColor={COLORS.black}
      endColor={COLORS.black}
      paintInside={true}
      safeRender
      offset={[4, 4]}
      style={{ borderRadius: 20 }}
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
