import React, { useCallback } from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import Header from '@/common/components/Header/Header';
import { NavigationProps } from '@/navigations/types';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '@/themes/colors';
import { useUserStore } from '@/store/user';
import Text from '@/common/components/Text';
import globalStyles from '@/themes/globalStyles';
import ImgShadowBox from '@/assets/images/setting/image-shadow-box.png';
import { Button } from '@/common/components/Button';
import useHideTabBar from '@/hooks/useHideTabBar';
import { vs } from '@/utils/scale';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  accountBox: {
    padding: 20,
    paddingBottom: 25,
    marginBottom: 40,
  },
  nicknameBox: {
    paddingLeft: 20,
    paddingRight: 25,
    paddingTop: 35,
    paddingBottom: 40,
  },
  actionWrapper: {
    marginTop: 'auto',
    marginBottom: 30,
  },
});

const AccountScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const { user, reset } = useUserStore();
  useHideTabBar();

  const logout = useCallback(() => {
    // TODO: FCM 토큰 삭제
    reset();
  }, [reset]);

  return (
    <View>
      <Header title="계정 정보" onPressLeadingIcon={navigation.goBack} />
      <View
        style={[
          globalStyles.defaultPadding,
          globalStyles.defaultBackgroundColor,
          { height: '100%' },
        ]}
      >
        <View>
          <Text fontSize="16" fontWeight="bold" marginBottom={10}>
            로그인 계정
          </Text>
          <ImageBackground
            source={ImgShadowBox}
            resizeMode="stretch"
            style={styles.accountBox}
          >
            <Text fontSize="16" fontWeight="bold">
              {user?.socialType === 'APPLE' ? '애플 로그인' : '카카오 로그인'}
            </Text>
            <Text marginTop={2} fontSize="16">
              {user?.username}
            </Text>
          </ImageBackground>
          <Text fontSize="16" fontWeight="bold" marginBottom={10}>
            닉네임
          </Text>
          <ImageBackground
            source={ImgShadowBox}
            resizeMode="stretch"
            style={styles.nicknameBox}
          >
            <View
              style={[
                globalStyles.rowAlignCenterContainer,
                globalStyles.justifySpaceBetween,
              ]}
            >
              <Text marginTop={2} fontSize="16">
                {user?.nickname}
              </Text>
              <TouchableOpacity>
                <Text
                  color={COLORS.active100}
                  fontSize="16"
                  fontWeight="bold"
                  textDecorationLine="underline"
                >
                  수정
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <View style={[globalStyles.alignCenter, styles.actionWrapper]}>
          <Button
            style={{ marginBottom: vs(30) }}
            variant="outlined"
            title="로그아웃"
            width={'100%'}
            onPress={logout}
          />
          <TouchableOpacity>
            <Text
              color={COLORS.gray300}
              fontSize="16"
              fontWeight="bold"
              textDecorationLine="underline"
            >
              회원 탈퇴하기
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AccountScreen;
