import React from 'react';
import { View } from 'react-native';

import Header from '@/common/components/Header/Header';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '@/navigations/types';
import { FINEME_WEB_URL } from '@/constants/config';
import WebView from 'react-native-webview';
import globalStyles from '@/themes/globalStyles';

const TermsScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  console.log(FINEME_WEB_URL);
  return (
    <View
      style={[
        globalStyles.defaultFlexContainer,
        globalStyles.defaultBackgroundColor,
      ]}
    >
      <Header title="사용자 이용약관" onPressLeadingIcon={navigation.goBack} />
      <WebView source={{ uri: FINEME_WEB_URL + '/terms/service' }} />
    </View>
  );
};

export default TermsScreen;
