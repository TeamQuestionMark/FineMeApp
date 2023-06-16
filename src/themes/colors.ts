import { ValueOf } from './type';

// 임시 컬러
export const COLORS = {
  brandColor50: "#fefce8",
  brandColor100: "#fef8c3",
  brandColor200: "#ffee89",
  brandColor300: "#fede46",
  brandColor400: "#fbc609",
  brandColor500: "#ebb007",
  brandColor600: "#cb8603",
  brandColor700: "#a25f06",
  brandColor800: "#864b0d",
  brandColor900: "#713d12",
  gray50: "#f7f7f7",
  gray100: "#e3e3e3",
  gray200: "#c8c8c8",
  gray300: "#a4a4a4",
  gray400: "#818181",
  gray500: "#666666",
  gray600: "#515151",
  gray700: "#434343",
  gray800: "#383838",
  gray900: "#313131",
  error30: "#FFEAEA",
  error100: "#DC1716",
  active30: "#DBEBFF",
  active100: "#2385FF",
  white: "#ffffff",
  black: "#000000"
} as const;


export type ValueOfColors = ValueOf<typeof COLORS>;

export const TEXT_COLORS = {
  textPrimary: COLORS.gray900,
  textSecondary: COLORS.gray600,
  textDescription: COLORS.gray500,
  textPlaceholder: COLORS.gray400,
  textDisableAccent: COLORS.gray500,
  textDisable: COLORS.gray300,
} as const;
