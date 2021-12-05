import { getRequestWithAccessToken } from "../default";
import uri from "../uri";

export const getUserId = async () => {
  try {
    localStorage.setItem(
      "access_token",
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3bHNkbjU3OTNAZ21haWwuY29tIiwidHlwZSI6ImFjY2VzcyIsImlhdCI6MTYzNTEyMDkzMSwiZXhwIjoyNjM1MTI4MTMxfQ.ToHX5vZcvH5Z07utSYGr02mA2G9AlYow2deMG5DiR6s"
    );
    const accessToken = localStorage.getItem("access_token") || "";
    const request = getRequestWithAccessToken(accessToken);
    const response = await request.get(uri.userId);
    return response.data;
  } catch (error) {
    throw error;
  }
};
