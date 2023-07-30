export interface CustomStageListItem {
  stageNo: number;
  stageName: string;
  categoryName: string;
  createDate: string;
}

export interface CustomStageResponseData {
  length: number;
  stageLists: CustomStageListItem[];
}

export interface BasicStageResult {
  stageNo?: number;
  stageName: string;
  createDate?: string;
  uuid: string;
  stageResultCount?: number;
}

export interface CustomStageResult extends BasicStageResult {
  categoryName?: string;
}

export interface QuestionResultData {
  stageLength: number;
  basicStageList: BasicStageResult[];
  customStageList: CustomStageResult[];
}
