import { StyleSheet } from 'react-native';

import type { ScaledSheetCreatorProps, DeepMap, DeepMapValue } from './type';

/* eslint-disable no-useless-escape */
const validScaleSheetRegex = /^(\-?\d+(\.\d{1,3})?)@(ms(\d+(\.\d{1,2})?)?|s|vs|mvs)(r?)$/;

const mapObject = (obj: { [key: string]: DeepMapValue }, fn: (val: DeepMapValue) => DeepMapValue) =>
  Object.keys(obj).reduce(
    (res: { [key: string]: DeepMapValue }, key: string) => ({
      ...res,
      [key]: fn(obj[key] as DeepMapValue),
    }),
    {},
  );

const deepMap: DeepMap = (obj, fn) => {
  const deepMapper = (val: DeepMapValue) => (typeof val === 'object' ? deepMap(val, fn) : fn(val));

  if (Array.isArray(obj)) {
    return obj.map(deepMapper);
  }

  if (typeof obj === 'object') {
    return mapObject(obj as { [key: string]: DeepMapValue }, deepMapper);
  }

  return obj;
};

const scaleByAnnotation =
  ({ scale, verticalScale }: ScaledSheetCreatorProps) =>
  (value: string | number) => {
    const stringValue = String(value);

    if (!validScaleSheetRegex.test(stringValue)) {
      return value;
    }

    const regexExecResult = validScaleSheetRegex.exec(stringValue) as string[];

    const size = parseFloat(regexExecResult[1] as string);
    const scaleFunc = regexExecResult[3];
    const shouldRound = stringValue.endsWith('r');

    let result;

    switch (scaleFunc) {
      case 's':
        result = scale(size);
        break;
      case 'vs':
        result = verticalScale(size);
        break;
      default:
        result = size;
    }

    return shouldRound ? Math.round(result) : result;
  };

const scaledSheetCreator = ({ scale, verticalScale }: ScaledSheetCreatorProps) => {
  const scaleFunc = scaleByAnnotation({
    scale,
    verticalScale,
  });

  return {
    create: (styleSheet: object) => StyleSheet.create(deepMap(styleSheet, scaleFunc)),
  };
};

export default scaledSheetCreator;
