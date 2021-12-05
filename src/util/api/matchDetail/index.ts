import {getRequestWithAccessToken} from "../default";
import uri from "../uri";

export const getApply = async (gameId: number) => {
    try {
        const token = localStorage.getItem("access_token") || "";
        const request = getRequestWithAccessToken(token);
        return await request.post(uri.application, {
            game_id: gameId
        })
    } catch (error) {
        throw error;
    }
}