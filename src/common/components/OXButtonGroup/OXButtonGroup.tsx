import { COLORS } from '@/themes/colors';
import { TouchableOpacity, View } from 'react-native';
import { useCallback, useState } from 'react';
import IconOX from '@/assets/icons/OXButton/IconOX';
import { ScaledSheet } from '@/utils/scale';

interface OXButtonGroupProps {
  onChange?: (value: boolean) => void;
  disabled?: boolean;
}

const styles = ScaledSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: '10@s',
  },
  button: {
    borderRadius: '10@s',
    borderWidth: '1@s',
    borderStyle: 'solid',
    borderColor: COLORS.gray200,
    backgroundColor: COLORS.gray50,
    height: '52@vs',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    borderColor: COLORS.brandColor500,
    backgroundColor: COLORS.brandColor300,
  },
});

const OXButtonGroup = ({ onChange, disabled }: OXButtonGroupProps) => {
  const [checkedValue, setCheckedValue] = useState<'o' | 'x'>();
  const handlePress = useCallback(
    (value: 'o' | 'x') => {
      if (disabled) return;
      setCheckedValue(value);
      onChange && onChange(value === 'o');
    },
    [disabled, onChange],
  );

  return (
    <View style={styles.row}>
      <TouchableOpacity
        style={[styles.button, checkedValue === 'o' && styles.checked]}
        onPress={() => handlePress('o')}
        disabled={disabled}
      >
        <IconOX ox="o" checked={checkedValue === 'o'} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, checkedValue === 'x' && styles.checked]}
        onPress={() => handlePress('x')}
        disabled={disabled}
      >
        <IconOX ox="x" checked={checkedValue === 'x'} />
      </TouchableOpacity>
    </View>
  );
};

export default OXButtonGroup;
