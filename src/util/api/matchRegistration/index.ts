import { MatchOptionType } from "../../../constance/matchingRegistration";
import { getRequestWithAccessToken } from "../default";
import uri from "../uri";

export const postMatchingRegistration = async (
  accessToken: string,
  matchOption: MatchOptionType
) => {
  try {
    const request = getRequestWithAccessToken(accessToken);
    const response = await request.post(uri.matchingRegistration, matchOption);
    return response;
  } catch (error) {
    throw error;
  }
};
