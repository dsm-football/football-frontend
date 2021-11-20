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
    localStorage.setItem(
      "access_token",
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3bHNkbjU3OTNAZ21haWwuY29tIiwidHlwZSI6ImFjY2VzcyIsImlhdCI6MTYzNTEyMDkzMSwiZXhwIjoyNjM1MTI4MTMxfQ.ToHX5vZcvH5Z07utSYGr02mA2G9AlYow2deMG5DiR6s"
    );
    const accessToken = localStorage.getItem("access_token") || "";
    const request = getRequestWithAccessToken(accessToken);
    return await request.get(uri.application);
  } catch (error) {
    throw error;
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
