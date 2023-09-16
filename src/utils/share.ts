import { STAGE_RESULT_URL, STAGE_URL } from '@/constants/stage';
import Share from 'react-native-share';

export async function shareStage(stageId: number, userId: number) {
  try {
    await Share.open({
      title: '스테이지 공유하기',
      message: `당신이 보는 내 모습은?
${STAGE_URL(stageId, userId)}`,
      url: STAGE_URL(stageId, userId),
    });
  } catch (e) {
    console.error('shareStage:', e);
  }
}
export async function shareResult(uuid: string) {
  try {
    await Share.open({
      title: '스테이지 결과 공유하기',
      message: `당신이 보는 내 모습은?
${STAGE_RESULT_URL(uuid)}`,
      url: STAGE_RESULT_URL(uuid),
    });
  } catch (e) {
    console.error('shareStage:', e);
  }
}

export async function shareCharacter(uri: string) {
  try {
    Share.open({
      title: '내 캐릭터 공유하기',
      url: uri,
      type: 'image/jpeg',
    });
  } catch (e) {
    console.error('shareCharacter', e);
  }
}
