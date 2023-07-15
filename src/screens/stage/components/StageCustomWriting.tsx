import React, { useMemo, useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import {
  NestableDraggableFlatList,
  NestableScrollContainer,
  RenderItem,
  RenderItemParams,
} from 'react-native-draggable-flatlist';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import Header from '@/common/components/Header/Header';
import { NavigationProps } from '@/navigations/types';
import globalStyles from '@/themes/globalStyles';
import TextField from '@/common/components/TextField/TextField';
import { ScaledSheet } from '@/utils/scale';
import { CustomStageQuestionState, CustomStageTitleForm } from '../type';
import { Divider } from '@/common/components/Divider';
import { COLORS } from '@/themes/colors';
import { Button } from '@/common/components/Button';
import CustomQuestionMaker from './StageCustomWriting/CustomQuestionMaker';
import { useToastStore } from '@/store/toast';
import { ConfirmModal } from '@/common/components/Modal';
import CustomQuestionCard from './StageCustomWriting/CustomQuestionCard';
import { map } from 'lodash';

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

  // const flatListKeyExtractor = useCallback(
  //   (item: CustomStageQuestionState) => item.externalKey,
  //   [],
  // );
  const [isVisibleCloseConfirmModal, setIsVisibleCloseConfirmModal] =
    useState<boolean>(false);
  const [customQuestions, setCustomQuestions] = useState<
    CustomStageQuestionState[]
  >([]);

  const { control, handleSubmit } = useForm<CustomStageTitleForm>({
    defaultValues: {
      title: '',
      category: '',
    },
  });

  const onPressCloseIcon = () => {
    setIsVisibleCloseConfirmModal(true);
  };

  const onPressCloseModal = () => {
    setIsVisibleCloseConfirmModal(false);
    navigation.goBack();
  };

  const onPressSubmitButton = (data: CustomStageTitleForm) => {
    setToast('테스트');
  };

  const renderCard = useMemo(
    () =>
      map(customQuestions, (customQuestion, index) => {
        return (
          <View key={customQuestion?.externalKey}>
            <CustomQuestionCard
              questionType={customQuestion?.questionType}
              externalKey={customQuestion?.externalKey}
              questionTitle={customQuestion?.questionTitle}
              subjectiveAnswer={customQuestion?.subjectiveAnswer}
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

  // const renderItem = gestureHandlerRootHOC(
  //   ({ item, drag, getIndex }: RenderItemParams<CustomStageQuestionState>) => {
  //     return (
  //       <View key={item?.externalKey}>
  //         <CustomQuestionCard
  //           questionType={item?.questionType}
  //           externalKey={item?.externalKey}
  //           questionTitle={item?.questionTitle}
  //           order={(getIndex() || 0) + 1}
  //           cardDrag={drag}
  //           customQuestions={customQuestions}
  //           setCustomQuestions={setCustomQuestions}
  //         />
  //         <Divider vertical={10} />
  //       </View>
  //     );
  //   },
  // );

  // const DragList = gestureHandlerRootHOC(() => (
  //   <View
  //     style={[customQuestions.length > 0 && styles.questionPaddingContainer]}
  //   >
  //     <NestableScrollContainer>
  //       <NestableDraggableFlatList
  //         ref={flatListRef}
  //         data={customQuestions}
  //         renderItem={renderItem as RenderItem<CustomStageQuestionState>}
  //         keyExtractor={flatListKeyExtractor}
  //         removeClippedSubviews={false}
  //         onDragEnd={({ data }) => {
  //           setCustomQuestions(data);
  //         }}
  //       />
  //     </NestableScrollContainer>
  //   </View>
  // ));

  return (
    <View style={[globalStyles.defaultFlexContainer]}>
      <KeyboardAwareScrollView>
        <Header
          title="커스텀 스테이지"
          trailIcon="Close"
          onPressTrailingIcon={onPressCloseIcon}
        />
        <View style={styles.paddingContainer}>
          <Divider vertical={30} />
          <Controller
            control={control}
            name="category"
            render={({ field: { onChange, value } }) => (
              <TextField
                label="카테고리"
                placeholder="카테고리를 입력해주세요. ex)회사 속 나의 모습"
                onInput={onChange}
                value={value}
              />
            )}
          />
          <Divider vertical={30} />
          <Controller
            control={control}
            name="title"
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
        {/* <DragList /> */}
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
    </View>
  );
};

export default StageCustomWriting;
