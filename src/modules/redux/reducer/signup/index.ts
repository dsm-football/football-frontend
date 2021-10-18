import { 
    GET_USERNAME,
    GET_USERAGE,
    UserInfoAction,
    GET_GENDER,
    GET_POSITION,
    GET_ATHLETE,
    GET_PAGE,
    GET_CODE,
    GET_AREA,
    GET_INTRODUCE } from "../../action/signup";
export const initialState = {
  code: "",
  name: "",
  age: 0,
  position_id: 0,
  gender_id: 0,
  athlete: true,
  area: "",
  pageIndex: 0,
  introduce: "",
};

export function userSignupreducer(state=initialState, action: UserInfoAction){
    switch(action.type){
        case GET_USERNAME:
            return {
                ...state,
                name: action.name
            };
        case GET_USERAGE:
            return {
                ...state,
                age: action.age
            }
            case GET_GENDER:
                return{
                    ...state,
                    gender: Number(action.gender)
                }
        case GET_POSITION:
            return{
                ...state,
                position_id: action.position_id
            }
        case GET_PAGE:
            return{
                ...state,
                pageIndex: action.pageIndex
            }
        case GET_ATHLETE:
            return{
                ...state,
                athlete: action.athlete
            }
        case GET_CODE:
            return{
                ...state,
                code: action.code
            }
        case GET_AREA:
            return{
                ...state,
                area: action.area
            }
        case GET_INTRODUCE:
            return{
                ...state,
                introduce:action.introduce
            }
        default:
            return 0;
    }
}
