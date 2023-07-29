import { NavigationProps } from '@/navigations/types';
import { useNavigation } from '@react-navigation/native';
import { postQuestionsStage } from '../api';
import { getConvertCustomStagePostData } from '@/utils/data';
import { CustomStageRowData } from '@/screens/stage/type';
import { useMutation } from 'react-query';
import { useToastStore } from '@/store/toast';

const usePostCustomStageQuestions = () => {
  const navigation = useNavigation<NavigationProps>();

  const { setToast } = useToastStore();

  const { mutate } = useMutation(['postCustomStage'], {
    mutationFn: (customQuestionData: CustomStageRowData) => {
      const convertQuestionData =
        getConvertCustomStagePostData(customQuestionData);
      return postQuestionsStage(convertQuestionData);
    },
    onSuccess: () => navigation.goBack(),
    onError: () => setToast('데이터 전송에 실패했습니다.'),
  });

  return { mutate };
};

export default usePostCustomStageQuestions;
