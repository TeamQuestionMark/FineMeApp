import { FontSize, FontWeight } from '@/themes/typography';
import type {
  TextProps as NativeTextProps,
  TextStyle,
  FlexStyle,
} from 'react-native';

export interface TextProps extends NativeTextProps, 
    Omit<TextStyle, 'fontWeight'>, 
    Omit<TextStyle, "fontSize">,
    Pick<FlexStyle, 'flexShrink'> {
      fontWeight: FontWeight;
      fontSize: FontSize;
    }  
