import { useCallback, useEffect, useState } from 'react';
import messaging from '@react-native-firebase/messaging';
import { registerForegroundFCMHandler } from '../utils/fcm/messageHandlers';
import { putToken } from '../utils/fcm/requests';
import { requestPermission } from '../utils/fcm/requestPermission';

export default function useFCM() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // 알림 권한 요청 및 권한 확인
    requestPermission().then(enabled => {
      setEnabled(enabled);
    });
    // Listen to whether the token changes
    return messaging().onTokenRefresh(putToken);
  }, []);

  useEffect(() => {
    // foreground message handler 등록
    let unsubscribe;
    if (enabled) {
      unsubscribe = registerForegroundFCMHandler();
    }
    return unsubscribe;
  }, [enabled]);

  const registerFcmToken = useCallback(() => {
    if (enabled) messaging().getToken().then(putToken);
  }, [enabled]);

  return { isFcmEnabled: enabled, registerFcmToken };
}
