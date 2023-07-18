import React, { useEffect, useState } from 'react';
import { AppState, ScrollView, View } from 'react-native';

import { COLORS } from '@/themes/colors';
import Header from '@/common/components/Header/Header';
import { useNavigation } from '@react-navigation/native';
import { Notification } from '@/api/Notification/types';
import NotificationBox from './components/NotificationBox';
import { ScaledSheet } from '@/utils/scale';
import Switch from '@/common/components/Switch/Switch';
import Text from '@/common/components/Text';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useNotifications from '@/api/Notification/hooks/useNotifications';
import Spinner from '@/common/components/Spinner/Spinner';
import globalStyles from '@/themes/globalStyles';
import { Linking } from 'react-native';
import { requestPermission } from '@/utils/fcm/requestPermission';

const dummyNotificationLists: Notification[] = [
  {
    id: 0,
    title:
      '(응답자 닉네임)님이 보내주신 (스테이지명) 스테이지 응답이 도착했어요!',
    message: '지금 마이페이지로 이동해서 응답을 확인해보세요.',
    notificationType: 'PUSH_ANSWER',
    uuid: 'string',
    readYn: 'N',
    createDate: '2023-07-18T15:20',
  },
  {
    id: 1,
    title:
      '(응답자 닉네임)님이 보내주신 (스테이지명) 스테이지 응답이 도착했어요!',
    message: '지금 마이페이지로 이동해서 응답을 확인해보세요.',
    notificationType: 'PUSH_ANSWER',
    uuid: 'string',
    readYn: 'N',
    createDate: '2023-07-18T15:20',
  },
  {
    id: 2,
    title:
      '(응답자 닉네임)님이 보내주신 (스테이지명) 스테이지 응답이 도착했어요!',
    message: '지금 마이페이지로 이동해서 응답을 확인해보세요.',
    notificationType: 'PUSH_ANSWER',
    uuid: 'string',
    readYn: 'N',
    createDate: '2023-07-18T15:20',
  },
  {
    id: 3,
    title:
      '(응답자 닉네임)님이 보내주신 (스테이지명) 스테이지 응답이 도착했어요!',
    message: '지금 마이페이지로 이동해서 응답을 확인해보세요.',
    notificationType: 'PUSH_ANSWER',
    uuid: 'string',
    readYn: 'Y',
    createDate: '2023-07-18T18:20',
  },
];

const styles = ScaledSheet.create({
  scrollView: {
    paddingBottom: '200@vs',
    marginTop: '30@vs',
  },
  noti: {
    marginBottom: '20@vs',
  },
  notiHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notiSwitch: {
    flexDirection: 'row',
  },
  readAllButton: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: COLORS.gray200,
    paddingVertical: '8@vs',
    paddingHorizontal: '14@s',
  },
});

const NotificationScreen = () => {
  const navigation = useNavigation();
  const [notiOn, setNotiOn] = useState<boolean | 'loading'>('loading');
  const query = useNotifications();

  useEffect(() => {
    function updateNotiOn() {
      requestPermission().then(isFcmEnabled => {
        setNotiOn(isFcmEnabled);
      });
    }
    const subscription = AppState.addEventListener('change', updateNotiOn);
    updateNotiOn();
    return subscription.remove;
  }, []);

  const toggleNoti = () => {
    Linking.openSettings();
  };

  const readAll = () => {};

  if (!query.data || notiOn === 'loading')
    return (
      <View style={[globalStyles.center, globalStyles.defaultFlexContainer]}>
        <Spinner />
      </View>
    );

  return (
    <View
      style={[
        globalStyles.defaultFlexContainer,
        globalStyles.defaultBackgroundColor,
      ]}
    >
      <Header title="응답 알림" onPressLeadingIcon={navigation.goBack} />
      <View style={globalStyles.defaultPadding}>
        <View style={styles.notiHeader}>
          <View style={styles.notiSwitch}>
            <Switch isClicked={notiOn} onPress={toggleNoti} />
            <Text fontSize="13" marginLeft={8}>
              알림 {notiOn ? '끄기' : '켜기'}
            </Text>
          </View>
          <TouchableOpacity style={styles.readAllButton} onPress={readAll}>
            <Text fontSize="13">모두 읽음으로 표시</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollView}>
          {query.data.notificationLists.map(notification => (
            <NotificationBox
              style={styles.noti}
              key={notification.id}
              notification={notification}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default NotificationScreen;
