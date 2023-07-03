import React from 'react';
import { Alert, Pressable } from 'react-native';

import useKakaoLogin from '@/hooks/useKakaoLogin';
import FastImage from 'react-native-fast-image';
import kakaoButtonImage from '@/assets/icons/KakaoLoginButton/kakao_login_large_wide.png';
import { ScaledSheet } from '@/utils/scale';

interface KakaoLoginButtonProps {
  onLoginSuccess: (socialToken: string) => void
}

const styles = ScaledSheet.create({
  kakaoButton: {
    width: '100%',
  },
  imageContainer: {
    width: '100%',
    height: '50@vs',
  },
});

const KakaoLoginButton = ({ onLoginSuccess }: KakaoLoginButtonProps) => {
  const { login } = useKakaoLogin();
  const handlePress = async () => {
    try {
      const token = await login();
      onLoginSuccess(token.accessToken)
    } catch(e) {
      console.error('🔸 → handlePress → e:', e);
      Alert.alert('카카오 로그인 실패', '다시 시도해주세요.');
    }
  };

  return (
    <Pressable style={styles.kakaoButton} onPress={handlePress}>
      <FastImage style={styles.imageContainer} source={kakaoButtonImage} />
    </Pressable>
  );
};

export default KakaoLoginButton;
