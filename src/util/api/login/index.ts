import { loginLink } from "../../../constance/login";
import { getRequest } from "../default";
import uri from "../uri";

export const getLoginLink = async() => {
    try{
        const request = getRequest();
        return await request.get<loginLink>(uri.login);
    }
    catch(error){
         console.log(error);
    }
}