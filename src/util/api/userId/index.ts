import { getRequestWithAccessToken } from "../default";
import uri from "../uri";

export const getUserId = async () => {
  try {
    const accessToken = localStorage.getItem("access_token") || "";
    const request = getRequestWithAccessToken(accessToken);
    const response = await request.get(uri.userId);
    return response.data;
  } catch (error) {
    throw error;
  }
};
