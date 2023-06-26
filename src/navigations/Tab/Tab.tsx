import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  NavigationState,
  ParamListBase,
  PartialState,
  Route,
} from '@react-navigation/native';

import globalStyles from '@/themes/globalStyles';
import { ScaledSheet } from '@/utils/scale';
import { Divider } from '@/common/components/Divider';
import Text from '@/common/components/Text';
import { COLORS } from '@/themes/colors';
import { RootStackParamList } from '../types';
import DeselectedStageIcon from '@/assets/icons/Tab/icon_tab_stage_deselected.png';
import SelectedStageIcon from '@/assets/icons/Tab/icon_tab_stage_selected.png';
import DeselectedCharacterIcon from '@/assets/icons/Tab/icon_tab_charater_unselected.png';
import SelectedCharacterIcon from '@/assets/icons/Tab/icon_tab_charater_selected.png';
import DeselectedMyPageIcon from '@/assets/icons/Tab/icon_tab_mypage_unselected.png';
import SelectedMyPageIcon from '@/assets/icons/Tab/icon_tab_mypage_selected.png';

type NavigationRoute<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList,
> = Route<Extract<RouteName, string>, ParamList[RouteName]> & {
  state?: NavigationState | PartialState<NavigationState>;
};

interface TabProps {
  onPress: (name: string) => void;
  isSelected: boolean;
  route: NavigationRoute<ParamListBase, string>;
}

const styles = ScaledSheet.create({
  icon: {
    width: '24@s',
    height: '24@s',
  },
});

const Tab = ({ onPress, isSelected, route }: TabProps) => {
  const tabObject = useMemo(() => {
    switch (route.name) {
      case 'StageTab':
        return {
          tabName: '스테이지',
          icon: isSelected ? SelectedStageIcon : DeselectedStageIcon,
        };
      case 'CharacterTab':
        return {
          tabName: '캐릭터',
          icon: isSelected ? SelectedCharacterIcon : DeselectedCharacterIcon,
        };
      case 'MyPageTab':
        return {
          tabName: '마이페이지',
          icon: isSelected ? SelectedMyPageIcon : DeselectedMyPageIcon,
        };
      default:
        return {
          tabName: '스테이지',
          icon: isSelected ? SelectedStageIcon : DeselectedStageIcon,
        };
    }
  }, [route.name, isSelected]);

  return (
    <TouchableOpacity
      style={[globalStyles.defaultFlexContainer, globalStyles.alignCenter]}
      onPress={() => onPress(route.name)}
    >
      <Divider vertical={3} />
      <FastImage source={tabObject.icon} style={styles.icon} />
      <Text
        fontSize="12"
        fontWeight={isSelected ? 'bold' : 'Regular'}
        color={isSelected ? COLORS.brandColor400 : COLORS.black}
      >
        {tabObject.tabName}
      </Text>
      <Divider vertical={2} />
    </TouchableOpacity>
  );
};

export default Tab;
