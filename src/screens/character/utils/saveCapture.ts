import { shareCharacter } from '@/utils/share';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import { PermissionsAndroid, Platform, Alert } from 'react-native';
import ViewShot from 'react-native-view-shot';

const capture = async (viewShotRef: React.RefObject<ViewShot>) => {
  if (!viewShotRef.current || !viewShotRef.current.capture) return;
  return await viewShotRef.current.capture();
};

const hasAndroidPermission = async () => {
  const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    return true;
  }

  const status = await PermissionsAndroid.request(permission);
  console.log('🔸 → hasAndroidPermission → status:', status);
  return status === 'granted';
};

const saveCapture = async (viewShotRef: React.RefObject<ViewShot>) => {
  const photoUri = await capture(viewShotRef);
  if (!photoUri) return;

  if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
    shareCharacter(photoUri);
    return;
  }

  CameraRoll.save(photoUri)
    .then(() => {
      Alert.alert('갤러리에 저장했어요', undefined, [
        {
          text: '공유하기',
          onPress: () => shareCharacter(photoUri),
          style: 'default',
        },
        { text: '닫기', style: 'cancel' },
      ]);
    })
    .catch(() => {
      Alert.alert('실패', '저장에 실패했어요 다시 시도해주세요');
    });
};

export default saveCapture;
