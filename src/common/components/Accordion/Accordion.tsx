import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { COLORS } from '@/themes/colors';
import globalStyles from '@/themes/globalStyles';
import { ScaledSheet } from '@/utils/scale';
import Text from '../Text';

import CircleArrowDown from '@/assets/icons/CircleArrow/icon-circle-down.png';
import CircleArrowUp from '@/assets/icons/CircleArrow/icon-circle-up.png';
import FastImage from 'react-native-fast-image';
import { Divider } from '../Divider';

/**
 * @component
 * 아코디언

 * @example
 * <Accordion
 *   title="테스트"                               // required
 *   description="테스트"                         // required
 * />
 */

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    paddingTop: '17@vs',
    paddingLeft: '20@s',
    paddingRight: '17@s',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: COLORS.gray900,
  },
  closeContainer: {
    paddingBottom: '17@vs',
  },
  openContainer: {
    paddingBottom: '26@vs',
  },
  icon: {
    width: '34@s',
    height: '36@s',
  },
  innerContainer: {
    width: '100%',
  },
});

interface AccordionProps {
  title: string;
  description: string;
}

const Accordion = ({ title, description }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <View
      style={[
        globalStyles.alignCenter,
        styles.container,
        isOpen ? styles.openContainer : styles.closeContainer,
      ]}
    >
      <TouchableOpacity
        style={[
          styles.innerContainer,
          globalStyles.rowAlignCenterContainer,
          globalStyles.justifySpaceBetween,
        ]}
        onPress={() => setIsOpen(prev => !prev)}
        activeOpacity={0.8}
      >
        <Text fontSize="20" fontWeight="bold" color={COLORS.black}>
          {title}
        </Text>
        <FastImage
          style={styles.icon}
          source={isOpen ? CircleArrowUp : CircleArrowDown}
        />
      </TouchableOpacity>
      {isOpen && (
        <>
          <Divider vertical={17} />
          <View style={styles.innerContainer}>
            <Text fontSize="14" fontWeight="Regular" color={COLORS.description}>
              {description}
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

export default Accordion;
