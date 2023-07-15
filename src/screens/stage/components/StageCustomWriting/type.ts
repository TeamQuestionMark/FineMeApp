import { Dispatch, SetStateAction } from "react";
import { CustomStageQuestionState } from "../../type";

export interface CustomQuestionCardProps extends CustomStageQuestionState {
  order: number;
  // cardDrag: () => void;
  setCustomQuestions: Dispatch<SetStateAction<CustomStageQuestionState[]>>;
  customQuestions: CustomStageQuestionState[];
}