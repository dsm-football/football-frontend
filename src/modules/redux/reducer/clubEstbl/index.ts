import { GET_CLUBNAME, 
    GET_CLUBDISCRIPTION, 
    GET_MAIN_PROFILE, 
    GET_SUB_PROFILE, 
    GET_AREA_CODE, 
    GET_CYCLE_CODE, 
    GET_GENDER_CODE, 
    GET_AGE_GROUP_CODE, 
    ClubEstblInfoAction} from "../../action/clubEstbl";

export const initialState = {
  name: "",
  description: "",
  main_profile: "",
  sub_profile: "",
  area_code: 0,
  cycle_code: 0,
  gender_code: 0,
  age_group_code: 0
};

export function clubEstblreducer(state=initialState, action:ClubEstblInfoAction){
    switch(action.type){
        case GET_CLUBNAME:
            return{
                ...state,
                name: action.name
            }
        case GET_CLUBDISCRIPTION:
            return{
                ...state,
                discription: action.discription
            }
        case GET_MAIN_PROFILE:
            return{
                ...state,
                main_profile: action.main_profile
            }
        case GET_SUB_PROFILE:
            return{
                ...state,
                sub_profile: action.sub_profile
            }
        case GET_AREA_CODE:
            return{
                ...state,
                area_code: action.area_code
            }
        case GET_CYCLE_CODE:
            return{
                ...state,
                cycle_code: action.cycle_code
            }
        case GET_GENDER_CODE:
            return{
                ...state,
                gender_code: action.gender_code
            }
        case GET_AGE_GROUP_CODE:
            return{
                ...state,
                age_group_code: action.age_group_code
            }
        default:
            return 0;
    }
}