import React from 'react';
import { Pressable } from 'react-native';

import FastImage from 'react-native-fast-image';
import kakaoButtonImage from '@/assets/icons/KakaoLoginButton/kakao_login_large_wide.png';
import { ScaledSheet } from '@/utils/scale';

interface KakaoLoginButtonProps {
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

const KakaoLoginButton = ({ }: KakaoLoginButtonProps) => {

  return (
    <Pressable style={styles.kakaoButton}>
      <FastImage style={styles.imageContainer} source={kakaoButtonImage} />
    </Pressable>
  );
};

export default KakaoLoginButton;
