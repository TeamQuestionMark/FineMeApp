import React, { useCallback, useMemo } from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';

import globalStyles from '@/themes/globalStyles';
import { ScaledSheet, s } from '@/utils/scale';
import { COLORS } from '@/themes/colors';
import Text from '@/common/components/Text';
import { Divider } from '@/common/components/Divider';
import ImageWork from '@/assets/images/customCard/image_work_custom.png';
import ImageCaffe from '@/assets/images/customCard/image_cafe_custom.png';
import ImageHome from '@/assets/images/customCard/image_home_custom.png';
import { NavigationProps } from '@/navigations/types';
import Icon from '@/common/components/Icon/Icon';
import WhiteCircleImage from '@/assets/images/circleButton/image_shadow_white_circle.png';
import { shareResult } from '@/utils/share';
import { CustomStageResult } from '@/api/Question/type';

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    paddingVertical: '22@vs',
    paddingHorizontal: '24@s',
    borderWidth: 2,
    borderRadius: 15,
  },
  chip: {
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  image: {
    width: '70@s',
    height: '70@s',
  },
  shareContainer: {
    width: '48@s',
    height: '50@s',
    backgroundColor: COLORS.white,
  },
});

export type StageCardType = 'MAIN' | 'CUSTOM';
interface StageCardProps extends CustomStageResult {
  stageType: StageCardType;
}

const StageCard = ({
  stageType,
  stageName,
  stageResultCount,
  categoryName,
  stageNo,
  uuid,
}: StageCardProps) => {
  const navigation = useNavigation<NavigationProps>();
  const isStageTypeCustom = stageType === 'CUSTOM';

  const ImageValue = useMemo(() => {
    switch (stageName) {
      case '회사':
        return ImageWork;
      case '카페':
        return ImageCaffe;
      case '집':
        return ImageHome;
      default:
        return ImageWork;
    }
  }, [stageName]);

  const renderChip = useCallback(
    ({ text, type }: { text: string; type: 'category' | 'response' }) => {
      const isCategoryType = type === 'category';
      const backgroundColorStyle = {
        backgroundColor: isCategoryType
          ? COLORS.brandColor200
          : COLORS.brandColor100,
      };
      const textColor = isCategoryType
        ? COLORS.brandColor800
        : COLORS.brandColor700;

      return (
        <View style={[backgroundColorStyle, styles.chip]}>
          <Text fontSize="13" fontWeight="Regular" color={textColor}>
            {text}
          </Text>
        </View>
      );
    },
    [],
  );

  const onPressMoveToResultPage = () => {
    navigation.navigate('Result', { uuid: uuid });
  };
  const onPressShare = () => {
    shareResult(String(stageNo));
  };

  return (
    <View
      style={[
        globalStyles.rowAlignCenterContainer,
        globalStyles.justifySpaceBetween,
        styles.container,
      ]}
    >
      <View
        style={[
          globalStyles.rowAlignCenterContainer,
          { maxWidth: s(isStageTypeCustom ? 194 : 132) },
        ]}
      >
        {!isStageTypeCustom && (
          <View style={globalStyles.rowContainer}>
            <FastImage source={ImageValue} style={styles.image} />
            <Divider horizontal={11} />
          </View>
        )}
        <View>
          <View style={[globalStyles.rowContainer]}>
            {isStageTypeCustom && (
              <View style={globalStyles.rowContainer}>
                {renderChip({ text: categoryName || '', type: 'category' })}
                <Divider horizontal={8} />
              </View>
            )}
            {renderChip({
              text: `${isStageTypeCustom ? '응답' : '반응'} ${
                stageResultCount || 0
              }회`,
              type: 'response',
            })}
          </View>
          <Text
            fontSize="24"
            fontWeight="bold"
            color={COLORS.black}
            numberOfLines={1}
          >
            {stageName || ''}
          </Text>
          {stageResultCount !== undefined && stageResultCount > 0 && (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onPressMoveToResultPage}
            >
              <Text fontSize="16" fontWeight="bold" color={COLORS.gray600}>
                {'결과확인 >'}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <ImageBackground
        source={WhiteCircleImage}
        style={[
          globalStyles.alignCenter,
          globalStyles.justifyCenter,
          styles.shareContainer,
        ]}
      >
        <TouchableOpacity activeOpacity={0.7} onPress={onPressShare}>
          <Icon icon="Share" size={24} color={COLORS.black} />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default StageCard;
