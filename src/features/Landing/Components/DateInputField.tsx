import Text from '@/common/components/Text';
import { COLORS, TEXT_COLORS } from '@/themes/colors';
import { getSlashYYYYMMDD } from '@/utils/date';
import { ScaledSheet } from '@/utils/scale';
import { useEffect, useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';

interface DateInputFieldProps {
  onInput: (input: Date) => void;
}

const styles = ScaledSheet.create({
  input: {
    width: '100%',
    height: '39@vs',
    borderBottomWidth: '2@s',
  },
  default: {
    borderColor: '#D9D9D9',
  },
  active: {
    borderColor: COLORS.active100,
  },
});

type InputStatus = 'active' | 'default';

const DateInputField = ({ onInput }: DateInputFieldProps) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState<InputStatus>('default');

  useEffect(() => {
    if (open) setStatus('active');
    else setStatus('default');
  }, [open]);

  const handlePressInput = () => {
    console.log('1', 1);
    setOpen(true);
    if (!touched) {
      setTouched(true);
    }
  };

  return (
    <View>
      <DatePicker
        modal
        open={open}
        date={date}
        mode="date"
        onConfirm={date => {
          setOpen(false);
          setDate(date);
          onInput(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <TextInput
        editable={false}
        placeholderTextColor={TEXT_COLORS.textPlaceholder}
        placeholder="YYYY / MM / DD"
        style={[styles.input, styles[status]]}
        onPressIn={handlePressInput}
      >
        <Text fontSize="16">{!touched ? '' : getSlashYYYYMMDD(date)}</Text>
      </TextInput>
    </View>
  );
};

export default DateInputField;
