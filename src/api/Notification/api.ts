import { mainAxios } from '../shared/axios';
import { ResponseData } from '../shared/type';
import { NotificationListData } from './types';

export const getNotificationList = async () => {
  const response = await mainAxios.get<ResponseData<NotificationListData>>(
    `/api/v1/notification`,
  );

  return response.data.data;
};

export const readNotification = async (target: 'all' | number) => {
  const id = target === 'all' ? 0 : target;
  return await mainAxios.put<ResponseData<NotificationListData>>(
    `/api/v1/notification/${id}`,
  );
};
