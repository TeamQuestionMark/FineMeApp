import { s } from '../utils/scale';

export type FontWeight = 'bold' | "extraBold" | "Regular";

export type FontSize = "28" | "24" | "20" | "16" | "14" | "13";

export interface GetTypography {
  /** 폰트 타입의 이름 */
  fontSize?: FontSize;

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
  fontSize,
  fontSizeWeight = 1,
  fontWeight,
  isFontTypeEnglish = false,
}: GetTypography) => {
  const scaling = s;

  switch (fontSize) {
    case '28':
      return {
        fontSize: scaling(28) * fontSizeWeight,
        fontFamily: getFontFamily({ fontWeight, isFontTypeEnglish }),
        lineHeight: getLineHeight(scaling(38), 1),
      };
    case '24':
      return {
        fontSize: scaling(24) * fontSizeWeight,
        fontFamily: getFontFamily({ fontWeight, isFontTypeEnglish }),
        lineHeight: getLineHeight(scaling(34), 1),
      };
    case '20':
      return {
        fontSize: scaling(20) * fontSizeWeight,
        fontFamily: getFontFamily({ fontWeight, isFontTypeEnglish }),
        lineHeight: getLineHeight(scaling(24), 1),
      };
    case '20':
      return {
        fontSize: scaling(20) * fontSizeWeight,
        fontFamily: getFontFamily({ fontWeight, isFontTypeEnglish }),
        lineHeight: getLineHeight(scaling(24), 1),
      };
    case '16':
      return {
        fontSize: scaling(16) * fontSizeWeight,
        fontFamily: getFontFamily({ fontWeight, isFontTypeEnglish }),
        lineHeight: getLineHeight(scaling(24), 1),
      };
    case '14':
      return {
        fontSize: scaling(14) * fontSizeWeight,
        fontFamily: getFontFamily({ fontWeight, isFontTypeEnglish }),
        lineHeight: getLineHeight(scaling(20), 1),
      };
    case '13':
      return {
        fontSize: scaling(13) * fontSizeWeight,
        fontFamily: getFontFamily({ fontWeight, isFontTypeEnglish }),
        lineHeight: getLineHeight(scaling(20), 1),
      };
    default:
      return {
        fontSize: scaling(16) * fontSizeWeight,
        fontFamily: getFontFamily({ fontWeight, isFontTypeEnglish }),
        lineHeight: getLineHeight(scaling(16), 1),
      };
  }
};
