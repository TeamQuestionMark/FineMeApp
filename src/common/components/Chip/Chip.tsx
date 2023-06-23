import { COLORS } from '@/themes/colors';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { TextProps } from '../Text/type';
import Text from '../Text';
import { PropsWithChildren, useCallback } from 'react';

interface ChipProps extends PropsWithChildren {
  isChecked: boolean;
  children: string;
  onPress: (value: string, e?: GestureResponderEvent) => void;
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 36,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: COLORS.gray300,
    paddingHorizontal: 16,
    paddingVertical: 8,
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

const Chip = ({ onPress, isChecked, children }: ChipProps) => {
  const handlePress = useCallback(
    (e: GestureResponderEvent) => {
      onPress(children, e);
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
