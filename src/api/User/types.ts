export type Gender = 'male' | 'female' | 'etc';

export interface UserProfile {
  userId: number;
  username: string; // email
  socialType: 'KAKAO' | 'APPLE';
  birth: string;
  gender: Gender | null;
  nickname: string;
}
