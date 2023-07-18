import React from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';

import Logo from '@/assets/images/logo/image_fine_me_logo.png';
import { ScaledSheet } from '@/utils/scale';
import globalStyles from '@/themes/globalStyles';
import Icon from '@/common/components/Icon/Icon';
import { useNavigation } from '@react-navigation/native';
import { StageParamList } from '@/navigations/types';
import { StackNavigationProp } from '@react-navigation/stack';

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: '20@s',
  },
  logo: {
    width: '107@s',
    height: '27@vs',
  },
});

const StageMainHeader = () => {
  // TOTO: 알림시 아래 변수 이용
  const isNotificationConfirmed = false;
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
        icon={
          isNotificationConfirmed
            ? 'NotificationConfirmed'
            : 'NotificationUnconfirmed'
        }
        size={31}
        isPressable
        onPressIcon={onPressNotificationButton}
      />
    </View>
  );
};

export default StageMainHeader;
