export type ScaleFunc = (size: number) => number;

export interface ScaledSheetCreatorProps {
  scale: ScaleFunc;
  verticalScale: ScaleFunc;
}

export type DeepMapValue = any;

export type DeepMap = (obj: DeepMapValue, fn: (size: number | string) => number | string) => DeepMapValue;
