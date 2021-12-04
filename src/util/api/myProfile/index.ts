import { getRequest } from "../default";
import uri from "../uri";

export const getMyProfile = async (id: number) => {
  try {
    const request = getRequest();
    return await request.get(uri.profile + `/${id}`);
  } catch (error) {
    throw error;
  }
};
