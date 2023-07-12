//{"age": 0, "gender": null, "id": null, "nickname": null, "role": "USER", "socialId": null, "socialType": "APPLE", "username": "g2yrwkbtyg@privaterelay.appleid.com"}
//{"gender": "female", "socialType": "KAKAO", "username": "gkdud7873@naver.com"}

export interface UserProfile {
  username: string;
  socialType: 'KAKAO' | 'APPLE';
}
