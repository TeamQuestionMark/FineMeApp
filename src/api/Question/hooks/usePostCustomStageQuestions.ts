import { NavigationProps } from '@/navigations/types';
import { useNavigation } from '@react-navigation/native';
import { postQuestionsStage } from '../api';
import { getConvertCustomStagePostData } from '@/utils/data';
import { CustomStageRowData } from '@/screens/stage/type';
import { useMutation, useQueryClient } from 'react-query';
import { useToastStore } from '@/store/toast';

const usePostCustomStageQuestions = () => {
  const navigation = useNavigation<NavigationProps>();
  const queryClient = useQueryClient();

  const { setToast } = useToastStore();

  const { mutate } = useMutation(['postCustomStage'], {
    mutationFn: (customQuestionData: CustomStageRowData) => {
      const convertQuestionData =
        getConvertCustomStagePostData(customQuestionData);
      return postQuestionsStage(convertQuestionData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['fetchCustomStage']);
      navigation.goBack();
    },
    onError: () => setToast('데이터 전송에 실패했습니다.'),
  });

  return { mutate };
};

export default usePostCustomStageQuestions;
