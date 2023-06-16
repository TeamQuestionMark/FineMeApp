import { useEffect, useState } from 'react';
import messaging from '@react-native-firebase/messaging';
import { registerForegroundFCMHandler } from './messageHandlers';
import { postToken, putToken } from './requests';
import { requestPermission } from './requestPermission';

export default function useFCM() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    requestPermission().then(enabled => {
      setEnabled(enabled);
      if (enabled) messaging().getToken().then(postToken);
    });
    // Listen to whether the token changes
    return messaging().onTokenRefresh(putToken);
  }, []);

  useEffect(() => {
    let unsubscribe;
    if (enabled) {
      unsubscribe = registerForegroundFCMHandler();
    }
    return unsubscribe;
  }, [enabled]);
}
