import { s } from '../utils/scale';

export type FontWeight = 'bold' | 'semiBold' | 'medium' | 'regular';

// TODO: font Weight 정해졌을시 수정
type Typography =
  | 'display1'
  | 'display2'
  | 'display3'
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'caption1'
  | 'caption2'
  | 'caption3'
  | 'caption4';

export interface GetTypography {
  /** 폰트 타입의 이름 */
  typography: Typography;

  /** 폰트 사이즈 스케일 기준 */
  fontSizeWeight?: number;

  /** 폰트 굵기 */
  fontWeight: FontWeight;

  //영어인지
  isFontTypeEnglish: boolean;
}

const getFontFamily = ({
  fontWeight,
  isFontTypeEnglish = false,
}: {
  fontWeight: FontWeight;
  isFontTypeEnglish: boolean;
}) =>
  isFontTypeEnglish
    ? 'TitanOne'
    : `SUIT-${fontWeight
        .slice(0, 1)
        .toUpperCase()
        .concat(fontWeight.slice(1))}`;

const getLineHeight = (fontSize: number, lineHeightRatio = 1.5) =>
  fontSize * lineHeightRatio;

export const getTypography = ({
  typography,
  fontSizeWeight = 1,
  fontWeight,
  isFontTypeEnglish = false,
}: GetTypography) => {
  const scaling = s;

  switch (typography) {
    case 'display1':
      return {
        fontSize: scaling(48) * fontSizeWeight,
        fontFamily: getFontFamily({ fontWeight, isFontTypeEnglish }),
        lineHeight: getLineHeight(scaling(48), 1.2),
      };
    case 'display2':
      return {
        fontSize: scaling(40) * fontSizeWeight,
        fontFamily: getFontFamily({ fontWeight, isFontTypeEnglish }),
        lineHeight: getLineHeight(scaling(40)),
      };
    case 'display3':
      return {
        fontSize: scaling(32) * fontSizeWeight,
        fontFamily: getFontFamily({ fontWeight, isFontTypeEnglish }),
        lineHeight: getLineHeight(scaling(32)),
      };
    case 'heading1':
      return {
        fontSize: scaling(28) * fontSizeWeight,
        fontFamily: getFontFamily({ fontWeight, isFontTypeEnglish }),
        lineHeight: getLineHeight(scaling(28)),
      };
    case 'heading2':
      return {
        fontSize: scaling(24) * fontSizeWeight,
        fontFamily: getFontFamily({ fontWeight, isFontTypeEnglish }),
        lineHeight: getLineHeight(scaling(24)),
      };
    case 'heading3':
      return {
        fontSize: scaling(22) * fontSizeWeight,
        fontFamily: getFontFamily({ fontWeight, isFontTypeEnglish }),
        lineHeight: getLineHeight(scaling(22)),
      };
    case 'heading4':
      return {
        fontSize: scaling(20) * fontSizeWeight,
        fontFamily: getFontFamily({ fontWeight, isFontTypeEnglish }),
        lineHeight: getLineHeight(scaling(20)),
      };
    case 'body1':
      return {
        fontSize: scaling(20) * fontSizeWeight,
        fontFamily: getFontFamily({ fontWeight, isFontTypeEnglish }),
        lineHeight: getLineHeight(scaling(20)),
      };
    case 'body2':
      return {
        fontSize: scaling(18) * fontSizeWeight,
        fontFamily: getFontFamily({ fontWeight, isFontTypeEnglish }),
        lineHeight: getLineHeight(scaling(18)),
      };
    case 'body3':
      return {
        fontSize: scaling(16) * fontSizeWeight,
        fontFamily: getFontFamily({ fontWeight, isFontTypeEnglish }),
        lineHeight: getLineHeight(scaling(16)),
      };
    case 'caption1':
      return {
        fontSize: scaling(18) * fontSizeWeight,
        fontFamily: getFontFamily({ fontWeight, isFontTypeEnglish }),
        lineHeight: getLineHeight(scaling(18)),
      };
    case 'caption2':
      return {
        fontSize: scaling(16) * fontSizeWeight,
        fontFamily: getFontFamily({ fontWeight, isFontTypeEnglish }),
        lineHeight: getLineHeight(scaling(16)),
      };
    case 'caption3':
      return {
        fontSize: scaling(14) * fontSizeWeight,
        fontFamily: getFontFamily({ fontWeight, isFontTypeEnglish }),
        lineHeight: getLineHeight(scaling(14)),
      };
    case 'caption4':
    default:
      return {
        fontSize: scaling(12) * fontSizeWeight,
        fontFamily: getFontFamily({ fontWeight, isFontTypeEnglish }),
        lineHeight: getLineHeight(scaling(12)),
      };
  }
};
