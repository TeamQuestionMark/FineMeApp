import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { COLORS } from '@/themes/colors';
import Header from '@/common/components/Header/Header';
import { useNavigation } from '@react-navigation/native';
import { Notification } from '@/api/Notification/types';
import NotificationBox from './components/NotificationBox';
import { ScaledSheet } from '@/utils/scale';

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
  container: {
    paddingHorizontal: '20@s',
  },
  scrollView: {
    paddingBottom: '200@vs',
  },
  noti: {
    marginBottom: '20@vs',
  },
});

const NotificationScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: COLORS.white }}>
      <Header title="응답 알림" onPressLeadingIcon={navigation.goBack} />

      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {dummyNotificationLists.map(notification => (
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
