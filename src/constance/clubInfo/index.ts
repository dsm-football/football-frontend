export type ClubMemberResponseType = {
  profile: string;
  name: string;
  area: string;
  age: number;
  gender: string;
  position: string;
  club_back_num: number;
  user_id: number;
};

export type ClubApplicationResponseType = {
  name: string;
  area: string;
  age: number;
  gender: string;
  profile: string;
};

export type ClubInfoResponseType = {
  main_profile: string;
  sub_profile: string;
  name: string;
  description: string;
  sns: string;
  area: string;
  cycle: string;
  gender: string;
};
