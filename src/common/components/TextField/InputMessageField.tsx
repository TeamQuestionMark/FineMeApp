import { ScaledSheet, s } from '@/utils/scale';
import React, { forwardRef, useCallback, useMemo, useState } from 'react';

import {
  NativeSyntheticEvent,
  Pressable,
  ScrollView,
  TextInput,
  TextInputFocusEventData,
  View,
} from 'react-native';
import { InputMessageFieldProps } from './type';
import { getTypography } from '@/themes/typography';
import { Divider } from '../Divider';
import Text from '../Text';
import { isIOS } from '@/utils/device';
import { COLORS } from '@/themes/colors';
import { InputEventProps } from '@/types/event';

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: '14@s',
    paddingVertical: '14@vs',
    borderWidth: 2,
    borderRadius: 10,
  },
  inner: {
    justifyContent: 'space-between',
    padding: 2,
  },
  input: {
    height: '104@vs',
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderRadius: 4,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textAlignRight: {
    alignItems: 'flex-end',
  },
  tooltipContainer: {
    flexGrow: 1,
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

/**
 * @component
 * multiline input 컴포넌트
 *
 * @example
 * <InputMessageField
 *   value="Value"                          // required
 *   width={width}                          // optional
 *   ref={ref}                              // optional
 *   label="Label"                          // optional
 *   supportingText="Supporting Text"       // optional
 *   disabled={false}                       // optional
 *   disableAccent={false}                  // optional
 *   hasError={false}                       // optional
 *   focused={false}                        // optional
 *   required={false}                       // optional
 *   editable={true}                        // optional
 *   tooltip={<Tooltip />}                  // optional
 *   maxLength={999}                        // optional
 * />
 */
const InputMessageField = forwardRef<TextInput, InputMessageFieldProps>(
  (
    {
      label,
      width,
      supportingText,
      value,
      disabled = false,
      disableAccent = false,
      focused = false,
      required = false,
      editable = true,
      hasError = false,
      tooltip,
      maxLength = 100,
      onInput,
      ...props
    },
    ref,
  ) => {
    const [isEditableTextInputFocused, setIsEditableTextInputFocused] =
      useState(false);

    const isFocused = useMemo(
      () => (editable && isEditableTextInputFocused) || (!editable && focused),
      [editable, focused, isEditableTextInputFocused],
    );

    const textColor = disabled || !editable ? COLORS.gray400 : COLORS.gray900;

    const borderColor = useMemo(() => {
      if (isFocused) {
        return styles.active;
      } else {
        return styles.default;
      }
    }, [isFocused]);

    const valueLength = value?.length || 0;

    const inputFontStyle = useMemo(
      () =>
        getTypography({
          fontSize: '14',
          fontWeight: 'Regular',
          isFontTypeEnglish: false,
        }),
      [],
    );

    const handleChangeInput = useCallback(
      (text: string) => {
        onInput(text);
      },
      [onInput],
    );

    const handleTextInputFocusEvent = useCallback(
      (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsEditableTextInputFocused(true);
        if (props.onFocus) {
          props.onFocus(event);
        }
      },
      [props],
    );

    const handleTextInputBlurEvent = useCallback(
      (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsEditableTextInputFocused(false);
        if (props.onBlur) {
          props.onBlur(event);
        }
      },
      [props],
    );

    const onStartShouldSetResponder = useCallback(() => true, []);

    return (
      <Pressable
        style={[
          width
            ? {
                width: typeof width === 'number' ? s(width) : width,
              }
            : {},
        ]}
        onPress={props.onPressIn}
      >
        {label && (
          <>
            <View style={styles.labelContainer}>
              <Text fontSize="14" fontWeight="bold" color={textColor}>
                {label}
              </Text>
            </View>
            <Divider vertical={4} />
          </>
        )}
        <View style={[styles.container, borderColor, ,]}>
          <View style={styles.inner}>
            {!editable || disabled || disableAccent ? (
              <ScrollView style={styles.input}>
                <View onStartShouldSetResponder={onStartShouldSetResponder}>
                  <Text fontSize="14" fontWeight="bold" color={textColor}>
                    {value}
                  </Text>
                </View>
              </ScrollView>
            ) : (
              <TextInput
                ref={ref}
                style={[
                  styles.input,
                  inputFontStyle,
                  isIOS && {
                    lineHeight: 0,
                  },
                  {
                    color: textColor,
                  },
                ]}
                value={value}
                textAlignVertical="top"
                editable={editable && !disabled && !disableAccent}
                placeholderTextColor={COLORS.gray400}
                multiline
                {...props}
                maxLength={maxLength}
                onFocus={handleTextInputFocusEvent}
                onBlur={handleTextInputBlurEvent}
                onChangeText={handleChangeInput}
              />
            )}
            <Divider vertical={8} />
            <View style={styles.textAlignRight}>
              <Text fontSize="14" fontWeight="bold" color={COLORS.gray400}>
                {`${valueLength}/${maxLength}`}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    );
  },
);

export default InputMessageField;
