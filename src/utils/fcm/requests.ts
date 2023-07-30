import { putFCMToken } from '@/api/User/api';
import messaging from '@react-native-firebase/messaging';
import { requestPermission } from './requestPermission';

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
