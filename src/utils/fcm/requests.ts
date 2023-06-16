import messaging from '@react-native-firebase/messaging';
export const deleteToken = () => {
  messaging().deleteToken();
  // TODO: 로그아웃 시 토큰 삭제 요청 (앱 삭제 시에는 자동으로 삭제된다)
};

export const postToken = (token: string) => {
  console.log('🔸 → postToken → token:', token);
  // TODO: 서버에 post 요청
};

export const putToken = (token: string) => {
  console.log('🔸 → updateToken → token:', token);
  // TODO: 서버에 put 요청
};
