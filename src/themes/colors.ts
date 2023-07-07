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
  black: "#000000",
  description: "#767676"
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


const OPACITY = [
  '00', '03', '05', '08', '0A', '0D', '0F', '12', '14', '17',
  '1A', '1C', '1F', '21', '24', '26', '29', '2B', '2E', '30',
  '33', '36', '38', '3B', '3D', '40', '42', '45', '47', '4A',
  '4D', '4F', '52', '54', '57', '59', '5C', '5E', '61', '63',
  '66', '69', '6B', '6E', '70', '73', '75', '78', '7A', '7D',
  '80', '82', '85', '87', '8A', '8C', '8F', '91', '94', '96',
  '99', '9C', '9E', 'A1', 'A3', 'A6', 'A8', 'AB', 'AD', 'B0',
  'B3', 'B5', 'B8', 'BA', 'BD', 'BF', 'C2', 'C4', 'C7', 'C9',
  'CC', 'CF', 'D1', 'D4', 'D6', 'D9', 'DB', 'DE', 'E0', 'E3',
  'E6', 'E8', 'EB', 'ED', 'F0', 'F2', 'F5', 'F7', 'FA', 'FC',
  'FF',
];

export const getColorWithOpacity = (hex: string, opacity: number) => hex + OPACITY[opacity * 100];
