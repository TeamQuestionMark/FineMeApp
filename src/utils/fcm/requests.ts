import { putFCMToken } from '@/api/User/api';
import messaging from '@react-native-firebase/messaging';
import { requestPermission } from './requestPermission';
export const deleteFCMToken = () => {
  messaging().deleteToken();
  // TODO: 로그아웃 시 토큰 삭제 요청 (앱 삭제 시에는 자동으로 삭제된다)
};

export const registerFcmToken = () => {
  requestPermission()
    .then(enabled => {
      enabled &&
        messaging()
          .getToken()
          .then(token => putFCMToken({ fcmId: token }))
          .catch(console.error);
    })
    .catch(console.error);
};
