import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { ScaledSheet, s } from '@/utils/scale';
import DefaultImage from '@/assets/images/customCard/image_custom_card.png';
import globalStyles from '@/themes/globalStyles';
import FastImage from 'react-native-fast-image';
import { Divider } from '@/common/components/Divider';
import Text from '@/common/components/Text';
import { COLORS } from '@/themes/colors';
import { CustomShadow } from '@/common/components/Shadow';
import { getDotYYYYMMDDWithWeekDay } from '@/utils/date';
import { getSlicedText } from '@/utils/text';
import Icon from '@/common/components/Icon/Icon';
import { shareStage } from '@/utils/share';
import { useUserStore } from '@/store/user';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '@/navigations/types';

const styles = ScaledSheet.create({
  container: {
    width: '330@s',
    paddingHorizontal: '22@s',
    paddingVertical: '20@vs',
    borderWidth: 2,
    borderColor: COLORS.black,
    borderRadius: 20,
    backgroundColor: COLORS.white,
  },
  icon: {
    width: '70@s',
    height: '70@s',
  },
  category: {
    alignSelf: 'flex-start',
    paddingVertical: '2@vs',
    paddingHorizontal: '10@s',
    borderRadius: 20,
    backgroundColor: COLORS.brandColor200,
  },
});

interface StageMainCustomCardProps {
  title: string;
  iconUrl?: string;
  createdAt?: string | Date;
  stageId?: string;
  category?: string;
}

const StageMainCustomCard = ({
  title,
  iconUrl,
  createdAt,
  stageId,
  category,
}: StageMainCustomCardProps) => {
  const { user } = useUserStore();
  const navigation = useNavigation<NavigationProps>();
  const onPressShareButton = () => {
    if (user?.userId) shareStage(Number(stageId), user.userId);
  };
  const onPressCard = () => {
    navigation.navigate('StagePreview', {
      stageId: Number(stageId),
      stageName: title,
    });
  };

  return (
    <CustomShadow>
      <View
        style={[
          globalStyles.rowContainer,
          globalStyles.justifySpaceBetween,
          styles.container,
        ]}
      >
        <TouchableOpacity
          style={[globalStyles.rowAlignCenterContainer]}
          onPress={onPressCard}
        >
          <FastImage
            source={iconUrl ? { uri: iconUrl } : DefaultImage}
            style={styles.icon}
          />
          <Divider horizontal={16} />
          <View style={{ width: s(133) }}>
            <Text
              fontSize="16"
              fontWeight="bold"
              color={COLORS.black}
              numberOfLines={1}
            >
              {title.length > 8 ? `${getSlicedText(title, 8)}...` : title || ''}
            </Text>
            <Divider vertical={4} />
            <Text fontSize="14" fontWeight="Regular" color={COLORS.black}>
              {createdAt
                ? `${createdAt}`
                : getDotYYYYMMDDWithWeekDay(new Date())}
            </Text>
            {category && (
              <>
                <Divider vertical={4} />
                <View style={styles.category}>
                  <Text
                    fontSize="13"
                    fontWeight="Regular"
                    color={COLORS.brandColor700}
                    numberOfLines={1}
                  >
                    {category.length > 8
                      ? `${getSlicedText(category, 8)}...`
                      : category || ''}
                  </Text>
                </View>
              </>
            )}
          </View>
        </TouchableOpacity>
        <Icon
          icon="CardShare"
          size={24}
          isPressable
          onPressIcon={onPressShareButton}
        />
      </View>
    </CustomShadow>
  );
};

export default StageMainCustomCard;
