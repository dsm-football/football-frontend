import { getRequestWithAccessToken } from "../default";
import uri from "../uri";

export const postGameResult = async (
  gameId: number,
  hostScore: number,
  participantScore: number
) => {
  try {
    const accessToken = localStorage.getItem("access_token") || "";
    const request = getRequestWithAccessToken(accessToken);
    const response = await request.post(uri.matchResult, {
      game_id: gameId,
      host_score: hostScore,
      participant_score: participantScore,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
