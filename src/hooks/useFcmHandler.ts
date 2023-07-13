import { useEffect, useState } from 'react';
import messaging from '@react-native-firebase/messaging';
import { registerForegroundFCMHandler } from '../utils/fcm/messageHandlers';
import { requestPermission } from '../utils/fcm/requestPermission';
import { putFCMToken } from '@/api/User/api';

export default function useFcmHandler() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // 알림 권한 요청 및 권한 확인
    requestPermission().then(isFcmEnabled => {
      setEnabled(isFcmEnabled);
    });
    // Listen to whether the token changes
    return messaging().onTokenRefresh(token =>
      putFCMToken({ fcmId: token }).catch(() => null),
    );
  }, []);

  useEffect(() => {
    // foreground message handler 등록
    let unsubscribe;
    if (enabled) {
      unsubscribe = registerForegroundFCMHandler();
    }
    return unsubscribe;
  }, [enabled]);

  return { isFcmEnabled: enabled };
}
