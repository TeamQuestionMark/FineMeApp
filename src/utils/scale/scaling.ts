import { Dimensions } from 'react-native';

import scaledSheetCreator from './scaledSheet';

const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension] = width > height ? [width, height] : [height, width];

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scale = (size: number) => (longDimension / guidelineBaseWidth) * size;
export const verticalScale = (size: number) => (shortDimension / guidelineBaseHeight) * size;

export const s = scale;
export const vs = verticalScale;

export const ScaledSheet = scaledSheetCreator({ scale, verticalScale });
