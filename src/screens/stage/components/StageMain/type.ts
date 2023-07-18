import { STAGE_ID_MAP } from '@/constants/stage';

export interface StageMainCardProps {
  type: keyof typeof STAGE_ID_MAP;
}
