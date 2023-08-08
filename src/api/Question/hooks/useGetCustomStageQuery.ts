import { useQuery } from 'react-query';
import { useCustomStageStore } from '@/store/customStage';
import { getCustomStages } from '../api';
import { stageQueryKey } from '@/api/shared/queryKey';

const useGetCustomStageQuery = () => {
  const { setCustomStageLength, setStageLists } = useCustomStageStore();

  const { data, refetch, isLoading } = useQuery(stageQueryKey.customLists(), {
    queryFn: () => getCustomStages({}),
    onSuccess: data => {
      setCustomStageLength(data?.data?.data?.length || 0);
      setStageLists(data?.data?.data?.stageLists || []);
    },
  });

  return { data, refetch, isLoading };
};

export default useGetCustomStageQuery;
