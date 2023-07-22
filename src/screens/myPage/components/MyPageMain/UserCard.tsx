import React from 'react';
import { View } from 'react-native';

import { useUserStore } from '@/store/user';
import { ScaledSheet } from '@/utils/scale';

import DefaultUserImage from '@/assets/images/user/image_default_user.png';
import globalStyles from '@/themes/globalStyles';
import FastImage from 'react-native-fast-image';
import { Divider } from '@/common/components/Divider';
import Text from '@/common/components/Text';
import { COLORS } from '@/themes/colors';

const styles = ScaledSheet.create({
  container: {
    width: '100%',
  },
  image: {
    width: '68@s',
    height: '68@s',
  },
  stage: {
    width: '104@s',
    height: '24@vs',
    borderRadius: '61@s',
    backgroundColor: COLORS.brandColor100,
  },
});

const UserCard = () => {
  const { user } = useUserStore();

  //TODO: list 개수
  const totalStageLength = 9;

  return (
    <View style={[globalStyles.rowAlignCenterContainer, styles.container]}>
      <FastImage source={DefaultUserImage} style={styles.image} />
      <Divider horizontal={20} />
      <View style={globalStyles.defaultFlexContainer}>
        <Text fontSize="16" fontWeight="bold" color={COLORS.black}>
          {`${user?.nickname || ''} 님`}
        </Text>
        <Divider vertical={7} />
        <View
          style={[
            globalStyles.alignCenter,
            globalStyles.justifyCenter,
            styles.stage,
          ]}
        >
          <Text fontSize="14" fontWeight="bold" color={COLORS.brandColor500}>
            {`${totalStageLength}개의 스테이지`}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default UserCard;
