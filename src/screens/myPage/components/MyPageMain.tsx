import React, { useState } from 'react';
import { View } from 'react-native';

import { Divider } from '@/common/components/Divider';
import { LogoHeader } from '@/common/components/Header';
import Text from '@/common/components/Text';
import { COLORS } from '@/themes/colors';
import { ScaledSheet } from '@/utils/scale';
import UserCard from './MyPageMain/UserCard';
import { Tabs } from '@/common/components/Tab';
import { TabItem } from '@/common/components/Tab/type';
import StageCard from './MyPageMain/StageCard';

const styles = ScaledSheet.create({
  paddingContainer: {
    paddingHorizontal: '20@s',
  },
  resultContainer: {
    width: '100%',
    minHeight: '571@vs',
    paddingHorizontal: '30@s',
    paddingVertical: '27@vs',
    borderWidth: 2,
    borderColor: COLORS.gray900,
    borderRadius: 15,
  },
});

const resultTabList: TabItem[] = [
  {
    name: '스테이지 결과',
    value: 'Main',
  },
  {
    name: '커스텀 스테이지 결과',
    value: 'Custom',
  },
];

const MyPageMain = () => {
  const [currentTab, setCurrentTab] = useState<TabItem>(resultTabList[0]);

  return (
    <View>
      <Divider vertical={25} />
      <LogoHeader icon="Setting" />
      <Divider vertical={20} />
      <View style={styles.paddingContainer}>
        <Text fontSize="24" fontWeight="extraBold" color={COLORS.black}>
          마이페이지
        </Text>
        <Divider vertical={26} />
        <UserCard />
      </View>
      <Divider vertical={18} />
      <View style={styles.resultContainer}>
        <Tabs
          tabList={resultTabList}
          currentTab={currentTab}
          setTab={setCurrentTab}
        />
        <Divider vertical={26} />
        <StageCard stageType="MAIN" />
        <Divider vertical={8} />
        <StageCard stageType="CUSTOM" />
      </View>
      <Divider vertical={67} />
    </View>
  );
};

export default MyPageMain;
