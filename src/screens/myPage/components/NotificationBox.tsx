import { Notification } from '@/api/Notification/types';
import Text from '@/common/components/Text';
import { COLORS } from '@/themes/colors';
import { getLocalMDHmm } from '@/utils/date';
import { ScaledSheet } from '@/utils/scale';
import { StyleProp, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface NotificationBoxProps {
  notification: Notification;
  style?: StyleProp<ViewStyle>;
}

const styles = ScaledSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: COLORS.brandColor50,
    borderWidth: 2,
    borderColor: COLORS.brandColor400,
    paddingVertical: '15@vs',
    paddingHorizontal: '20@s',
  },
  read: {
    backgroundColor: COLORS.gray100,
    borderColor: COLORS.gray900,
    opacity: 0.3,
  },
});

const NotificationBox: React.FC<NotificationBoxProps> = ({
  notification,
  style,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        notification.readYn === 'Y' && styles.read,
        style,
      ]}
    >
      <Text fontSize="16">{notification.title}</Text>
      <Text fontSize="16" marginBottom={4}>
        {notification.message}
      </Text>
      <Text fontSize="13" color={COLORS.gray300}>
        {getLocalMDHmm(notification.createDate)}
      </Text>
    </TouchableOpacity>
  );
};

export default NotificationBox;
