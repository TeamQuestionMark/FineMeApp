import { COLORS, TEXT_COLORS } from '@/themes/colors';
import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputAndroidProps,
  TextInputFocusEventData,
  TextInputIOSProps,
  TextInputProps,
  View,
} from 'react-native';
import Validator from '../../../utils/Validator';
import Text from '../Text';
import { ScaledSheet } from '@/utils/scale';

const styles = ScaledSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: '10@s',
    width: '100%',
  },
  input: {
    width: '100%',
    height: '48@vs',
    paddingVertical: '14@vs',
    paddingHorizontal: '16@s',
    borderRadius: '10@s',
    borderWidth: '2@s',
    backgroundColor: COLORS.white,
  },
  default: {
    borderColor: COLORS.gray900,
  },
  error: {
    borderColor: COLORS.error100,
  },
  active: {
    borderColor: COLORS.active100,
  },
  disabled: {
    backgroundColor: COLORS.gray200,
  },
});

type TextFieldRef = Partial<TextInput> & {
  isValid: boolean;
  setIsValid: Dispatch<SetStateAction<boolean>>;
  validate: (text?: string) => Promise<boolean>;
};

type InputStatus = 'error' | 'active' | 'default' | 'disabled';

interface TextFieldProps
  extends TextInputProps,
    TextInputAndroidProps,
    TextInputIOSProps {
  onInput: (input: string) => void;
  validator?: Validator;
  label?: string;
}

const TextField = React.forwardRef<TextFieldRef, TextFieldProps>(
  ({ onInput, validator, label, ...textInputProps }, ref) => {
    const inputRef = useRef<TextInput>(null);
    const [status, setStatus] = useState<InputStatus>('default');
    const [touched, setTouched] = useState(false);
    const [isValid, setIsValid] = useState<boolean>(true);

    useImperativeHandle(ref, () => ({
      ...inputRef.current,
      setStatus,
      isValid,
      setIsValid,
      validate,
    }));

    useEffect(() => {
      if (textInputProps.editable === false) setStatus('disabled');
    }, [textInputProps.editable]);

    useEffect(() => {
      if (!isValid) setStatus('error');
    }, [isValid]);

    /** validator prop이 있을 경우 onChangeText, onBlur, onFocus 시 유효성 검증 및 status 업데이트 */
    const validate = useCallback(
      async (text?: string) => {
        const target = text || textInputProps.value;
        if (validator && target) {
          const isValid = await validator.validate(target);
          setIsValid(isValid);
          return isValid;
        }
        setIsValid(true);
        return true;
      },
      [textInputProps.value],
    );

    const handleChangeText = useCallback(
      async (text: string) => {
        validate(text).then(isValid => isValid && setStatus('active'));
        onInput(text);
      },
      [validate, isValid],
    );

    const handleBlur = useCallback(
      async (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        const text = e.nativeEvent.text;
        validate(text).then(isValid => isValid && setStatus('default'));
      },
      [validate],
    );

    const handleFocus = useCallback(
      async (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        if (touched) {
          const text = e.nativeEvent.text;
          validate(text).then(isValid => isValid && setStatus('active'));
        } else {
          setStatus('active');
          setTouched(true);
        }
      },
      [validate, touched],
    );

    return (
      <View style={styles.row}>
        {label && (
          <Text marginBottom={6} fontSize="16" fontWeight="bold">
            {label}
          </Text>
        )}
        <TextInput
          aria-label={label}
          placeholderTextColor={TEXT_COLORS.textPlaceholder}
          ref={inputRef}
          style={[styles.input, styles[status]]}
          onChangeText={handleChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...textInputProps}
        >
          <Text fontSize="14" />
        </TextInput>
      </View>
    );
  },
);

export default TextField;
