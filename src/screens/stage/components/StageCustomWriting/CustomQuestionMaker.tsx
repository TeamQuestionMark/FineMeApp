import React, { Dispatch, SetStateAction, useMemo, useState } from 'react';
import { TouchableOpacity, View, Pressable } from 'react-native';
import { ScaledSheet, s, vs } from '@/utils/scale';
import {
  CustomStageFormData,
  CustomStageQuestion,
  CustomStageQuestionState,
  CustomStageQuestionType,
} from '../../type';
import { Control, Controller } from 'react-hook-form';
import globalStyles from '@/themes/globalStyles';
import Text from '@/common/components/Text';
import { COLORS } from '@/themes/colors';
import { Divider } from '@/common/components/Divider';
import { CustomShadow } from '@/common/components/Shadow';
import Icon from '@/common/components/Icon/Icon';

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: '20@s',
    paddingVertical: '30@vs',
  },
});

const CustomQuestionMaker = ({
  customQuestions,
  setCustomQuestions,
}: {
  customQuestions: CustomStageQuestionState[];
  setCustomQuestions: Dispatch<SetStateAction<CustomStageQuestionState[]>>;
}) => {
  const [questionType, setQuestionType] = useState<
    CustomStageQuestionType | undefined
  >();

  const disabledButtonColor = !questionType ? COLORS.gray100 : COLORS.white;
  const disabledButtonBorderColor = !questionType
    ? COLORS.gray300
    : COLORS.black;

  const onPressAddButton = () => {
    setCustomQuestions([
      ...customQuestions,
      {
        questionType: questionType as CustomStageQuestionType,
        questionTitle: '',
        answerChoice: '',
        subjectiveAnswer: '',
        externalKey: `${questionType}-${customQuestions.length}`,
      },
    ]);
    setQuestionType(undefined);
  };

  const renderTypeSelectButton = (selectedType: CustomStageQuestionType) => {
    const isSelected = selectedType === questionType;

    const buttonName = (() => {
      switch (selectedType) {
        case CustomStageQuestionType.MULTIPLE_CHOICE_ANSWER:
          return '객관식';
        case CustomStageQuestionType.OX_ANSWER:
          return 'O / X';
        case CustomStageQuestionType.SUBJECTIVE_ANSWER:
          return '주관식';
        default:
          return '객관식';
      }
    })();

    return (
      <TouchableOpacity
        style={[
          globalStyles.alignCenter,
          globalStyles.justifyCenter,
          {
            width: s(104),
            height: vs(52),
            borderWidth: 2,
            borderColor: isSelected ? COLORS.brandColor500 : COLORS.gray900,
            borderRadius: 10,
            backgroundColor: isSelected ? COLORS.brandColor300 : COLORS.white,
          },
        ]}
        activeOpacity={0.7}
        onPress={() => setQuestionType(selectedType)}
      >
        <Text
          fontSize="14"
          fontWeight="Regular"
          color={isSelected ? COLORS.brandColor800 : COLORS.gray900}
        >
          {buttonName}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={[globalStyles.rowAlignCenterContainer]}>
        <Divider horizontal={14} />
        <Text fontSize="16" fontWeight="bold" color={COLORS.gray900}>
          질문 유형을 선택해주세요
        </Text>
      </View>
      <Divider vertical={16} />
      <View
        style={[
          { width: '100%' },
          globalStyles.rowAlignCenterContainer,
          globalStyles.justifySpaceBetween,
        ]}
      >
        {renderTypeSelectButton(CustomStageQuestionType.SUBJECTIVE_ANSWER)}
        {renderTypeSelectButton(CustomStageQuestionType.MULTIPLE_CHOICE_ANSWER)}
        {renderTypeSelectButton(CustomStageQuestionType.OX_ANSWER)}
      </View>
      <Divider vertical={50} />
      <View
        style={[
          globalStyles.alignCenter,
          globalStyles.justifyCenter,
          { width: '100%' },
        ]}
      >
        <CustomShadow borderRadius={10} shadowColor={disabledButtonBorderColor}>
          <Pressable
            style={({ pressed }) => [
              globalStyles.rowAlignCenterContainer,
              globalStyles.justifyCenter,
              {
                width: s(200),
                height: vs(50),
                borderWidth: 2,
                borderColor: disabledButtonBorderColor,
                borderRadius: 10,
                backgroundColor: pressed ? COLORS.gray50 : disabledButtonColor,
              },
            ]}
            disabled={!questionType}
            onPress={onPressAddButton}
          >
            <Text
              fontSize="16"
              fontWeight="bold"
              color={disabledButtonBorderColor}
            >
              질문지 추가
            </Text>
            <Divider horizontal={8} />
            <Icon icon="Add" size={16} color={disabledButtonBorderColor} />
          </Pressable>
        </CustomShadow>
      </View>
      <Divider vertical={10} />
    </View>
  );
};

export default CustomQuestionMaker;
