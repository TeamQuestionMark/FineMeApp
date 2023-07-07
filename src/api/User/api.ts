import { mainAxios } from "../shared/axios";


  //{"age": 0, "gender": null, "id": null, "nickname": null, "role": "USER", "socialId": null, "socialType": "APPLE", "username": "g2yrwkbtyg@privaterelay.appleid.com"}
export const getProfile = () =>
  mainAxios.get('/api/v1/user/profile');

