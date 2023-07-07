import { COLORS } from '@/themes/colors';
import { s } from '@/utils/scale';
import React from 'react';

import { View, ActivityIndicator, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Spinner = () => (
  <View style={styles.container}>
    <ActivityIndicator size={s(48)} color={COLORS.brandColor300} />
  </View>
);

export default Spinner;
