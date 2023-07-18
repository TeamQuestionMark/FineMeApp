export type NotificationType = 'PUSH_ANSWER' | 'PUBLIC';
export type YesOrNo = 'Y' | 'N';
export interface Notification {
  id: number;
  title: string;
  message: string;
  notificationType: NotificationType;
  uuid: string;
  readYn: YesOrNo;
  createDate: string;
}

export interface NotificationListData {
  length: number;
  notificationLists: Notification[];
}
