import React from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Header from '@/common/components/Header/Header';
import globalStyles from '@/themes/globalStyles';
import { SETTING_MENU_LIST } from '@/constants/setting';
import { Menu } from '@/common/components/Menu';
import { SettingParamList } from '@/navigations/types';
import { StackNavigationProp } from '@react-navigation/stack';

const SettingScreen = () => {
  const navigation = useNavigation<StackNavigationProp<SettingParamList>>();

  const handlePressMenu = (screenName: keyof SettingParamList) => {
    console.log('🔸 → handlePressMenu → screenName:', screenName);
    navigation.navigate(screenName);
  };
  return (
    <View>
      <Header title="설정" onPressLeadingIcon={navigation.goBack} />
      <View
        style={[
          globalStyles.defaultPadding,
          globalStyles.defaultBackgroundColor,
        ]}
      >
        {SETTING_MENU_LIST.map(menu => (
          <Menu
            key={menu.screenName}
            title={menu.title}
            onPress={() => handlePressMenu(menu.screenName)}
          />
        ))}
      </View>
    </View>
  );
};

export default SettingScreen;
