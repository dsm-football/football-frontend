import uri from "../uri";
import { getRequestWithAccessToken } from "../default";

export const getChattingList = async (token:string) => {
    try{
        const request = getRequestWithAccessToken(token);
        const response = await request.get(uri.chattingList)
        return response;
    }
    catch(error){
        return Promise.reject(error);
    }
}