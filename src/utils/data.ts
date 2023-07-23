import {
  CustomStageFormData,
  CustomStageQuestionPostDataForm,
  CustomStageQuestionState,
  CustomStageQuestionType,
  CustomStageRowData,
} from '@/screens/stage/type';
import { map } from 'lodash';

export const getConvertCustomStagePostData = (data: CustomStageRowData) => {
  const deleteExternalKeyData = map(data.questions, questionData => {
    let createQuestion: CustomStageQuestionPostDataForm = {
      questionType: questionData.questionType,
      questionTitle: questionData.questionTitle,
    };

    if (
      questionData.questionType === CustomStageQuestionType.SUBJECTIVE_ANSWER
    ) {
      return createQuestion;
    } else if (
      questionData.questionType === CustomStageQuestionType.OX_ANSWER
    ) {
      return createQuestion;
    } else {
      const deleteMultipleChoiceExternalkeyData = map(
        questionData.multipleChoiceList,
        multipleChoiceListData => {
          return {
            content: multipleChoiceListData.content,
          };
        },
      );
      createQuestion.multipleChoiceList = deleteMultipleChoiceExternalkeyData;
    }

    return createQuestion;
  });

  return {
    stageName: data?.stageName,
    categoryName: data?.categoryName,
    createQuestion: deleteExternalKeyData,
  };
};
