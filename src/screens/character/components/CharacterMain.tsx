import React from 'react';
import { View, ScrollView } from 'react-native';
import FastImage from 'react-native-fast-image';

import { Divider } from '@/common/components/Divider';
import { LogoHeader } from '@/common/components/Header';
import Text from '@/common/components/Text';
import { COLORS } from '@/themes/colors';
import { ScaledSheet } from '@/utils/scale';
import { CustomShadow } from '@/common/components/Shadow';
import DefaultCharacterImage from '@/assets/images/character/image_default_character.png';
import { ImageBackground } from 'react-native';
import globalStyles from '@/themes/globalStyles';
import { Button } from '@/common/components/Button';
import TooltipImage from '@/assets/images/tooltip/image_character_tooltip.png';
import useHasNotifications from '@/api/Notification/hooks/useHasNotifications';

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: '20@s',
  },
  characterContainer: {
    width: '335@s',
    height: '380@vs',
    borderWidth: 2,
    borderColor: COLORS.black,
    borderRadius: 20,
    backgroundColor: COLORS.characterBackground,
  },
  characterImage: {
    position: 'relative',
    width: '100%',
    height: '283.24@vs',
  },
  buttonContainer: {
    position: 'relative',
    width: '100%',
  },
  tooltipImage: {
    position: 'absolute',
    bottom: '-45@vs',
    left: '23.5@s',
    width: '115@s',
    height: '35@vs',
  },
});

const CharacterMain = () => {
  const hasNewNotifications = useHasNotifications();

  return (
    <View style={globalStyles.defaultFlexContainer}>
      <ScrollView>
        <Divider vertical={25} />
        <LogoHeader
          icon="Notification"
          hasNewNotification={hasNewNotifications}
        />
        <Divider vertical={25} />
        <View style={styles.container}>
          <Text fontSize="24" fontWeight="extraBold" color={COLORS.black}>
            캐릭터
          </Text>
          <Divider vertical={20} />
          <CustomShadow>
            <View
              style={[
                globalStyles.alignCenter,
                globalStyles.justifyCenter,
                styles.characterContainer,
              ]}
            >
              <ImageBackground
                source={DefaultCharacterImage}
                style={styles.characterImage}
                resizeMode="contain"
              >
                {/*  TODO: 안에 아이템 요소 삽입 */}
              </ImageBackground>
            </View>
          </CustomShadow>
          <Divider vertical={20} />
          <View
            style={[
              globalStyles.rowAlignCenterContainer,
              globalStyles.justifySpaceBetween,
              styles.buttonContainer,
            ]}
          >
            <Button
              title="캐릭터 수정"
              disabled
              onPress={() => {}}
              width={162}
            />
            <Button title="캐릭터 저장" onPress={() => {}} width={162} />
            <FastImage style={styles.tooltipImage} source={TooltipImage} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CharacterMain;
