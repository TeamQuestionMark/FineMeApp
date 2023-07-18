import { UseMutationOptions, useMutation, useQueryClient } from 'react-query';
import { queryKey, readNotification } from '../api';

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
        queryClient.invalidateQueries(queryKey.lists());
      },
      ...options,
    },
  );
}
