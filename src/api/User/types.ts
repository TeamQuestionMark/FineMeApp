export type Gender = 'male' | 'female' | 'etc';

export interface UserProfile {
  username: string; // email
  socialType: 'KAKAO' | 'APPLE';
  birth: string;
  gender: Gender | null;
  nickname: string;
}
