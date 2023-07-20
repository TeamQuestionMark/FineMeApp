import React, { useMemo } from 'react';
import useNotifications from './useNotifications';
import { find } from 'lodash';

const useHasNotifications = () => {
  const { data: notifications } = useNotifications();

  const hasNewNoti = useMemo(
    () =>
      find(notifications?.notificationLists, noti => noti?.readYn === 'N') !==
      undefined,
    [notifications?.notificationLists],
  );

  return hasNewNoti;
};

export default useHasNotifications;
