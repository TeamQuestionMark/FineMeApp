export const notificationQueryKey = {
  all: 'notification',
  lists: () => [...notificationQueryKey.all, 'lists'] as const,
};

export const stageQueryKey = {
  all: 'stage',
  customLists: () => [...stageQueryKey.all, 'custom-lists'] as const,
  resultLists: () => [...stageQueryKey.all, 'result-lists'] as const,
};
