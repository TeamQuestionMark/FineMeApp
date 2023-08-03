import { UseMutationOptions, useMutation, useQueryClient } from 'react-query';
import { readNotification } from '../api';
import { notificationQueryKey } from '@/api/shared/queryKey';

interface UseReadNotificationParams {
  target: 'all' | number;
}
export default function useReadNotification(
  options?: UseMutationOptions<unknown, unknown, UseReadNotificationParams>,
) {
  const queryClient = useQueryClient();
  return useMutation<unknown, unknown, UseReadNotificationParams>(
    ({ target }) => readNotification(target),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(notificationQueryKey.lists());
      },
      ...options,
    },
  );
}
