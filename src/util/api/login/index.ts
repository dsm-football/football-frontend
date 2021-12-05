import { loginLink, postLoginType } from "../../../constance/login";
import { getRequest } from "../default";
import uri from "../uri";

export const getLoginLink = async() => {
    try{
        const request = getRequest();
        return await request.get<loginLink>(uri.login);
    }
    catch(error){
         return Promise.reject(error)
    }
}
export const postLogin = async(code:any) => {
    try{
        const request = getRequest();
        return await request.post(uri.loginUser, code);
    }
    catch(error){
        return Promise.reject(error)
    }
}