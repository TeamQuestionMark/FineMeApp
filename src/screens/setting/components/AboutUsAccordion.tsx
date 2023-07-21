import React, { useState } from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';

import { COLORS } from '@/themes/colors';
import globalStyles from '@/themes/globalStyles';

import CircleArrowDown from '@/assets/icons/CircleArrow/icon-circle-down.png';
import CircleArrowUp from '@/assets/icons/CircleArrow/icon-circle-up.png';
import FastImage, { Source } from 'react-native-fast-image';
import Text from '@/common/components/Text';
import { ScaledSheet } from '@/utils/scale';

const styles = ScaledSheet.create({
  container: {
    borderRadius: 15,
    borderWidth: 2,
    width: '100%',
  },
  image: {
    borderTopStartRadius: 14,
    borderTopEndRadius: 14,
    borderBottomWidth: 2,
    width: '100%',
    height: '139@vs',
  },
  titleWrapper: {
    paddingVertical: '15@vs',
    paddingLeft: '20@s',
    paddingRight: '15@s',
    alignItems: 'flex-end',
  },
  icon: {
    width: '34@s',
    height: '36@s',
  },
  innerContainer: {
    width: '100%',
    paddingHorizontal: '18@s',
    paddingTop: '10@vs',
    paddingBottom: '25@vs',
  },
});

interface AboutUsAccordionProps {
  subTitle: string;
  title: string;
  image: Source;
  description: string;
  style?: StyleProp<ViewStyle>;
}

const AboutUsAccordion = ({
  subTitle,
  image,
  title,
  description,
  style,
}: AboutUsAccordionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <View style={[styles.container, style]}>
      <FastImage style={styles.image} source={image} resizeMode="cover" />
      <TouchableOpacity
        style={[
          globalStyles.rowContainer,
          globalStyles.justifySpaceBetween,
          styles.titleWrapper,
        ]}
        onPress={() => setIsOpen(prev => !prev)}
        activeOpacity={0.8}
      >
        <View>
          <Text fontSize="16" fontWeight="bold" color={COLORS.black}>
            {subTitle}
          </Text>
          <Text fontSize="24" fontWeight="extraBold" color={COLORS.black}>
            {title}
          </Text>
        </View>
        <FastImage
          style={styles.icon}
          source={isOpen ? CircleArrowUp : CircleArrowDown}
        />
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.innerContainer}>
          <Text fontSize="14" fontWeight="Regular" color={COLORS.black}>
            {description}
          </Text>
        </View>
      )}
    </View>
  );
};

export default AboutUsAccordion;
