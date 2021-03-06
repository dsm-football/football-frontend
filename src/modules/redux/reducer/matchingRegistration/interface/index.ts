import { MatchOptionType } from "../../../../../constance/matchingRegistration";
import { error } from "../../../../../models/error";

interface MatchRegistrationState {
  matchOption: MatchOptionType;
  error: error | null;
  noticeMessage: string;
  page: number;
}

export default MatchRegistrationState;
