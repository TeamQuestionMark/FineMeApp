import React, { useCallback, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import Header from '@/common/components/Header/Header';
import { NavigationProps } from '@/navigations/types';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '@/themes/colors';
import { useUserStore } from '@/store/user';
import Text from '@/common/components/Text';
import globalStyles from '@/themes/globalStyles';
import { Button } from '@/common/components/Button';
import useHideTabBar from '@/hooks/useHideTabBar';
import { ScaledSheet, vs } from '@/utils/scale';
import { CustomShadow } from '@/common/components/Shadow';
import { deleteFCMToken, deleteUser } from '@/api/User/api';
import { ConfirmModal } from '@/common/components/Modal';
import { useQueryClient } from 'react-query';

const styles = ScaledSheet.create({
  container: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  accountBox: {
    borderWidth: 2,
    alignSelf: 'stretch',
    paddingHorizontal: '20@s',
    paddingTop: '20@vs',
    paddingBottom: '25@vs',
    marginBottom: '40@vs',
  },
  nicknameBox: {
    borderWidth: 2,
    alignSelf: 'stretch',
    paddingHorizontal: '20@s',
    paddingVertical: '35@vs',
  },
  actionWrapper: {
    position: 'absolute',
    bottom: '134@vs',
    width: '100%',
    left: '20@s',
  },
});

const AccountScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const { user, reset } = useUserStore();
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const queryClient = useQueryClient();
  useHideTabBar();

  const logout = useCallback(async () => {
    await deleteFCMToken().then(reset);
    queryClient.invalidateQueries();
  }, [queryClient, reset]);

  const handlePressEditNickname = () => {
    navigation.navigate('EditNickname');
  };

  const quit = async () => {
    await deleteUser().then(reset);
    queryClient.invalidateQueries();
    setIsVisibleModal(false);
  };
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
          <CustomShadow
            borderRadius={15}
            style={[styles.accountBox, globalStyles.defaultBackgroundColor]}
          >
            <View>
              <Text fontSize="16" fontWeight="bold">
                {user?.socialType === 'APPLE' ? '애플 로그인' : '카카오 로그인'}
              </Text>
              <Text marginTop={2} fontSize="16">
                {user?.username}
              </Text>
            </View>
          </CustomShadow>
          <Text fontSize="16" fontWeight="bold" marginBottom={10}>
            닉네임
          </Text>
          <CustomShadow
            borderRadius={15}
            style={[styles.nicknameBox, globalStyles.defaultBackgroundColor]}
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
              <TouchableOpacity onPress={handlePressEditNickname}>
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
          </CustomShadow>
        </View>
        <View style={[globalStyles.alignCenter, styles.actionWrapper]}>
          <Button
            variant="outlined"
            title="로그아웃"
            width={'100%'}
            onPress={logout}
          />
          <TouchableOpacity
            onPress={() => setIsVisibleModal(true)}
            style={{ marginTop: vs(30) }}
          >
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
      <ConfirmModal
        title="탈퇴하시겠습니까?"
        description="모든 데이터가 삭제됩니다."
        isVisible={isVisibleModal}
        firstButton={
          <Button
            title="취소"
            variant="outlined"
            onPress={() => setIsVisibleModal(false)}
            width={127}
          />
        }
        secondButton={
          <Button title="탈퇴하기" variant="solid" onPress={quit} width={127} />
        }
      />
    </View>
  );
};

export default AccountScreen;
