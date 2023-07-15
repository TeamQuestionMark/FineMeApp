import React from 'react';

import * as Icons from '@/assets/icons/svgIcons/index';
import { s } from '@/utils/scale';
import { COLORS } from '@/themes/colors';
import { IconStyleProps } from '@/assets/icons/svgIcons/types';
import { TouchableOpacity } from 'react-native';

/**
 * @component
 * 아이콘 컴포넌트

 * @example
 * <Icon
 *   icon="PayhereLogo"    // required
 *   size={10}             // required
 *   color={COLORS.gray900}  // optional
 * />
 */

interface IconProps extends IconStyleProps {
  icon: keyof typeof Icons;
  isPressable?: boolean;
  isLongPressable?: boolean;
  onPressIcon?: () => void;
}

const Icon = ({
  icon,
  size,
  color = COLORS.black,
  isPressable = false,
  isLongPressable = false,
  onPressIcon,
}: IconProps) => {
  const IconComponent = Icons[icon];

  if (isLongPressable) {
    return (
      <TouchableOpacity onLongPress={onPressIcon} activeOpacity={0.7}>
        <IconComponent size={s(size)} color={color} />
      </TouchableOpacity>
    );
  }

  return isPressable ? (
    <TouchableOpacity onPress={onPressIcon} activeOpacity={0.7}>
      <IconComponent size={s(size)} color={color} />
    </TouchableOpacity>
  ) : (
    <IconComponent size={s(size)} color={color} />
  );
};

export default Icon;
