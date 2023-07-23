import { CustomStagePostData } from '@/screens/stage/type';
import { mainAxios } from '../shared/axios';
import urls from './urls';
import {
  ApiFetchFunction,
  ApiPostFunction,
  ResponseData,
} from '../shared/type';
import { CustomStageResponseData } from './type';

export const postQuestionsStage: ApiPostFunction<CustomStagePostData> = data =>
  mainAxios.post(urls.postQuestionsStage, { ...data });

export const getCustomStages: ApiFetchFunction<
  ResponseData<{ data: CustomStageResponseData }>
> = () => mainAxios.get(urls.getCustomState);
