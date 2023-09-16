import { CODE_PUSH_DEPLOYMENT_KEY_IOS } from '@/constants/config';
import { isIOS } from '@/utils/device';
import CodePush from 'react-native-code-push';
import SplashScreen from 'react-native-splash-screen';
import { create } from 'zustand';

const codePushVersionInitialState = {
  codePushMetaData: {
    isPending: false,
    label: '',
    failedInstall: false,
    deploymentKey: '',
    isFirstRun: false,
  },
  isUpdateAvailable: true,
};

type CodePushVersionStore = typeof codePushVersionInitialState & {
  getCodePushMetaData: () => Promise<void>;
  checkCodePushUpdate: () => Promise<void>;
  init: () => Promise<void>;
};

export const useCodePushVersionStore = create<CodePushVersionStore>()(
  (set, get) => ({
    ...codePushVersionInitialState,
    getCodePushMetaData: async () => {
      const codePushMetaData = await CodePush.getUpdateMetadata();
      set({
        codePushMetaData:
          codePushMetaData || codePushVersionInitialState.codePushMetaData,
      });
    },
    checkCodePushUpdate: async () => {
      try {
        const codePushUpdateStatus = await CodePush.checkForUpdate(
          isIOS ? CODE_PUSH_DEPLOYMENT_KEY_IOS : undefined,
        );
        set({ isUpdateAvailable: !!codePushUpdateStatus });
      } catch (error) {
        set({ isUpdateAvailable: false });
        SplashScreen.hide();
      }
    },
    init: async () => {
      try {
        await get().checkCodePushUpdate();
        await get().getCodePushMetaData();
      } catch (error) {
        console.log('init Codepush error');
      }
    },
  }),
);
