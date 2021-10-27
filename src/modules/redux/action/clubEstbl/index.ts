export const GET_CLUBNAME = 'GET_CLUBNAME' as const;
export const GET_CLUBDISCRIPTION = 'GETCLUBDISCRIPTION' as const;
export const GET_MAIN_PROFILE = 'GET_MAIN_PROFILE' as const;
export const GET_SUB_PROFILE = 'GET_SUB_PROFILE' as const;
export const GET_AREA_CODE = 'GET_AREA_CODE' as const;
export const GET_CYCLE_CODE = 'GET_CYCLE_CODE' as const;
export const GET_GENDER_CODE = 'GET_GENDER_CODE' as const;
export const GET_AGE_GROUP_CODE = 'GET_AGE_GROUP_CODE' as const;

export const setClubName = (name:string) => ({
    type: GET_CLUBNAME,
    name
});
export const setClubDiscription = (discription: string) => ({
    type: GET_CLUBDISCRIPTION,
    discription
});
export const setMainProfile = (main_profile:string) => ({
    type: GET_MAIN_PROFILE,
    main_profile
});
export const setSubProfile = (sub_profile:string) => ({
    type: GET_SUB_PROFILE,
    sub_profile
});
export const setAreaCode = (area_code: number) => ({
    type: GET_AREA_CODE,
    area_code
});
export const setCycleCode = (cycle_code:number) => ({
    type: GET_CYCLE_CODE,
    cycle_code
});
export const setGenderCode = (gender_code:number) => ({
    type: GET_GENDER_CODE,
    gender_code
});
export const setAgeGroupCode = (age_group_code:number) =>({
    type: GET_AGE_GROUP_CODE,
    age_group_code
})
export type ClubEstblInfoAction =
  | ReturnType<typeof setClubName>
  | ReturnType<typeof setClubDiscription>
  | ReturnType<typeof setMainProfile>
  | ReturnType<typeof setSubProfile>
  | ReturnType<typeof setAreaCode>
  | ReturnType<typeof setCycleCode>
  | ReturnType<typeof setGenderCode>
  | ReturnType<typeof setAgeGroupCode>;