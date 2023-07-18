import { mainAxios } from '../shared/axios';
import { ResponseData } from '../shared/type';
import { NotificationListData } from './types';

export const queryKey = {
  all: 'notification' as const,
  lists: () => [queryKey.all, 'lists'],
};

export const getNotificationList = async () => {
  const response = await mainAxios.get<ResponseData<NotificationListData>>(
    `/api/v1/notification`,
  );

  return response.data.data;
};
