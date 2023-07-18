import React, { useEffect } from 'react';
import { Dimensions, Pressable } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { COLORS } from '@/themes/colors';
import { isIOS } from '@/utils/device';
import Text from '@/common/components/Text/index';
import { ScaledSheet, s } from '@/utils/scale';

const styles = ScaledSheet.create({
  snackBar: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    paddingVertical: '14@vs',
    borderRadius: 5,
    backgroundColor: COLORS.error30,
  },
});

interface SnackbarProps {
  message: string;
  duration?: 'SHORT' | 'LONG';
  onClose: () => void;
}

const SnackBar = ({ message, duration = 'SHORT', onClose }: SnackbarProps) => {
  const height = Dimensions.get('window').height;

  useEffect(() => {
    const timer = duration === 'LONG' ? 5000 : 3000;
    const closeTimer = setTimeout(() => onClose(), timer);

    return () => {
      clearTimeout(closeTimer);
    };
  }, [duration, onClose]);

  return (
    <Animatable.View animation="fadeIn">
      <Pressable
        style={[styles.snackBar, { bottom: s(height - (isIOS ? 200 : 140)) }]}
        onPress={onClose}
      >
        <Text fontSize="13" fontWeight="Regular" color={COLORS.black}>
          {message}
        </Text>
      </Pressable>
    </Animatable.View>
  );
};

export default SnackBar;
