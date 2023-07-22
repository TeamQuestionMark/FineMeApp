import React from 'react';
import { ScrollView, View } from 'react-native';

import { COLORS } from '@/themes/colors';
import { MyPageMain } from './components';
import globalStyles from '@/themes/globalStyles';

const MyPageScreen = () => {
  return (
    <View
      style={[
        globalStyles.defaultFlexContainer,
        { backgroundColor: COLORS.white },
      ]}
    >
      <ScrollView>
        <MyPageMain />
      </ScrollView>
    </View>
  );
};

export default MyPageScreen;
