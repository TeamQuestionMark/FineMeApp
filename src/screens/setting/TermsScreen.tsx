import React from 'react';
import { View } from 'react-native';

import Header from '@/common/components/Header/Header';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '@/navigations/types';

const TermsScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <View>
      <Header title="사용자 이용약관" onPressLeadingIcon={navigation.goBack} />
    </View>
  );
};

export default TermsScreen;
