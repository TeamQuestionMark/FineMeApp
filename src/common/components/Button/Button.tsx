import React from 'react';
import { Pressable } from 'react-native';
import { COLORS } from '@/themes/colors';
import { ScaledSheet, s } from '@/utils/scale';
import globalStyles from '@/themes/globalStyles';
import Text from '../Text';

/**
 * @component
 * 버튼

 * @example
 * <Button
 *   title=""                                       // required
 *   variant="solid"                                // optional
 *   onPress={() => {}}                             // required
 *   width={100}                                    // optional
 *   disabled={false}                               // optional
 * />
 */

const styles = ScaledSheet.create({
  container: {
    height: '50@vs',
    borderRadius: 6,
    borderWidth: 2,
  },
});

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'outlined' | 'solid';
  width: number | string;
  disabled?: boolean;
}

const Button = ({
  title,
  onPress,
  variant = 'solid',
  width,
  disabled = false,
}: ButtonProps) => {
  const isSolid = variant === 'solid';

  const disabledSolidBackgroundColor = disabled
    ? COLORS.gray100
    : COLORS.brandColor600;
  const disabledOutlinedBackgroundColor = disabled
    ? COLORS.gray50
    : COLORS.brandColor50;

  return (
    <Pressable
      style={({ pressed }) => [
        globalStyles.justifyCenter,
        globalStyles.alignCenter,
        styles.container,
        { width: typeof width === 'string' ? width : s(width) },
        isSolid
          ? {
              borderColor: disabled ? COLORS.gray300 : COLORS.black,
              backgroundColor: pressed
                ? disabledSolidBackgroundColor
                : COLORS.brandColor400,
            }
          : {
              borderColor: disabled ? COLORS.gray300 : COLORS.brandColor700,
              backgroundColor: pressed
                ? disabledOutlinedBackgroundColor
                : COLORS.white,
            },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        fontSize="16"
        fontWeight="bold"
        color={isSolid ? COLORS.black : COLORS.brandColor700}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;
