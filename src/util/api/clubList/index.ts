import { getRequest } from "../default";
import uri from "../uri";

export const getClubList = async (
    area_id: number,
    is_application: boolean,
    age_group: number,
    gender_id: number
) => {
    try {
        const request = getRequest();
        return await request.get(uri.clubList, {
            params: {
                area_id: area_id,
                is_application: is_application,
                age_group: age_group,
                gender_id: gender_id,
            }
        });
    } catch (error) {
        throw error;
    }
}