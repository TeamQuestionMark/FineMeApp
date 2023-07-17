import React, { useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { filter, map } from 'lodash';
import { v4 as uuidv4 } from 'uuid';

import { CheckBox } from '@/common/components/CheckBox';
import globalStyles from '@/themes/globalStyles';
import { ScaledSheet } from '@/utils/scale';
import { CustomQuestionCardProps } from './type';
import {
  CustomStageQuestion,
  CustomStageQuestionType,
  MultipleChoicePropType,
} from '../../type';
import { Divider } from '@/common/components/Divider';
import Text from '@/common/components/Text';
import { COLORS } from '@/themes/colors';
import { Radio } from '@/common/components/Radio';
import { TextInput } from 'react-native-gesture-handler';
import Icon from '@/common/components/Icon/Icon';
import { getTypography } from '@/themes/typography';

const styles = ScaledSheet.create({
  container: {
    paddingLeft: '16@s',
  },
  optionContainer: {
    width: '100%',
    minHeight: '40@s',
    borderRadius: 10,
    paddingVertical: '10@vs',
    paddingLeft: '8@s',
    paddingRight: '14@s',
    backgroundColor: COLORS.gray50,
  },
  input: {
    width: '232@s',
    color: COLORS.gray900,
    padding: 0,
    margin: 0,
    ...getTypography({
      fontSize: '14',
      fontWeight: 'bold',
      isFontTypeEnglish: false,
    }),
  },
});

const CustomQuestionMultipleChoice = ({
  questionType,
  multipleChoiceList,
  externalKey,
  customQuestions,
  setCustomQuestions,
}: CustomQuestionCardProps) => {
  const choiceExternalKeyByUuid = uuidv4();
  const getModifiedValue = useCallback(
    (
      key: keyof CustomStageQuestion,
      value: string | MultipleChoicePropType[],
    ) => {
      return map(customQuestions, customQuestion => {
        if (customQuestion?.externalKey === externalKey) {
          return {
            ...customQuestion,
            [key]: value,
          };
        } else {
          return customQuestion;
        }
      });
    },
    [customQuestions],
  );

  const onChangeContents = useCallback(
    (text: string, innerExternalKey: string) => {
      const modifiedValue = map(customQuestions, customQuestion => {
        if (customQuestion.externalKey === externalKey) {
          const modifiedChoiceList = map(
            customQuestion.multipleChoiceList,
            listItem => {
              if (listItem.choiceExternalKey === innerExternalKey) {
                return {
                  ...listItem,
                  content: text,
                };
              } else {
                return listItem;
              }
            },
          );
          return {
            ...customQuestion,
            multipleChoiceList: modifiedChoiceList,
          };
        } else {
          return customQuestion;
        }
      });
      setCustomQuestions(modifiedValue);
    },
    [customQuestions],
  );

  const isClickedDuplication =
    questionType === CustomStageQuestionType.CHECK_BOX;

  const onChangeDuplication = useCallback(() => {
    const modifiedValue = getModifiedValue(
      'questionType',
      isClickedDuplication
        ? CustomStageQuestionType.RADIO
        : CustomStageQuestionType.CHECK_BOX,
    );

    setCustomQuestions(modifiedValue);
  }, [customQuestions]);

  const renderOptions = useMemo(
    () =>
      map(multipleChoiceList, (listItem, index) => {
        const isLastItem = multipleChoiceList?.length === index + 1;
        const isFullListItem = multipleChoiceList?.length === 5;

        const onPressIcon = () => {
          if (isLastItem && !isFullListItem) {
            const modifiedValue = getModifiedValue('multipleChoiceList', [
              ...multipleChoiceList,
              {
                content: '',
                choiceExternalKey: choiceExternalKeyByUuid,
              },
            ]);
            setCustomQuestions(modifiedValue);
          } else {
            const filteredValue = filter(
              multipleChoiceList,
              choiceListItem =>
                choiceListItem.choiceExternalKey !== listItem.choiceExternalKey,
            );
            const modifiedValue = getModifiedValue(
              'multipleChoiceList',
              filteredValue,
            );
            setCustomQuestions(modifiedValue);
          }
        };

        return (
          <View key={listItem.choiceExternalKey}>
            <View
              style={[
                styles.optionContainer,
                globalStyles.rowAlignCenterContainer,
                globalStyles.justifySpaceBetween,
              ]}
            >
              <View style={[globalStyles.rowAlignCenterContainer]}>
                {isClickedDuplication ? (
                  <CheckBox isClicked={false} onPress={() => {}} />
                ) : (
                  <Radio isClicked={false} onPress={() => {}} />
                )}
                <Divider horizontal={9} />
                <TextInput
                  style={styles.input}
                  placeholder={`옵션 ${index + 1}`}
                  value={listItem?.content}
                  onChangeText={text =>
                    onChangeContents(text, listItem?.choiceExternalKey)
                  }
                  multiline
                  maxLength={50}
                />
              </View>
              <Icon
                icon={isLastItem && !isFullListItem ? 'Add' : 'Close'}
                size={14}
                isPressable
                onPressIcon={onPressIcon}
              />
            </View>
            <Divider vertical={10} />
          </View>
        );
      }),
    [customQuestions, choiceExternalKeyByUuid],
  );

  return (
    <View style={styles.container}>
      <View style={[globalStyles.rowAlignCenterContainer]}>
        <CheckBox
          isClicked={isClickedDuplication}
          onPress={onChangeDuplication}
        />
        <Divider horizontal={9} />
        <Text fontSize="14" fontWeight="Regular" color={COLORS.black}>
          중복 선택하기
        </Text>
      </View>
      <Divider vertical={10} />
      {renderOptions}
    </View>
  );
};

export default CustomQuestionMultipleChoice;
