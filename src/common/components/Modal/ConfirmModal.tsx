import React, { ReactNode } from 'react';
import { View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { COLORS } from '@/themes/colors';
import { ScaledSheet } from '@/utils/scale';
import Text from '../Text';
import { Divider } from '../Divider';
import globalStyles from '@/themes/globalStyles';

/**
 * @component
 * ConfirmModal

 * @example
 * <Button
 *   title=""                                       // required
 *   description=""                                 // required
 *   isVisible={false}                              // optional
 *   onPress={() => {}}                             // required
 *   firstButton={<Button />}                       // required
 * />
 */

const styles = ScaledSheet.create({
  container: {
    width: '330@s',
    height: '215@vs',
    paddingVertical: '30@vs',
    paddingHorizontal: '30@s',
    borderRadius: 10,
    backgroundColor: COLORS.white,
  },
});

interface ConfirmModalProps {
  title: string;
  description: string;
  isVisible: boolean;
  firstButton: ReactNode;
  secondButton?: ReactNode;
}

const ConfirmModal = ({
  title,
  description,
  isVisible = false,
  firstButton,
  secondButton = null,
}: ConfirmModalProps) => {
  return (
    <ReactNativeModal
      isVisible={isVisible}
      backdropColor={COLORS.black}
      backdropOpacity={0.5}
    >
      <View style={styles.container}>
        <Text
          fontSize="20"
          fontWeight="bold"
          color={COLORS.black}
          textAlign="center"
        >
          {title}
        </Text>
        <Divider vertical={16} />
        <Text
          fontSize="14"
          fontWeight="Regular"
          color={COLORS.black}
          textAlign="center"
        >
          {description}
        </Text>
        <Divider vertical={24} />
        {secondButton ? (
          <View
            style={[
              globalStyles.defaultFlexContainer,
              globalStyles.rowAlignCenterContainer,
              globalStyles.justifySpaceBetween,
            ]}
          >
            {firstButton}
            <Divider horizontal={15} />
            {secondButton}
          </View>
        ) : (
          firstButton
        )}
      </View>
    </ReactNativeModal>
  );
};

export default ConfirmModal;
