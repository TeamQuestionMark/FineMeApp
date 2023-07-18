import { mainAxios } from '../shared/axios';
import { ResponseData } from '../shared/type';
import { NotificationListData } from './types';

export const getNotificationList = async () => {
  return await mainAxios.get<ResponseData<NotificationListData>>(
    `/api/v1/notification`,
  );
};
