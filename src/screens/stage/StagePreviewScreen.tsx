import React from 'react';
import { View } from 'react-native';

import globalStyles from '@/themes/globalStyles';
import Header from '@/common/components/Header/Header';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StageParamList } from '@/navigations/types';
import { WebView } from 'react-native-webview';
import shareStage from '@/utils/shareStage';
import { STAGE_PREVIEW_URL } from '@/constants/stage';
import { useUserStore } from '@/store/user';

const StagePreviewScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<StageParamList, 'StagePreview'>>();
  const { stageId, stageName } = route.params;
  const { user } = useUserStore();

  return (
    <View
      style={[
        globalStyles.defaultFlexContainer,
        globalStyles.defaultBackgroundColor,
      ]}
    >
      {user?.userId && (
        <>
          <Header
            title={stageName}
            onPressLeadingIcon={navigation.goBack}
            trailIcon="Share"
            onPressTrailingIcon={() => shareStage(stageId, user.userId)}
          />
          <WebView
            source={{
              uri: STAGE_PREVIEW_URL(stageId, user.userId),
            }}
          />
        </>
      )}
    </View>
  );
};

export default StagePreviewScreen;
