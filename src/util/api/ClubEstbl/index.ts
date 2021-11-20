import Axios from "axios"
import { BASE_URL } from "../default"

export const getClubNameRequest = (clubName:string) => {
    Axios({
        method: 'get',
        url: BASE_URL + '/club/check',
        params:{
            name:clubName
        },
    })
    .then(res=>console.log(res))
    .catch(error=>console.log(error))
}