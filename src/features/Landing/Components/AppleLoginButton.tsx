import React from 'react';
import { Alert, View } from 'react-native';

import appleAuth, {
  AppleButton,
} from '@invertase/react-native-apple-authentication';

import globalStyles from '@/themes/globalStyles';
import { ScaledSheet } from '@/utils/scale';

interface AppleLoginButtonProps {
  onLoginSuccess: (socialToken: string) => void;
}

const styles = ScaledSheet.create({
  appleButton: {
    width: '100%',
    height: '50@vs',
  },
});

const AppleLoginButton = ({ onLoginSuccess }: AppleLoginButtonProps) => {
  const login = async () => {
    const responseObject = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });
    const credentialState = await appleAuth.getCredentialStateForUser(
      responseObject.user,
    );
    return { credentialState, token: responseObject.identityToken };
  };

  const handlePress = async () => {
    try {
      const { credentialState, token } = await login();
      if (credentialState === appleAuth.State.AUTHORIZED && token) {
        onLoginSuccess(token);
      } else {
        throw `Apple credential state is not AUTHORIZED: state ${credentialState}`;
      }
    } catch (error) {
      console.error('onAppleButtonPress:', error);
      Alert.alert('애플 로그인 실패', '다시 시도해주세요.');
    }
  };

  return (
    <View style={globalStyles.defaultFlexContainer}>
      <AppleButton
        buttonStyle={AppleButton.Style.BLACK}
        buttonType={AppleButton.Type.SIGN_IN}
        cornerRadius={5}
        style={styles.appleButton}
        onPress={handlePress}
      />
    </View>
  );
};

export default AppleLoginButton;
