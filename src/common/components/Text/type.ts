import type {
  TextProps as NativeTextProps,
  TextStyle,
  FlexStyle,
} from 'react-native';

import { GetTypography } from '@/themes/typography';


export interface TextProps
  extends Omit<GetTypography, 'fontSizeWeight'>,
    NativeTextProps,
    Omit<TextStyle, 'fontWeight'>,
    Pick<FlexStyle, 'flexShrink'> {}
