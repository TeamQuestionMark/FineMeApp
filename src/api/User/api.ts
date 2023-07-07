import { mainAxios } from "../shared/axios";
import { ResponseData } from "../shared/type";
import { Gender, UserProfile } from "./types";


export const getProfile = () =>
  mainAxios.get<ResponseData<UserProfile>>('/api/v1/user/profile');


type PutProfilePayload = {
  gender: Gender
  birth: string
}
export const putProfile = async (payload: PutProfilePayload) => {
  const {status, data} = await mainAxios.put<ResponseData<any>>('/api/v1/user/profile/info', payload)
  return data
}