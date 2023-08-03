import { UseQueryOptions, useQuery } from 'react-query';
import { getNotificationList, queryKey } from '../api';
import { NotificationListData } from '../types';

export default function useNotifications(
  options?: UseQueryOptions<NotificationListData>,
) {
  return useQuery<NotificationListData>(queryKey.lists(), getNotificationList, {
    ...options,
    staleTime: 1000 * 60 * 10,
  });
}
