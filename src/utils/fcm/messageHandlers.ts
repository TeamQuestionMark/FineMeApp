import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';

export function registerForegroundFCMHandler() {
  return messaging().onMessage(async remoteMessage => {
    Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  });
}

export function registerBackgroundFCMHandler() {
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });
}
