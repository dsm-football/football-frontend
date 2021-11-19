import { getRequest, getRequestWithAccessToken } from "../default";
import uri from "../uri";

export const getClubMember = async (id: string) => {
  try {
    const request = getRequest();
    return await request.get(uri.club + id + "/member");
  } catch (error) {
    throw error;
  }
};

export const getApplicationMember = async () => {
  try {
    const accessToken = localStorage.getItem("access_token") || "";
    const request = getRequestWithAccessToken(accessToken);
    return await request.get(uri.application);
  } catch (error) {
    return error;
  }
};

export const getClubInfo = async (id: string) => {
  try {
    const request = getRequest();
    return await request.get(uri.club + id);
  } catch (error) {
    throw error;
  }
};
