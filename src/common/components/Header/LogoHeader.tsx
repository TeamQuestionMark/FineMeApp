import React, { useCallback, useMemo } from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';

import Logo from '@/assets/images/logo/image_fine_me_logo.png';
import { ScaledSheet } from '@/utils/scale';
import globalStyles from '@/themes/globalStyles';
import Icon from '@/common/components/Icon/Icon';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList, StageParamList } from '@/navigations/types';
import { StackNavigationProp } from '@react-navigation/stack';
import * as Icons from '@/assets/icons/svgIcons/index';

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: '20@s',
  },
  logo: {
    width: '107@s',
    height: '27@vs',
  },
});

interface LogoHeaderProps {
  icon?: 'Notification' | 'Setting';
  hasNewNotification?: boolean;
}

const LogoHeader = ({
  icon = 'Notification',
  hasNewNotification = false,
}: LogoHeaderProps) => {
  const navigation = useNavigation<StackNavigationProp<StageParamList>>();

  const getIcon = useMemo(() => {
    switch (icon) {
      case 'Notification':
        return {
          icon: hasNewNotification
            ? 'NotificationUnconfirmed'
            : 'NotificationConfirmed',
        };
      case 'Setting':
        return {
          icon: 'Setting',
        };
      default:
        return {
          icon: 'Setting',
        };
    }
  }, [icon, hasNewNotification]);

  const onPressNotificationButton = useCallback(() => {
    if (icon === 'Notification') {
      navigation.navigate('Notification');
    } else if (icon === 'Setting') {
      navigation.navigate('Setting');
    }
  }, [icon]);

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
        icon={getIcon.icon as keyof typeof Icons}
        size={31}
        isPressable
        onPressIcon={onPressNotificationButton}
      />
    </View>
  );
};

export default LogoHeader;
