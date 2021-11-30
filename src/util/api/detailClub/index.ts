import { getRequestWithAccessToken } from "../default";
import uri from "../uri";

export const applyMembership = async (id: string) => {
  try {
    const accessToken = localStorage.getItem("access_token") || "";
    const request = getRequestWithAccessToken(accessToken);
    return await request.post(uri.application, {
      club_id: id,
    });
  } catch (error) {
    throw error;
  }
};
