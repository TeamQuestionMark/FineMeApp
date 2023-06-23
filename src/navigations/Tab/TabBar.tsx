import React from 'react';
import { View } from 'react-native';

import globalStyles from '@/themes/globalStyles';
import { ScaledSheet } from '@/utils/scale';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { map } from 'lodash';
import Tab from './Tab';
import { COLORS } from '@/themes/colors';

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    height: '48@vs',
    borderTopWidth: 1,
    borderColor: '#DFDFDF',
  },
});

const TabBar = ({ state, navigation }: BottomTabBarProps) => {
  const onPressTabButton = (route: string) => {
    navigation.navigate(route);
  };

  const renderTabs = map(state?.routes, (route, index) => {
    return (
      <Tab
        key={index}
        onPress={onPressTabButton}
        isSelected={state.index === index}
        route={route}
      />
    );
  });

  return (
    <View style={[globalStyles.rowAlignCenterContainer, styles.container]}>
      {renderTabs}
    </View>
  );
};

export default TabBar;
