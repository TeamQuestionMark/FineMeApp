import { useQuery } from 'react-query';
import { getQuestionResults } from '../api';
import { filter } from 'lodash';
import { CustomStageResult } from '../type';

const useGetQuestionResultsQuery = () => {
  const { data, refetch } = useQuery({
    queryFn: () => getQuestionResults({}),
  });

  const filteredByCategoryBasicList = (
    stageData: CustomStageResult[],
  ): CustomStageResult[] => filter(stageData, item => !item?.categoryName);
  const filteredByCategoryCustomList = (
    stageData: CustomStageResult[],
  ): CustomStageResult[] => filter(stageData, item => !!item?.categoryName);

  return {
    listData: {
      basicStageLists: filteredByCategoryBasicList(
        data?.data?.data?.stageLists,
      ),
      customStageList: filteredByCategoryCustomList(
        data?.data?.data?.stageLists,
      ),
      totalLength: data?.data?.data?.length,
    },
    refetchLists: refetch,
  };
};

export default useGetQuestionResultsQuery;
