import * as Kakao from '@react-native-seoul/kakao-login';

export default function useKakaoLogin() {
  //TODO: 에러 핸들링
  const login = async () => {
    try {
      const token = await Kakao.loginWithKakaoAccount();
      return token;
    } catch (err) {
      console.log('🔸 → file: useKakao.ts:12 → login → err:', JSON.stringify(err));
      throw err
    }
  };

  const logout = async () => {
    try {
      const message = await Kakao.logout();
      return message;
    } catch (err) {
      console.log('🔸 → file: useKakao.ts:21 → logout → err:', err);
    }
  };

  const getProfile = async () => {
    try {
      const profile = await Kakao.getProfile();
      // TODO: 필요한 데이터가 없을 경우 처리
      return profile;
    } catch (err) {
      console.log('🔸 → file: useKakao.ts:30 → getProfile → err:', err);
    }
  };

  const unlink = async () => {
    try {
      const message = await Kakao.unlink();
      return message;
    } catch (err) {
      console.log('🔸 → file: useKakao.ts:39 → unlink → err:', err);
    }
  };

  return { login, logout, getProfile, unlink };
}
