import React from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';
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
    ...globalStyles.justifyCenter,
    ...globalStyles.alignCenter,
  },

  solid: {
    borderColor: COLORS.black,
    backgroundColor: COLORS.brandColor400,
  },
  'solid:pressed': {
    backgroundColor: COLORS.brandColor600,
  },
  'solid:disabled': {
    borderColor: COLORS.gray300,
    backgroundColor: COLORS.gray100,
  },

  outlined: {
    borderColor: COLORS.brandColor700,
    backgroundColor: COLORS.white,
  },
  'outlined:pressed': {
    backgroundColor: COLORS.brandColor50,
  },
  'outlined:disabled': {
    borderColor: COLORS.gray300,
    backgroundColor: COLORS.gray50,
  },
});

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'outlined' | 'solid';
  width: number | string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

const Button = ({
  title,
  onPress,
  variant = 'solid',
  width,
  disabled = false,
  style,
}: ButtonProps) => {
  const isSolid = variant === 'solid';
  const textColor = isSolid ? COLORS.black : COLORS.brandColor700;

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        { width: typeof width === 'string' ? width : s(width) },
        styles[variant],
        pressed && styles[`${variant}:pressed`],
        disabled && styles[`${variant}:disabled`],
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        fontSize="16"
        fontWeight="bold"
        color={disabled ? COLORS.gray300 : textColor}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;
