import React from 'react';
import { View } from 'react-native';

import appleAuth, {
  AppleButton,
} from '@invertase/react-native-apple-authentication';

import globalStyles from '@/themes/globalStyles';
import { ScaledSheet } from '@/utils/scale';

const styles = ScaledSheet.create({
  appleButton: {
    width: '100%',
    height: '50@vs',
  },
});

const AppleLoginButton = () => {
  const onAppleButtonPress = async () => {
    try {
      const responseObject = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });
      console.log('responseObject:::', responseObject);
      const credentialState = await appleAuth.getCredentialStateForUser(
        responseObject.user,
      );
      if (credentialState === appleAuth.State.AUTHORIZED) {
        console.log('user is authenticated');
      }
    } catch (error) {
      console.log('onAppleButtonPress error', error);
      if (error === appleAuth.Error.CANCELED) {
        console.log('canceled');
      } else {
        console.log('error');
      }
    }
  };

  return (
    <View style={globalStyles.defaultFlexContainer}>
      <AppleButton
        buttonStyle={AppleButton.Style.BLACK}
        buttonType={AppleButton.Type.SIGN_IN}
        cornerRadius={5}
        style={styles.appleButton}
        onPress={() => onAppleButtonPress()}
      />
    </View>
  );
};

export default AppleLoginButton;
