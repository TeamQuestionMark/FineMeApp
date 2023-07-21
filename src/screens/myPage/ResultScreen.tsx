import React from 'react';
import { View } from 'react-native';

import { STAGE_RESULT_URL } from '@/constants/stage';
import globalStyles from '@/themes/globalStyles';
import WebView from 'react-native-webview';
import { Header } from '@/common/components/Header';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { MyPageParamList } from '@/navigations/types';
import { shareResult } from '@/utils/share';

const ResultScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<MyPageParamList, 'Result'>>();
  const { uuid } = route.params;

  return (
    <View
      style={[
        globalStyles.defaultFlexContainer,
        globalStyles.defaultBackgroundColor,
      ]}
    >
      <Header
        title="결과 확인"
        onPressLeadingIcon={navigation.goBack}
        trailIcon="Share"
        onPressTrailingIcon={() => shareResult(uuid)}
      />
      <WebView
        source={{
          uri: STAGE_RESULT_URL(uuid),
        }}
      />
    </View>
  );
};

export default ResultScreen;
