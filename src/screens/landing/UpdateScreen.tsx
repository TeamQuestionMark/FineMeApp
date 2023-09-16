import React, { useCallback, useEffect, useState } from 'react';

import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { round } from 'lodash';
import ProgressBar from 'react-native-animated-progress';
import CodePush from 'react-native-code-push';
import SplashScreen from 'react-native-splash-screen';
import { ScaledSheet } from '@/utils/scale';
import { COLORS } from '@/themes/colors';
import { NavigationProps } from '@/navigations/types';
import { useCodePushVersionStore } from '@/store/codePushVersionStore';
import { isIOS } from '@/utils/device';
import { CODE_PUSH_DEPLOYMENT_KEY_IOS } from '@/constants/config';
import { Button } from '@/common/components/Button';
import { useUserStore } from '@/store/user';
import Text from '@/common/components/Text';
import Logo from '@/common/components/Logo/Logo';
import { Divider } from '@/common/components/Divider';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  progressContainer: {
    width: '120@s',
  },
  button: {
    position: 'absolute',
    bottom: '32@vs',
  },
});

const UpdateScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  const [progress, setProgress] = useState<number>(10);
  const [shouldRender, setShouldRender] = useState<boolean>(false);

  const isUpdateAvailable = useCodePushVersionStore(
    state => state.isUpdateAvailable,
  );

  const handlePressSkipUpdate = () => {
    useCodePushVersionStore.setState({ isUpdateAvailable: false });
  };

  const codePushDownloadDidProgress = useCallback(
    (loading: { totalBytes: number; receivedBytes: number }) => {
      const progressState = round(
        (loading.receivedBytes / loading.totalBytes) * 100,
      );
      setProgress(progressState);
    },
    [],
  );

  const codePushStatusDidChange = useCallback((status: CodePush.SyncStatus) => {
    switch (status) {
      case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
        break;
      case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
        setShouldRender(true);
        SplashScreen.hide();
        break;
      case CodePush.SyncStatus.INSTALLING_UPDATE:
        break;
      case CodePush.SyncStatus.UPDATE_INSTALLED:
        useCodePushVersionStore.setState({ isUpdateAvailable: false });
        break;
      case CodePush.SyncStatus.UP_TO_DATE:
        useCodePushVersionStore.setState({ isUpdateAvailable: false });
        break;
      default:
        break;
    }
  }, []);

  useEffect(() => {
    try {
      CodePush.sync(
        isIOS
          ? {
              installMode: CodePush.InstallMode.IMMEDIATE,
              mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
              deploymentKey: CODE_PUSH_DEPLOYMENT_KEY_IOS,
            }
          : {
              installMode: CodePush.InstallMode.IMMEDIATE,
              mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
            },
        codePushStatusDidChange,
        codePushDownloadDidProgress,
      );
    } catch (e) {
      console.log('codepush error:', e);
    }
  }, [codePushDownloadDidProgress, codePushStatusDidChange]);

  useEffect(() => {
    if (!isUpdateAvailable) {
      navigation.navigate('Login');
    }
  }, [isUpdateAvailable, navigation]);

  return shouldRender ? (
    <View style={styles.container}>
      <Divider vertical={120} />
      <Text
        fontSize="16"
        fontWeight="bold"
        textAlign="center"
        marginBottom={11}
      >
        괜찮은 나를 확인하세요!
      </Text>
      <Logo size="large" />
      <Divider vertical={100} />
      <View style={styles.progressContainer}>
        <ProgressBar
          progress={progress}
          height={6}
          trackColor={COLORS.gray200}
          backgroundColor={COLORS.error100}
        />
      </View>
      <View style={styles.button}>
        <Button title="건너뛰기" width={320} onPress={handlePressSkipUpdate} />
      </View>
    </View>
  ) : (
    <View />
  );
};

export default UpdateScreen;
