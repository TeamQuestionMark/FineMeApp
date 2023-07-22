import React, { Dispatch, SetStateAction, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { COLORS } from '@/themes/colors';
import { ScaledSheet } from '@/utils/scale';
import globalStyles from '@/themes/globalStyles';
import { map } from 'lodash';
import Text from '../Text';
import { TabItem } from './type';

interface TabProps {
  tabList: TabItem[];
  currentTab: TabItem;
  setTab: Dispatch<SetStateAction<TabItem>>;
}

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    height: '46@vs',
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.gray900,
    borderRadius: 15,
  },
  selectedTab: {
    borderColor: COLORS.gray900,
    borderRadius: 14,
    backgroundColor: COLORS.brandColor400,
    borderWidth: 1,
  },
  firstSelectedTab: {
    borderRightWidth: 1,
  },
  centerSelectedTab: {
    borderRightWidth: 1,
    borderLeftWidth: 1,
  },
  finalSelectedTab: {
    borderLeftWidth: 1,
  },
});

const Tabs = ({ tabList, currentTab, setTab }: TabProps) => {
  const renderTabs = map(tabList, (item, index) => {
    const isSelectedTab = currentTab.value === item.value;

    return (
      <TouchableOpacity
        key={`${index}+${item?.value}`}
        style={[
          globalStyles.alignCenter,
          globalStyles.justifyCenter,
          globalStyles.defaultFlexContainer,
          isSelectedTab && styles.selectedTab,
          { height: '100%' },
        ]}
        activeOpacity={0.7}
        onPress={() => setTab(item)}
      >
        <Text fontSize="14" fontWeight="bold" color={COLORS.black}>
          {item?.name}
        </Text>
      </TouchableOpacity>
    );
  });

  return (
    <View style={[globalStyles.rowAlignCenterContainer, styles.container]}>
      {renderTabs}
    </View>
  );
};

export default Tabs;
