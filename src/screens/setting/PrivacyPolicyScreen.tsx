import React from 'react';
import { View } from 'react-native';

import Header from '@/common/components/Header/Header';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '@/navigations/types';

const PrivacyPolicyScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <View>
      <Header
        title="개인정보 처리방침"
        onPressLeadingIcon={navigation.goBack}
      />
    </View>
  );
};

export default PrivacyPolicyScreen;
