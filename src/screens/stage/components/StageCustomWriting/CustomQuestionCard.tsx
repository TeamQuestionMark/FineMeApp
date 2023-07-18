import React, { useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { filter, map } from 'lodash';

import { COLORS } from '@/themes/colors';
import { ScaledSheet } from '@/utils/scale';
import { CustomQuestionCardProps } from './type';
import globalStyles from '@/themes/globalStyles';
import Text from '@/common/components/Text';
import { Divider } from '@/common/components/Divider';
import { InputMessageField, TextField } from '@/common/components/TextField';
import {
  CustomStageQuestion,
  CustomStageQuestionType,
  MultipleChoiceProp,
} from '../../type';
import OXButtonGroup from '@/common/components/OXButtonGroup/OXButtonGroup';
import Icon from '@/common/components/Icon/Icon';
import CustomQuestionMultipleChoice from './CustomQuestionMultipleChoice';

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    paddingVertical: '24@vs',
    paddingHorizontal: '14@s',
    borderWidth: 1,
    borderColor: COLORS.gray100,
    borderRadius: 10,
    backgroundColor: COLORS.white,
  },
});

const CustomQuestionCard = ({
  questionType,
  questionTitle,
  answerText,
  order,
  customQuestions,
  setCustomQuestions,
  multipleChoiceList,
  externalKey,
}: CustomQuestionCardProps) => {
  const getModifiedValue = useCallback(
    (key: keyof CustomStageQuestion, value: string | MultipleChoiceProp) => {
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

  const onChangeOXanswer = useCallback(
    (value: boolean) => {
      const modifiedCustomQuestions = getModifiedValue(
        'answerChoice',
        value ? 'o' : 'x',
      );
      setCustomQuestions(modifiedCustomQuestions);
    },
    [customQuestions, setCustomQuestions],
  );

  const onChangeanswerText = useCallback(
    (text: string) => {
      const modifiedCustomQuestions = getModifiedValue('answerText', text);
      setCustomQuestions(modifiedCustomQuestions);
    },
    [customQuestions, setCustomQuestions],
  );

  const onChangeQuestionTitle = useCallback(
    (text: string) => {
      const modifiedCustomQuestions = getModifiedValue('questionTitle', text);
      setCustomQuestions(modifiedCustomQuestions);
    },
    [customQuestions, setCustomQuestions],
  );

  const onPressDeleteCard = useCallback(() => {
    const modifiedCustomQuestions = filter(
      customQuestions,
      customQuestion => customQuestion?.externalKey !== externalKey,
    );

    setCustomQuestions(modifiedCustomQuestions);
  }, [customQuestions, setCustomQuestions]);

  const renderContents = useMemo(() => {
    switch (questionType) {
      case CustomStageQuestionType.SUBJECTIVE_ANSWER:
        return (
          <InputMessageField
            value={answerText || ''}
            placeholder="1~100자까지 작성할 수 있습니다."
            onInput={onChangeanswerText}
          />
        );
      case CustomStageQuestionType.RADIO:
        return (
          <CustomQuestionMultipleChoice
            questionType={questionType}
            multipleChoiceList={multipleChoiceList}
            externalKey={externalKey}
            customQuestions={customQuestions}
            setCustomQuestions={setCustomQuestions}
          />
        );
      case CustomStageQuestionType.CHECK_BOX:
        return (
          <CustomQuestionMultipleChoice
            questionType={questionType}
            multipleChoiceList={multipleChoiceList}
            externalKey={externalKey}
            customQuestions={customQuestions}
            setCustomQuestions={setCustomQuestions}
          />
        );
      case CustomStageQuestionType.OX_ANSWER:
        return <OXButtonGroup onChange={onChangeOXanswer} />;
      default:
        return <OXButtonGroup onChange={onChangeOXanswer} />;
    }
  }, [customQuestions, questionType]);

  return (
    <View style={styles.container}>
      <View
        style={[
          globalStyles.rowAlignCenterContainer,
          globalStyles.justifySpaceBetween,
          globalStyles.defaultFlexContainer,
        ]}
      >
        <View style={globalStyles.rowAlignCenterContainer}>
          <Divider horizontal={14} />
          <Text fontSize="16" fontWeight="bold" color={COLORS.gray900}>
            {`질문 ${order || 0}`}
          </Text>
        </View>
        <View style={globalStyles.rowAlignCenterContainer}>
          <Icon
            icon="Close"
            size={17}
            color={COLORS.gray400}
            isPressable
            onPressIcon={onPressDeleteCard}
          />
          <Divider horizontal={14} />
        </View>
      </View>
      <Divider vertical={8} />
      <TextField
        value={questionTitle}
        placeholder="질문 내용 입력해주세요."
        onInput={onChangeQuestionTitle}
      />
      <Divider vertical={16} />
      {renderContents}
    </View>
  );
};

export default CustomQuestionCard;
