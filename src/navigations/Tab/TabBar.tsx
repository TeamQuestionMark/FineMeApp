import globalStyles from '@/themes/globalStyles';
import { ScaledSheet } from '@/utils/scale';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native/types';

const styles = ScaledSheet.create({});

const TabBar = ({ state, navigation }: BottomTabBarProps) => {
  console.log('state: ', state);
  return (
    <View
      style={[
        globalStyles.rowAlignCenterContainer,
        globalStyles.defaultFlexContainer,
      ]}
    ></View>
  );
};

export default TabBar;
