import React from 'react';
import { View } from 'react-native';

import Header from '@/common/components/Header/Header';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '@/navigations/types';
import WebView from 'react-native-webview';
import { FINEME_WEB_URL } from '@/constants/config';
import globalStyles from '@/themes/globalStyles';

const PrivacyPolicyScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <View
      style={[
        globalStyles.defaultFlexContainer,
        globalStyles.defaultBackgroundColor,
      ]}
    >
      <Header
        title="개인정보 처리방침"
        onPressLeadingIcon={navigation.goBack}
      />
      <WebView source={{ uri: FINEME_WEB_URL + '/terms/privacy' }} />
    </View>
  );
};

export default PrivacyPolicyScreen;
