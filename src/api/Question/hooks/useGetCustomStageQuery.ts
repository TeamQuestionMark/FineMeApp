import { useQuery } from 'react-query';
import { useCustomStageStore } from '@/store/customStage';
import { getCustomStages } from '../api';

const useGetCustomStageQuery = () => {
  const { setCustomStageLength, setStageLists } = useCustomStageStore();

  const { data, refetch, isLoading } = useQuery(['fetchCustomStage'], {
    queryFn: () => getCustomStages({}),
    onSuccess: data => {
      setCustomStageLength(data?.data?.data?.length || 0);
      setStageLists(data?.data?.data?.stageLists || []);
    },
  });

  return { data, refetch, isLoading };
};

export default useGetCustomStageQuery;
