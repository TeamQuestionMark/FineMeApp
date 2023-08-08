import React, { useCallback, useMemo, useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Header from '@/common/components/Header/Header';
import { NavigationProps } from '@/navigations/types';
import globalStyles from '@/themes/globalStyles';
import TextField from '@/common/components/TextField/TextField';
import { ScaledSheet } from '@/utils/scale';
import {
  CustomStageQuestionState,
  CustomStageQuestionType,
  CustomStageTitleForm,
} from '../type';
import { Divider } from '@/common/components/Divider';
import { COLORS } from '@/themes/colors';
import { Button } from '@/common/components/Button';
import CustomQuestionMaker from './StageCustomWriting/CustomQuestionMaker';
import { useToastStore } from '@/store/toast';
import { ConfirmModal } from '@/common/components/Modal';
import CustomQuestionCard from './StageCustomWriting/CustomQuestionCard';
import { find, map } from 'lodash';
import usePostCustomStageQuestions from '@/api/Question/hooks/usePostCustomStageQuestions';
import useGetCustomStageQuery from '@/api/Question/hooks/useGetCustomStageQuery';

const styles = ScaledSheet.create({
  paddingContainer: {
    paddingHorizontal: '20@s',
  },
  questionPaddingContainer: {
    paddingHorizontal: '13@s',
    paddingVertical: '30@vs',
  },
});

const StageCustomWriting = () => {
  const navigation = useNavigation<NavigationProps>();

  const setToast = useToastStore(state => state.setToast);

  const { mutate: createCustomStage } = usePostCustomStageQuestions();
  const { refetch: refetchCustomStages } = useGetCustomStageQuery();

  const [isVisibleCloseConfirmModal, setIsVisibleCloseConfirmModal] =
    useState<boolean>(false);
  const [isVisibleCompleteConfirmModal, setIsVisibleCompleteConfirmModal] =
    useState<boolean>(false);
  const [customQuestions, setCustomQuestions] = useState<
    CustomStageQuestionState[]
  >([]);

  const hasEmptyQuestionTitle = useMemo(
    () =>
      find(customQuestions, customQuestion => !customQuestion?.questionTitle),
    [customQuestions],
  );

  const hasEmptyMultiChoiceOptionEmpty = useMemo(
    () =>
      find(customQuestions, customQuestion => {
        const hasInnerOptionContentsEmpty = find(
          customQuestion?.multipleChoiceList,
          listItem =>
            (customQuestion.questionType === CustomStageQuestionType.RADIO ||
              customQuestion.questionType ===
                CustomStageQuestionType.CHECK_BOX) &&
            !listItem.content,
        );
        if (hasInnerOptionContentsEmpty) {
          return customQuestion;
        }
      }),
    [customQuestions],
  );

  const hasEmptyMultiChoiceOptionOverFifty = useMemo(
    () =>
      find(customQuestions, customQuestion => {
        const hasInnerOptionContentsFifty = find(
          customQuestion?.multipleChoiceList,
          listItem =>
            (customQuestion.questionType === CustomStageQuestionType.RADIO ||
              customQuestion.questionType ===
                CustomStageQuestionType.CHECK_BOX) &&
            listItem.content.length > 50,
        );
        if (hasInnerOptionContentsFifty) {
          return customQuestion;
        }
      }),
    [customQuestions],
  );

  const { control, handleSubmit, getValues } = useForm<CustomStageTitleForm>({
    defaultValues: {
      stageName: '',
      categoryName: '',
    },
  });

  const onPressCloseIcon = () => {
    setIsVisibleCloseConfirmModal(true);
  };

  const onPressCloseModal = () => {
    setIsVisibleCloseConfirmModal(false);
    navigation.goBack();
  };

  const onPressSavaButton = () => {
    const formValues = getValues();
    createCustomStage({
      stageName: formValues.stageName,
      categoryName: formValues.categoryName,
      questions: customQuestions,
    });
    refetchCustomStages();
    setIsVisibleCompleteConfirmModal(false);
  };

  const onPressSubmitButton = useCallback(
    (data: CustomStageTitleForm) => {
      if (!data.categoryName || !data.stageName) {
        setToast('제목과 카테고리를 모두 입력해주세요.');
        return;
      }
      if (data.categoryName.length > 8) {
        setToast('카테고리는 최대 8글자까지만 입력 가능합니다.');
        return;
      }
      if (hasEmptyQuestionTitle || customQuestions.length === 0) {
        setToast('작성중인 질문을 완료해주세요.');
        return;
      }
      if (hasEmptyMultiChoiceOptionEmpty) {
        setToast('옵션 내용을 입력해주세요.');
        return;
      }
      if (hasEmptyMultiChoiceOptionOverFifty) {
        setToast('옵션 내용은 최대 50글자까지만 입력 가능합니다.');
        return;
      }

      setIsVisibleCompleteConfirmModal(true);
    },
    [
      setToast,
      customQuestions,
      hasEmptyQuestionTitle,
      hasEmptyMultiChoiceOptionEmpty,
      hasEmptyMultiChoiceOptionOverFifty,
    ],
  );

  const renderCard = useMemo(
    () =>
      map(customQuestions, (customQuestion, index) => {
        return (
          <View key={customQuestion?.externalKey}>
            <CustomQuestionCard
              questionType={customQuestion?.questionType}
              externalKey={customQuestion?.externalKey}
              questionTitle={customQuestion?.questionTitle}
              multipleChoiceList={customQuestion?.multipleChoiceList}
              order={index + 1}
              customQuestions={customQuestions}
              setCustomQuestions={setCustomQuestions}
            />
            <Divider vertical={10} />
          </View>
        );
      }),
    [customQuestions],
  );

  return (
    <View style={[globalStyles.defaultFlexContainer]}>
      <KeyboardAwareScrollView enableResetScrollToCoords={false}>
        <Header
          title="커스텀 스테이지"
          trailIcon="Close"
          onPressTrailingIcon={onPressCloseIcon}
        />
        <View style={styles.paddingContainer}>
          <Divider vertical={30} />
          <Controller
            control={control}
            name="categoryName"
            render={({ field: { onChange, value } }) => (
              <TextField
                label="카테고리"
                placeholder="카테고리를 입력해주세요. ex)회사속나의모습"
                onInput={onChange}
                value={value}
              />
            )}
          />
          <Divider vertical={30} />
          <Controller
            control={control}
            name="stageName"
            render={({ field: { onChange, value } }) => (
              <TextField
                label="스테이지 제목"
                placeholder="제목을 입력해주세요."
                onInput={onChange}
                value={value}
              />
            )}
          />
          <Divider vertical={30} />
        </View>
        <Divider
          vertical={8}
          horizontal="100%"
          backgroundColor={COLORS.gray50}
        />
        <View
          style={[
            customQuestions.length > 0 && styles.questionPaddingContainer,
          ]}
        >
          {renderCard}
        </View>
        <CustomQuestionMaker
          customQuestions={customQuestions}
          setCustomQuestions={setCustomQuestions}
        />
        <View style={styles.paddingContainer}>
          <Button
            onPress={handleSubmit(onPressSubmitButton)}
            title="완료"
            width="100%"
          />
        </View>
        <Divider vertical={71} />
      </KeyboardAwareScrollView>
      <ConfirmModal
        title="정말 나가시겠습니까?"
        description={
          '지금 페이지를 닫으면\n작성중이던 설문 내용이 저장되지 않습니다.'
        }
        isVisible={isVisibleCloseConfirmModal}
        firstButton={
          <Button
            title="네"
            variant="outlined"
            onPress={onPressCloseModal}
            width={127}
          />
        }
        secondButton={
          <Button
            title="아니오"
            variant="solid"
            onPress={() => setIsVisibleCloseConfirmModal(false)}
            width={127}
          />
        }
      />
      <ConfirmModal
        title="저장하시겠습니까?"
        description="저장한 스테이지는 수정이 불가합니다."
        isVisible={isVisibleCompleteConfirmModal}
        firstButton={
          <Button
            title="취소"
            variant="outlined"
            onPress={() => setIsVisibleCompleteConfirmModal(false)}
            width={127}
          />
        }
        secondButton={
          <Button
            title="저장"
            variant="solid"
            onPress={onPressSavaButton}
            width={127}
          />
        }
      />
    </View>
  );
};

export default StageCustomWriting;
