import React, { useCallback } from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import globalStyles from '@/themes/globalStyles';
import { ScaledSheet, s } from '@/utils/scale';
import { COLORS } from '@/themes/colors';
import Text from '@/common/components/Text';
import { StageCardProps } from './type';
import { Divider } from '@/common/components/Divider';
import ImageWork from '@/assets/images/customCard/image_work_custom.png';
import ImageCafe from '@/assets/images/customCard/image_cafe_custom.png';
import ImageHome from '@/assets/images/customCard/image_home_custom.png';
import { NavigationProps, StageParamList } from '@/navigations/types';
import Icon from '@/common/components/Icon/Icon';
import WhiteCircleImage from '@/assets/images/circleButton/image_shadow_white_circle.png';
import { shareResult } from '@/utils/share';

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

const StageCard = ({ stageType }: StageCardProps) => {
  const navigation = useNavigation<NavigationProps>();
  const isStageTypeCustom = stageType === 'CUSTOM';

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
    navigation.navigate('Result', { uuid: 'TODO: uuid' });
  };
  const onPressShare = () => {
    shareResult('TODO: uuid');
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
        {/* TODO: source 종류에 따라 분기처리 */}
        {!isStageTypeCustom && (
          <View style={globalStyles.rowContainer}>
            <FastImage source={ImageWork} style={styles.image} />
            <Divider horizontal={11} />
          </View>
        )}
        <View>
          <View style={[globalStyles.rowContainer]}>
            {isStageTypeCustom && (
              <View style={globalStyles.rowContainer}>
                {renderChip({ text: '카테고리 태그', type: 'category' })}
                <Divider horizontal={8} />
              </View>
            )}
            {renderChip({
              text: `${isStageTypeCustom ? '응답' : '반응'} 12회`,
              type: 'response',
            })}
          </View>
          <Text
            fontSize="24"
            fontWeight="bold"
            color={COLORS.black}
            numberOfLines={1}
          >
            ㄹㅇㄴㅁ리ㅜ마닝러ㅏㅣㅁ어리ㅏㅁ넝라ㅣㅓㅁㅇㄴ라ㅣ
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPressMoveToResultPage}
          >
            <Text fontSize="16" fontWeight="bold" color={COLORS.gray600}>
              {'결과확인 >'}
            </Text>
          </TouchableOpacity>
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
