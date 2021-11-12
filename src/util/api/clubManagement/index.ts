import { getRequest } from "../default";
import uri from "../uri";

export const getClubMember = async (id: string) => {
  try {
    const request = getRequest();
    return await request.get(uri.club + id + "/member");
  } catch (error) {
    throw error;
  }
};
