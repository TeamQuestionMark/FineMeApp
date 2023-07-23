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
