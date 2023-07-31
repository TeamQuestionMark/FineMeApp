import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';

export function registerForegroundFCMHandler() {
  return messaging().onMessage(async remoteMessage => {
    const body = remoteMessage.notification?.body;
    const title = remoteMessage.notification?.title;
    if (body && title) {
      Alert.alert(title, body);
    } else {
      Alert.alert('새로운 답변이 도착했습니다!', '마이페이지에서 확인해주세요');
    }
  });
}

export function registerBackgroundFCMHandler() {
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });
}
