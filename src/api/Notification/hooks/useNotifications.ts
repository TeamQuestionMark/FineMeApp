import { UseQueryOptions, useQuery } from 'react-query';
import { getNotificationList } from '../api';
import { NotificationListData } from '../types';
import { notificationQueryKey } from '@/api/shared/queryKey';

export default function useNotifications(
  options?: UseQueryOptions<NotificationListData>,
) {
  return useQuery<NotificationListData>(
    notificationQueryKey.lists(),
    getNotificationList,
    {
      ...options,
      staleTime: 1000 * 60 * 10,
    },
  );
}
