import { ValueOf } from './type';

// 임시 컬러
export const COLORS = {
  primary900: '#0E1D40',
  primary800: '#13249D',
  primary700: '#1F59E0',
  primary600: '#0077FE',
  primary500: '#008CFF',
  primary400: '#33ABFF',
  primary300: '#65C2FF',
  primary200: '#80D0FF',
  primary100: '#CCE9FF',
  primary50: '#F0F8FF',

  gray900: '#181A20',
  gray800: '#323B47',
  gray700: '#474B52',
  gray600: '#5A6270',
  gray500: '#7C8694',
  gray400: '#A7ADB8',
  gray300: '#CED0D6',
  gray200: '#E6E8EB',
  gray100: '#F7F7F8',
  gray50: '#FBFBFC',

  secondary900: '#000569',
  secondary800: '#1F299C',
  secondary700: '#2E38A8',
  secondary600: '#4852C1',
  secondary500: '#616CDC',
  secondary400: '#7B86F8',
  secondary300: '#9CA4FF',
  secondary200: '#BEC2FF',
  secondary100: '#E0E0FF',
  secondary50: '#F1EFFF',

  tertiary900: '#001E2E',
  tertiary800: '#0C4A6E',
  tertiary700: '#075783',
  tertiary600: '#0369A0',
  tertiary500: '#007FB3',
  tertiary400: '#00ACE0',
  tertiary300: '#3ABFF8',
  tertiary200: '#87CEFF',
  tertiary100: '#C8E6FF',
  tertiary50: '#EAF4FE',

  white: '#FFFFFF',
  black: '#000000',

  pink900: '#81183B',
  pink800: '#9B1743',
  pink700: '#BF1855',
  pink600: '#DB296A',
  pink500: '#EC4683',
  pink400: '#F684AD',
  pink300: '#F9A9C6',
  pink200: '#FBD0E0',
  pink100: '#FDE2F2',
  pink50: '#FDF2F8',

  purple900: '#191155',
  purple800: '#21167A',
  purple700: '#332593',
  purple600: '#4D3AB7',
  purple500: '#6C55DB',
  purple400: '#8C74F6',
  purple300: '#AD97FF',
  purple200: '#BFACFF',
  purple100: '#DACFFC',
  purple50: '#EAE3FF',

  lime900: '#355214',
  lime800: '#406312',
  lime700: '#4C7B0F',
  lime600: '#66A50D',
  lime500: '#82CB15',
  lime400: '#95DE21',
  lime300: '#BAE95D',
  lime200: '#D9F99F',
  lime100: '#EBFCCA',
  lime50: '#F7FEE7',

  green900: '#064B39',
  green800: '#066046',
  green700: '#047656',
  green600: '#059467',
  green500: '#00A870',
  green400: '#36D399',
  green300: '#8ED7BA',
  green200: '#BDE5D3',
  green100: '#DBF0E5',
  green50: '#EBF5F0',

  blue900: '#283848',
  blue800: '#14477B',
  blue700: '#105293',
  blue600: '#1466B8',
  blue500: '#0B6CD7',
  blue400: '#427FE7',
  blue300: '#8EB4F6',
  blue200: '#B6CFF3',
  blue100: '#D6E3F5',
  blue50: '#ECF2FC',

  cyan900: '#0A3545',
  cyan800: '#155F75',
  cyan700: '#0E7490',
  cyan600: '#088EAF',
  cyan500: '#02A2CA',
  cyan400: '#2CBADA',
  cyan300: '#7EDDE7',
  cyan200: '#B8F0F6',
  cyan100: '#D1F6F8',
  cyan50: '#EAF9FF',

  red900: '#811D1D',
  red800: '#981B1B',
  red700: '#BA1C1C',
  red600: '#DB120D',
  red500: '#FB3741',
  red400: '#FD6B6B',
  red300: '#FCA6A6',
  red200: '#FEC8C8',
  red100: '#FEE1E1',
  red50: '#FEECEC',

  orange900: '#7D2D12',
  orange800: '#9B3B12',
  orange700: '#B43200',
  orange600: '#DA4000',
  orange500: '#F9560E',
  orange400: '#FB7C3C',
  orange300: '#FDA172',
  orange200: '#FEC5A9',
  orange100: '#FFEDD6',
  orange50: '#FFF6EB',

  yellowLight900: '#733F12',
  yellowLight800: '#864E0E',
  yellowLight700: '#A26107',
  yellowLight600: '#C88A04',
  yellowLight500: '#E7B008',
  yellowLight400: '#FACC14',
  yellowLight300: '#FDDF49',
  yellowLight200: '#FEF08B',
  yellowLight100: '#FEF9C3',
  yellowLight50: '#FEFCE7',

  naver: '#03C75A',
} as const;

export const COLOR_TOKENS = {
  // primary
  primary: COLORS.primary500,
  primaryText: COLORS.primary600,
  primaryBg: COLORS.primary50,

  // secondary
  secondary: COLORS.secondary800,
  secondaryText: COLORS.secondary800,
  secondaryBg: COLORS.secondary50,

  // border
  borderPrimary: COLORS.primary500,
  borderDisable: COLORS.gray300,
  borderDividerPrimary: COLORS.gray300,
  borderDividerSecondary: COLORS.gray200,

  // background
  bgDefault: COLORS.white,
  bgPrimary: COLORS.gray200,
  bgSecondary: COLORS.gray50,
  bgInputDisable: COLORS.gray100,
  bgPressed: COLORS.gray100,
  bgKeypad: COLORS.gray200,
  bgDisable: COLORS.gray300,

  // error
  sementicErrorText: COLORS.red500,
  sementicErrorBg: COLORS.red50,
  sementicErrorBorder: COLORS.red200,
  sementicErrorPressed: COLORS.red700,

  // success
  sementicSuccessText: COLORS.green500,
  sementicSuccessBg: COLORS.green50,
  sementicSuccessBorder: COLORS.green200,
  sementicSuccessPressed: COLORS.green700,

  // warning
  sementicWarningText: COLORS.orange400,
  sementicWarningBg: COLORS.orange50,
  sementicWarningBorder: COLORS.orange200,
  sementicWarningPressed: COLORS.orange700,

  // info
  sementicInfoText: COLORS.blue500,
  sementicInfoBg: COLORS.blue50,
  sementicInfoBorder: COLORS.blue200,
  sementicInfoPressed: COLORS.blue700,
} as const;

export type ValueOfColors = ValueOf<typeof COLORS>;
export type ValueOfColorTokens = ValueOf<typeof COLOR_TOKENS>;
export type ValueOfThemeColor = ValueOfColors | ValueOfColorTokens;

export const TEXT_COLORS = {
  textPrimary: COLORS.gray900,
  textSecondary: COLORS.gray600,
  textDescription: COLORS.gray500,
  textPlaceholder: COLORS.gray400,
  textDisableAccent: COLORS.gray500,
  textDisable: COLORS.gray300,
} as const;
