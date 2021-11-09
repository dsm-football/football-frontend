import {getRequest} from '../default';
import { profileUri } from "../url";

export const MyPageToken = async() =>{
    try{
        const request = getRequest();
        const response = await request.get(profileUri.profile);
        return response;
    }
    catch(error) {
        throw error;
    }
}