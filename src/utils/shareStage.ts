import { STAGE_URL } from '@/constants/stage';
import { COLORS } from '@/themes/colors';
import { Share } from 'react-native';

export default async function shareStage(stageId: number, userId: number) {
  try {
    await Share.share(
      {
        title: '스테이지 공유하기',
        message: `당신이 보는 내 모습은? 
        ${STAGE_URL(stageId, userId)}`,
        url: STAGE_URL(stageId, userId),
      },
      { dialogTitle: '스테이지 공유하기', tintColor: COLORS.brandColor600 },
    );
  } catch (e) {
    console.error('shareStage:', e);
  }
}
