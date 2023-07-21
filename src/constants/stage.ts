import { FINEME_WEB_URL } from './config';

export const STAGE_URL = (stageId: number, userId: number) =>
  `${FINEME_WEB_URL}/stages/${stageId}?user_id=${userId}`;

export const STAGE_PREVIEW_URL = (stageId: number, userId: number) =>
  `${FINEME_WEB_URL}/stages/${stageId}/preview?user_id=${userId}`;

export const STAGE_ID_MAP = {
  회사: 1,
  카페: 2,
  집: 3,
};
