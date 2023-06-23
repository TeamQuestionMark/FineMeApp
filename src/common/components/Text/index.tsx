import { TEXT_COLORS } from '@/themes/colors';
import { getTypography } from '@/themes/typography';
import React from 'react';

import { Text as NativeText } from 'react-native';
import { TextProps } from './type';

/**
 * @component
 * 텍스트

 * @example
 * <Text
 *   fontSize="16"                        // required
 *   fontWeight="medium"                  // required
 *   color={TEXT_COLORS.textPrimary}      // required
 *   isVerticalScale={false}              // optional
 *   textAlign="center"                   // optional
 * >
 *   Text
 * </Text>
 */

const Text = ({
  fontSize,
  fontWeight = 'Regular',
  color = TEXT_COLORS.textPrimary,
  numberOfLines,
  letterSpacing,
  textAlign,
  textDecorationLine,
  textDecorationStyle,
  textDecorationColor,
  textShadowColor,
  textShadowOffset,
  textShadowRadius,
  textTransform,
  flexShrink,
  children,
  ...props
}: React.PropsWithChildren<TextProps>) => (
  <NativeText
    style={[
      {
        color,
        letterSpacing,
        textAlign,
        textDecorationLine,
        textDecorationStyle,
        textDecorationColor,
        textShadowColor,
        textShadowOffset,
        textShadowRadius,
        textTransform,
        flexShrink,
      },
      getTypography({
        fontSize,
        fontWeight,
        isFontTypeEnglish: false,
      }),
    ]}
    numberOfLines={numberOfLines}
    {...props}
  >
    {children}
  </NativeText>
);

export default Text;
