import { s, vs } from '../utils/scale';

import { COLORS } from './colors';

export const GLOBAL_HORIZONTAL_PADDING = s(20)
const globalStyles = {
  defaultFlexContainer: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  rowAlignCenterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyFlexStart: {
    justifyContent: 'flex-start',
  },
  justifyFlexEnd: {
    justifyContent: 'flex-end',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  alignFlexEnd: {
    alignSelf: 'flex-end',
  },
  alignFlexStart: {
    alignSelf: 'flex-start',
  },
  alignItemsFlexEnd: {
    alignItems: 'flex-end',
  },
  defaultBackgroundColor: {
    backgroundColor: COLORS.white,
  },
  defaultPadding: {
    paddingVertical: vs(16),
    paddingHorizontal: GLOBAL_HORIZONTAL_PADDING,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: vs(48),
  },
} as const;

export default globalStyles;
