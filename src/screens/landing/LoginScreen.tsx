import React from 'react';
import { Alert, View } from 'react-native';
import Text from '@/common/components/Text';
import Logo from '@/common/components/Logo/Logo';
import { ScaledSheet } from '@/utils/scale';
import { AppleLoginButton } from '@/features/Landing/Components';
import KakaoLoginButton from '@/features/Landing/Components/KakaoLoginButton';
import { SOCIAL_LOGIN_RESPONSE } from '@/api/Login/types';
import { useUserStore } from '@/store/user';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/navigations/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { isIOS } from '@/utils/device';
import { COLORS } from '@/themes/colors';
import globalStyles from '@/themes/globalStyles';

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
  const { socialLogin, getUser } = useUserStore();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const handleSocialLoginSuccess = async (
    social: 'apple' | 'kakao',
    socialToken: string,
  ) => {
    const responseType = await socialLogin(social, socialToken);
    console.log('🔸 → LoginScreen → socialToken:', socialToken);
    if (responseType === SOCIAL_LOGIN_RESPONSE.FIRST_LOGIN_SUCCESS) {
      Alert.alert('추가 정보를 입력해주세요');
      navigation.replace('EditProfile');
    } else if (responseType === SOCIAL_LOGIN_RESPONSE.SUCCESS) {
      getUser().then(() => Alert.alert('로그인 성공'));
    } else {
      Alert.alert('로그인 실패', '다시 시도해주세요.');
    }
  };

  return (
    <View
      style={{
        ...globalStyles.defaultFlexContainer,
        backgroundColor: COLORS.brandColor50,
      }}
    >
      <View style={styles.titleWrapper}>
        <Text
          fontSize="16"
          fontWeight="bold"
          textAlign="center"
          marginBottom={11}
        >
          괜찮은 나를 확인하세요!
        </Text>
        <Logo size="large" />
      </View>
      <View style={styles.buttonGroup}>
        <KakaoLoginButton
          onLoginSuccess={token => handleSocialLoginSuccess('kakao', token)}
        />
        {isIOS && (
          <AppleLoginButton
            onLoginSuccess={token => handleSocialLoginSuccess('apple', token)}
          />
        )}
      </View>
    </View>
  );
};

export default LoginScreen;
