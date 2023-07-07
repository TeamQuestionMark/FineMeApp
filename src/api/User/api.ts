import { mainAxios } from "../shared/axios";
import { ResponseData } from "../shared/type";
import { UserProfile } from "./types";


export const getProfile = () =>
  mainAxios.get<ResponseData<UserProfile>>('/api/v1/user/profile');

