// TOTO: 타입값 수정
export enum CustomStageQuestionType {
  OX_ANSWER = 'OX_ANSWER',
  SUBJECTIVE_ANSWER = 'SUBJECTIVE',
  CHIP = 'CHIP',
  RADIO = 'RADIO',
  CHECK_BOX = 'CHECK_BOX',
}
export interface MultipleChoiceProp {
  content: string;
}
export interface MultipleChoicePropType extends MultipleChoiceProp {
  choiceExternalKey: string;
}

export interface CustomStageQuestion {
  questionType: CustomStageQuestionType;
  questionTitle?: string;
  answerText?: string;
  multipleChoiceList?: MultipleChoicePropType[];
  answerChoice?: string;
}

export interface CustomStageQuestionState extends CustomStageQuestion {
  externalKey: string;
}

export interface CustomStageTitleForm {
  title: string;
  category: string;
}

export interface CustomStageFormData extends CustomStageTitleForm {
  questions: CustomStageQuestion[];
}
