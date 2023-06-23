import React from 'react';
import { View } from 'react-native';

import { COLORS } from '@/themes/colors';
import { s, vs } from '@/utils/scale';

/**
 * @component
 * Divider

 * @example
 * <Divider
 *   horizontal={10}                                // optional
 *   height={0}                                     // optional
 *   backgroundColor={TEXT_COLORS.textPrimary}      // optional
 * />
 */

const Divider = ({
  horizontal = 0,
  vertical = 0,
  backgroundColor = COLORS.white,
}: {
  horizontal?: number | string;
  vertical?: number | string;
  backgroundColor?: string;
}) => {
  return (
    <View
      style={[
        {
          width: horizontal === '100%' ? horizontal : s(horizontal as number),
          height: vertical === '100%' ? horizontal : vs(vertical as number),
          backgroundColor: backgroundColor,
        },
      ]}
    />
  );
};

export default Divider;
