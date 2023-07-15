
// TOTO: 타입값 수정
export enum CustomStageQuestionType {
  OX_ANSWER = "OX_ANSWER",
  MULTIPLE_CHOICE_ANSWER = "MULTIPLE_CHOICE_ANSWER",
  SUBJECTIVE_ANSWER = "SUBJECTIVE_ANSWER" 
}

export interface MultipleChoiceProp {
  content: string;
}

export interface CustomStageQuestion {
  questionType: CustomStageQuestionType;
  questionTitle?: string;
  subjectiveAnswer?: string;
  multipleChoiceList?: MultipleChoiceProp[];
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
