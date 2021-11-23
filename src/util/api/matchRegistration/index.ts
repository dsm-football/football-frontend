import { MatchOptionType } from "../../../constance/matchingRegistration";
import { getRequestWithAccessToken } from "../default";
import uri from "../uri";

export const postMatchingRegistration = async (
  accessToken: string,
  matchOption: MatchOptionType
) => {
  const {
    gameType,
    area,
    matchDate,
    endDate,
    person,
    age,
    gender,
    hasReferee,
    longitude,
    latitude,
    matchTime,
  } = matchOption;
  try {
    const request = getRequestWithAccessToken(accessToken);
    const response = await request.post(uri.matchingRegistration, {
      game_type: gameType,
      area: area,
      date: `${matchDate} ${matchTime}:00`,
      end_date: `${endDate} 00:00:00`,
      personnel: person,
      age_type: age,
      gender_type: gender,
      has_referee: hasReferee,
      longitude: longitude || 0,
      latitude: latitude || 0,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
