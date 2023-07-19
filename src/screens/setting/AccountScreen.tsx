import React from 'react';
import { View } from 'react-native';

import Header from '@/common/components/Header/Header';
import { NavigationProps } from '@/navigations/types';
import { useNavigation } from '@react-navigation/native';

const AccountScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <View>
      <Header title="계정 정보" onPressLeadingIcon={navigation.goBack} />
    </View>
  );
};

export default AccountScreen;
