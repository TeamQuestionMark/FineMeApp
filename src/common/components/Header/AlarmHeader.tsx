import React, { useMemo } from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';

import Logo from '@/assets/images/logo/image_fine_me_logo.png';
import { ScaledSheet } from '@/utils/scale';
import globalStyles from '@/themes/globalStyles';
import Icon from '@/common/components/Icon/Icon';
import { useNavigation } from '@react-navigation/native';
import { StageParamList } from '@/navigations/types';
import { StackNavigationProp } from '@react-navigation/stack';
import useNotifications from '@/api/Notification/hooks/useNotifications';

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: '20@s',
  },
  logo: {
    width: '107@s',
    height: '27@vs',
  },
});

const AlarmHeader = () => {
  const { data: notifications } = useNotifications();
  const hasNewNoti = useMemo(
    () =>
      notifications?.notificationLists.find(noti => noti.readYn === 'N') !==
      undefined,
    [notifications?.notificationLists],
  );

  const navigation = useNavigation<StackNavigationProp<StageParamList>>();

  const onPressNotificationButton = () => {
    navigation.navigate('Notification');
  };

  return (
    <View
      style={[
        globalStyles.rowAlignCenterContainer,
        globalStyles.justifySpaceBetween,
        styles.container,
      ]}
    >
      <FastImage source={Logo} style={styles.logo} />
      <Icon
        icon={hasNewNoti ? 'NotificationUnconfirmed' : 'NotificationConfirmed'}
        size={31}
        isPressable
        onPressIcon={onPressNotificationButton}
      />
    </View>
  );
};

export default AlarmHeader;
