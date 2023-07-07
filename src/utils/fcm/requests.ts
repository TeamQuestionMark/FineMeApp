import { putFCMToken } from '@/api/User/api';
import messaging from '@react-native-firebase/messaging';
export const deleteToken = () => {
  messaging().deleteToken();
  // TODO: 로그아웃 시 토큰 삭제 요청 (앱 삭제 시에는 자동으로 삭제된다)
};

export const putToken = (token: string) => {
  putFCMToken({}).then((data) => {
    console.log('Succeed to PUT FCM token')
  }).catch(() => {
    console.error('Failed to PUT FCM token')
  })
};
