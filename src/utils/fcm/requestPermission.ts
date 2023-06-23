import messaging from '@react-native-firebase/messaging';
import { PermissionsAndroid, Platform } from 'react-native';

export async function requestPermission() {
  if (Platform.OS === 'ios') {
    return await requestIosPermission();
  } else if (Platform.OS === 'android') {
    return await requestAosPermission();
  } else {
    return false;
  }
}

async function requestAosPermission() {
  const permissionStatus = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
  );
  console.log(
    '🔸 → requestAosPermission → permissionStatus:',
    permissionStatus,
  );

  const enabled = permissionStatus === 'granted';
  return enabled;
}

async function requestIosPermission() {
  const authorizationStatus = await messaging().requestPermission();

  if (authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED) {
    console.log('User has notification permissions enabled.');
  } else if (
    authorizationStatus === messaging.AuthorizationStatus.PROVISIONAL
  ) {
    console.log('User has provisional notification permissions.');
  } else {
    console.log('User has notification permissions disabled');
  }

  const enabled =
    authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authorizationStatus === messaging.AuthorizationStatus.PROVISIONAL;

  return enabled;
}
