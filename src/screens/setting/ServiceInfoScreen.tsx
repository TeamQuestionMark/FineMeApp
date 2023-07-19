import React from 'react';
import { View } from 'react-native';

import Header from '@/common/components/Header/Header';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '@/navigations/types';

const ServiceInfoScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  return (
    <View>
      <Header title="서비스 소개" onPressLeadingIcon={navigation.goBack} />
    </View>
  );
};

export default ServiceInfoScreen;
