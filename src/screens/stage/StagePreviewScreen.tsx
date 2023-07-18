import React from 'react';
import { View } from 'react-native';

import globalStyles from '@/themes/globalStyles';
import Header from '@/common/components/Header/Header';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StageParamList } from '@/navigations/types';
import { WebView } from 'react-native-webview';
import shareStage from '@/utils/shareStage';
import { STAGE_PREVIEW_URL } from '@/constants/stage';

const StagePreviewScreen = () => {
  const route = useRoute<RouteProp<StageParamList, 'StagePreview'>>();
  const { stageId, stageName } = route.params;

  return (
    <View
      style={[
        globalStyles.defaultFlexContainer,
        globalStyles.defaultBackgroundColor,
      ]}
    >
      <Header
        title={stageName}
        trailIcon="Share"
        onPressTrailingIcon={() => shareStage(stageId)}
      />
      <WebView
        source={{
          uri: STAGE_PREVIEW_URL(stageId),
        }}
      />
    </View>
  );
};

export default StagePreviewScreen;
