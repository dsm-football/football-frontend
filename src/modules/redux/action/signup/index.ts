export const GET_USERNAME = 'GET_USERNAME' as const;
export const GET_USERAGE = 'GET_USERAGE' as const;
export const GET_POSITION = 'GET_POSITION' as const;
export const GET_GENDER = 'GET_GENDER' as const;
export const GET_ATHLETE = 'GET_ATHLETE' as const;
export const GET_AREA = 'GET_AREA' as const;
export const GET_PAGE = 'GET_PAGE' as const;
export const GET_CODE = 'GET_CODE' as const;
export const GET_INTRODUCE = 'GET_INTRODUCE' as const;
export const setUserName = (name:string) => ({
  type: GET_USERNAME,
  name
});
export const setUserAge = (age:number) => ({
    type: GET_USERAGE,
    age
});
export const setGender = (gender:string) => ({
    type: GET_GENDER,
    gender
})
export const setPosition = (position_id: number) => ({
    type: GET_POSITION,
    position_id
})
export const setAthlete = (athlete: boolean) => ({
    type: GET_ATHLETE,
    athlete
})
export const setPage = (pageIndex: number) => ({
    type: GET_PAGE,
    pageIndex
})
export const setCode = (code: string) => ({
    type: GET_CODE,
    code
})
export const setArea = (area: string) => ({
    type: GET_AREA,
    area
})
export const setIntroduce = (introduce:string) => ({
    type: GET_INTRODUCE,
    introduce
})
export type UserInfoAction =
  | ReturnType<typeof setUserName>
  | ReturnType<typeof setUserAge>
  | ReturnType<typeof setGender>
  | ReturnType<typeof setPosition>
  | ReturnType<typeof setPage>
  | ReturnType<typeof setAthlete>
  | ReturnType<typeof setCode>
  | ReturnType<typeof setArea>
  | ReturnType<typeof setIntroduce>;