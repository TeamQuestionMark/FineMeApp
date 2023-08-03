import { useQuery } from 'react-query';
import { getQuestionResults } from '../api';
import { stageQueryKey } from '@/api/shared/queryKey';

const useGetQuestionResultsQuery = () => {
  const { data, refetch, isLoading } = useQuery(stageQueryKey.resultLists(), {
    queryFn: () => getQuestionResults({}),
  });

  return {
    listData: {
      basicStageLists: data?.data?.data?.basicStageList,
      customStageList: data?.data?.data?.customStageList,
      totalLength: data?.data?.data?.stageLength,
    },
    refetchLists: refetch,
    isLoading,
  };
};

export default useGetQuestionResultsQuery;
