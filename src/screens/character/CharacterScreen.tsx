import React from 'react';
import { View } from 'react-native';

import { CharacterMain } from './components';
import { ScaledSheet } from '@/utils/scale';
import { COLORS } from '@/themes/colors';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

const CharacterScreen = () => {
  return (
    <View style={styles.container}>
      <CharacterMain />
    </View>
  );
};

export default CharacterScreen;
