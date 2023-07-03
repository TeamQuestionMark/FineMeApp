import React from 'react';
import { Alert, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Text from '@/common/components/Text';
import Logo from '@/common/components/Logo/Logo';
import { ScaledSheet } from '@/utils/scale';
import { AppleLoginButton } from '@/features/Landing/Components';
import KakaoLoginButton from '@/features/Landing/Components/KakaoLoginButton';
import { SOCIAL_LOGIN_RESPONSE } from '@/api/Login/types';
import { Token } from '@/api/shared/type';
import STORAGE_KEY from '@/constants/storageKey';

const styles = ScaledSheet.create({
  titleWrapper: {
    marginTop: '120@vs',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {},
  buttonGroup: {
    marginTop: '208@vs',
    paddingHorizontal: '20@s',
    rowGap: '24@vs',
  },
});
const LoginScreen = () => {
  const handleLoginSuccess = async (
    type:
      | SOCIAL_LOGIN_RESPONSE.SUCCESS
      | SOCIAL_LOGIN_RESPONSE.FIRST_LOGIN_SUCCESS,
    token: Token,
  ) => {
    try {
      await AsyncStorage.multiSet([
        [STORAGE_KEY.accessToken, token.accessToken],
        [STORAGE_KEY.refreshToken, token.refreshToken],
      ]);
      if (type === SOCIAL_LOGIN_RESPONSE.FIRST_LOGIN_SUCCESS) {
        // TODO: 추가 정보 기입 페이지로 이동
      } else {
        // TODO: 홈 페이지로 이동
      }
      Alert.alert('로그인 성공')
    } catch (e) {
      console.error('AsyncStorage Error:', e);
    }
  };

  return (
    <View>
              
      <View style={styles.titleWrapper}>
        <Text fontSize='16' fontWeight='bold' textAlign='center' marginBottom={11} >
            괜찮은 나를 확인하세요!
        </Text>
        <Logo size="large" />
      </View>
      <View style={styles.buttonGroup}>
        <KakaoLoginButton onLoginSuccess={handleLoginSuccess} />
        <AppleLoginButton />
      </View>
    </View>
  );
};

export default LoginScreen;
