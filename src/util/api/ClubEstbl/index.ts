import { ClubInfoType } from "../../../constance/ClubEstbl";
import { getRequest, getRequestWithAccessToken } from "../default"
import uri from "../uri"
export const getClubNameRequest = async (clubName:string) => {
    try{
        const request = getRequest()
        return await request.get(uri.getClubName);
    }
    catch(error){
        return Promise.reject(error);
    }
}
export const postClubEstbl = async (token:string,clubInfo:ClubInfoType) => {
    try{
        const request =  getRequestWithAccessToken(token)
        const response = await request.post(uri.club,clubInfo)
        return response;
    }
    catch(error){
        return Promise.reject(error);
    }
}