import { useQuery } from 'react-query';
import { getQuestionResults } from '../api';

const useGetQuestionResultsQuery = () => {
  const { data, refetch, isLoading } = useQuery(['fetchStageResults'], {
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
