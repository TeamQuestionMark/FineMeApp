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
import { Shadow } from 'react-native-shadow-2';
import { StageMainCardProps } from './type';
import { isIOS } from '@/utils/device';
import { CustomShadow } from '@/common/components/Shadow';

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
  const contentsObj = useMemo(() => {
    switch (type) {
      case 'work':
        return {
          title: '회사에서 일하는',
          url: '',
          image: work,
        };
      case 'cafe':
        return {
          title: '카페에서 일하는',
          url: '',
          image: cafe,
        };
      case 'home':
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

  // TOTO: 이동 시키기
  const onPressNavigateToSample = () => {};

  const onPressShareButton = () => {};

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