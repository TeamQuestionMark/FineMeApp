import React from 'react';
import { Alert, Pressable } from 'react-native';

import useKakaoLogin from '@/hooks/useKakaoLogin';
import FastImage from 'react-native-fast-image';
import kakaoButtonImage from '@/assets/icons/KakaoLoginButton/kakao_login_large_wide.png';
import { postSocialToken, statusToResponseType } from '@/api/Login/api';
import { SOCIAL_LOGIN_RESPONSE } from '@/api/Login/types';
import { ScaledSheet } from '@/utils/scale';
import { Token } from '@/api/shared/type';

interface KakaoLoginButtonProps {
  onLoginSuccess: (
    type:
      | SOCIAL_LOGIN_RESPONSE.SUCCESS
      | SOCIAL_LOGIN_RESPONSE.FIRST_LOGIN_SUCCESS,
    data: Token,
  ) => void;
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
      const response = await postSocialToken('kakao', token.accessToken);
      const { status, data } = response;
      const type = statusToResponseType(status);
      if (
        type === SOCIAL_LOGIN_RESPONSE.SUCCESS ||
        type === SOCIAL_LOGIN_RESPONSE.FIRST_LOGIN_SUCCESS
      ) {
        onLoginSuccess(type, data.data);
      } else throw Error(data.message);
    } catch(e) {
      console.error('🔸 → handlePress → e:', e);
      Alert.alert('카카오 로그인에 실패했습니다.', '다시 시도해주세요.');
    }
  };

  return (
    <Pressable style={styles.kakaoButton} onPress={handlePress}>
      <FastImage style={styles.imageContainer} source={kakaoButtonImage} />
    </Pressable>
  );
};

export default KakaoLoginButton;
