import globalStyles from '@/themes/globalStyles';
import { ScaledSheet } from '@/utils/scale';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from '../Icon/Icon';
import Text from '../Text';
import { COLORS } from '@/themes/colors';
import * as IconTypes from '@/assets/icons/svgIcons/index';

/**
 * @component
 * 헤더

 * @example
 * <Header
 *   title="테스트"                               // required
 *   onPressLeadingIcon={() => {}}                // optional
 *   trailIcon="close"                            // optional
 *   onPressTrailingIcon={() => {}}               // optional
 * />
 */

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    paddingVertical: '9@vs',
    paddingHorizontal: '15@s',
    backgroundColor: COLORS.white,
  },
});

interface HeaderProps {
  title: string;
  onPressLeadingIcon?: () => void;
  trailIcon?: keyof typeof IconTypes;
  onPressTrailingIcon?: () => void;
}

const Header = ({
  title,
  onPressLeadingIcon,
  trailIcon,
  onPressTrailingIcon,
}: HeaderProps) => {
  return (
    <View
      style={[
        globalStyles.rowAlignCenterContainer,
        globalStyles.justifySpaceBetween,
        styles.container,
      ]}
    >
      <View>
        {onPressLeadingIcon && (
          <Icon
            icon="ArrowBack"
            size={24}
            isPressable
            onPressIcon={onPressLeadingIcon}
          />
        )}
      </View>
      <Text fontSize="16" fontWeight="bold" color={COLORS.black}>
        {title}
      </Text>
      <View>
        {trailIcon && (
          <Icon
            icon={trailIcon}
            size={24}
            isPressable
            onPressIcon={onPressTrailingIcon}
          />
        )}
      </View>
    </View>
  );
};

export default Header;
