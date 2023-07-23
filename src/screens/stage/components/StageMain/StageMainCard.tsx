import { ScaledSheet } from '@/utils/scale';
import React, { useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import work from '@/assets/images/mainCard/image_work_card.png';
import cafe from '@/assets/images/mainCard/image_cafe_card.png';
import home from '@/assets/images/mainCard/image_home_card.png';
import ArrowRight from '@/assets/icons/CircleArrow/icon-circle-right.png';
import globalStyles from '@/themes/globalStyles';
import Text from '@/common/components/Text';
import { COLORS } from '@/themes/colors';
import { Divider } from '@/common/components/Divider';
import { StageMainCardProps } from './type';
import { CustomShadow } from '@/common/components/Shadow';
import { useNavigation } from '@react-navigation/native';
import { StageParamList } from '@/navigations/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { STAGE_ID_MAP } from '@/constants/stage';
import { shareStage } from '@/utils/share';
import { useUserStore } from '@/store/user';

const styles = ScaledSheet.create({
  container: {
    width: '280@s',
    borderWidth: 2,
    borderColor: COLORS.black,
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '190@vs',
  },
  cardContainer: {
    width: '100%',
    paddingVertical: '20@vs',
    paddingHorizontal: '16@s',
    borderTopWidth: 2,
    backgroundColor: COLORS.white,
  },
  icon: {
    width: '34@s',
    height: '36@s',
  },
});

const StageMainCard = ({ type }: StageMainCardProps) => {
  const { user } = useUserStore();
  const navigation = useNavigation<StackNavigationProp<StageParamList>>();
  const contentsObj = useMemo(() => {
    switch (type) {
      case '회사':
        return {
          title: '회사에서 일하는',
          url: '',
          image: work,
        };
      case '카페':
        return {
          title: '카페에서 일하는',
          url: '',
          image: cafe,
        };
      case '집':
        return {
          title: '집에서 일하는',
          url: '',
          image: home,
        };
      default:
        return {
          title: '회사에서 일하는',
          url: '',
          image: work,
        };
    }
  }, [type]);

  const onPressNavigateToSample = () => {
    navigation.navigate('StagePreview', {
      stageId: STAGE_ID_MAP[type],
      stageName: type,
    });
  };

  const onPressShareButton = () => {
    if (user?.userId) shareStage(STAGE_ID_MAP[type], user?.userId);
  };

  return (
    <View style={[globalStyles.rowAlignCenterContainer]}>
      <Divider horizontal={48} />
      <CustomShadow>
        <View style={styles.container}>
          <FastImage source={contentsObj?.image} style={styles.image} />
          <View style={styles.cardContainer}>
            <TouchableOpacity
              style={[
                globalStyles.rowAlignCenterContainer,
                globalStyles.justifySpaceBetween,
                { width: '100%' },
              ]}
              onPress={onPressNavigateToSample}
              activeOpacity={0.7}
            >
              <View style={[{ width: 165, height: 48 }]}>
                <Text fontSize="16" fontWeight="bold" color={COLORS.black}>
                  {contentsObj?.title}
                </Text>
                <Text fontSize="16" fontWeight="bold" color={COLORS.black}>
                  내 모습은?
                </Text>
              </View>
              <FastImage source={ArrowRight} style={styles.icon} />
            </TouchableOpacity>
            <Divider vertical={20} />
            <TouchableOpacity
              style={{ height: 20 }}
              activeOpacity={0.7}
              onPress={onPressShareButton}
            >
              <Text
                fontSize="14"
                fontWeight="bold"
                color={COLORS.active100}
                textDecorationLine="underline"
              >
                스테이지 공유하기
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </CustomShadow>
    </View>
  );
};

export default StageMainCard;
