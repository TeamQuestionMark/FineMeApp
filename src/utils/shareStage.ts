import { STAGE_URL } from '@/constants/stage';
import { COLORS } from '@/themes/colors';
import { Share } from 'react-native';

export default async function shareStage(stageId: number) {
  try {
    await Share.share(
      {
        title: '스테이지 공유하기',
        message: '링크를 공유해서 답변을 받아보세요',
        url: STAGE_URL(stageId),
      },
      { dialogTitle: '스테이지 공유하기', tintColor: COLORS.brandColor600 },
    );
  } catch (e) {
    console.error('shareStage:', e);
  }
}
