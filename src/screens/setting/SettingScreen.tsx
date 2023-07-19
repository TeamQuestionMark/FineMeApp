import React from 'react';
import { StyleSheet, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Header from '@/common/components/Header/Header';
import globalStyles from '@/themes/globalStyles';
import { SETTING_MENU_LIST } from '@/constants/setting';
import { Menu } from '@/common/components/Menu';
import { SettingParamList } from '@/navigations/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScaledSheet } from '@/utils/scale';

const styles = ScaledSheet.create({
  container: {
    height: '100%',
  },
  menu: {
    marginBottom: '16@vs',
  },
});
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
          styles.container,
        ]}
      >
        {SETTING_MENU_LIST.map(menu => (
          <Menu
            key={menu.screenName}
            style={styles.menu}
            title={menu.title}
            onPress={() => handlePressMenu(menu.screenName)}
          />
        ))}
      </View>
    </View>
  );
};

export default SettingScreen;
