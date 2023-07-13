import React from 'react';
import { View } from 'react-native';

import globalStyles from '@/themes/globalStyles';
import Header from '@/common/components/Header/Header';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StageParamList } from '@/navigations/types';
import { WebView } from 'react-native-webview';
import { FINEME_WEB_URL } from '@/constants/config';

const StagePreviewScreen = () => {
  const route = useRoute<RouteProp<StageParamList, 'StagePreview'>>();
  return (
    <View
      style={[
        globalStyles.defaultFlexContainer,
        globalStyles.defaultBackgroundColor,
      ]}
    >
      <Header title="회사" trailIcon="Share" />
      <WebView
        source={{
          uri: FINEME_WEB_URL + `/stage/preview?type=${route.params.stageType}`,
        }}
      />
    </View>
  );
};

export default StagePreviewScreen;
