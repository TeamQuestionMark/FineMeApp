import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';
import { queryClient } from '../queryClient';
import { notificationQueryKey } from '@/api/shared/queryKey';

export function registerForegroundFCMHandler() {
  return messaging().onMessage(async remoteMessage => {
    const body = remoteMessage.notification?.body;
    const title = remoteMessage.notification?.title;
    queryClient.invalidateQueries(notificationQueryKey.lists());

    if (body && title) {
      Alert.alert(title, body);
    } else {
      Alert.alert('새로운 답변이 도착했습니다!', '마이페이지에서 확인해주세요');
    }
  });
}

export function registerBackgroundFCMHandler() {
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    queryClient.invalidateQueries(notificationQueryKey.lists());
    console.log('Message handled in the background!', remoteMessage);
  });
}
