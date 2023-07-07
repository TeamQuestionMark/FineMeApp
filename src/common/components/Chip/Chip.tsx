import { COLORS } from '@/themes/colors';
import {
  GestureResponderEvent,
  TouchableOpacity,
} from 'react-native';
import { TextProps } from '../Text/type';
import Text from '../Text';
import { PropsWithChildren, useCallback } from 'react';
import { ScaledSheet } from '@/utils/scale';

interface ChipProps extends PropsWithChildren {
  isChecked: boolean;
  value?: string;
  children: string;
  onPress: (value: string, e?: GestureResponderEvent) => void;
}

const styles = ScaledSheet.create({
  base: {
    borderRadius: '36@s',
    borderWidth: '2@s',
    borderColor: COLORS.gray300,
    paddingHorizontal: '16@s',
    paddingVertical: '8@vs',
    backgroundColor: COLORS.gray50,
    alignSelf: 'flex-start',
  },
  checked: {
    borderColor: COLORS.brandColor500,
    backgroundColor: COLORS.brandColor300,
  },
});

const textProps: Record<'base' | 'checked', TextProps> = {
  base: {
    fontSize: '14',
    fontWeight: 'Regular',
    color: COLORS.gray600,
  },
  checked: {
    fontSize: '14',
    fontWeight: 'Regular',
    color: COLORS.brandColor800,
  },
};

const Chip = ({ onPress, isChecked, children, value }: ChipProps) => {
  const handlePress = useCallback(
    (e: GestureResponderEvent) => {
      onPress(value || children, e);
    },
    [children],
  );

  return (
    <TouchableOpacity
      style={[styles.base, isChecked ? styles.checked : undefined]}
      onPress={handlePress}
    >
      <Text {...(isChecked ? textProps.checked : textProps.base)}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Chip;
