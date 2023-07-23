import { CustomStagePostData } from '@/screens/stage/type';
import { mainAxios } from '../shared/axios';
import urls from './urls';
import { ApiPostFunction } from '../shared/type';

export const postQuestionsStage: ApiPostFunction<CustomStagePostData> = data =>
  mainAxios.post(urls.postQuestionsStage, { ...data });
