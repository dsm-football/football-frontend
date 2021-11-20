import {
  ClubInfoResponseType,
  ClubMemberResponseType,
} from "../../../../../constance/clubInfo";
import { error } from "../../../../../models/error";

interface ClubInfoState {
  error: error | null;
  memberList: Array<ClubMemberResponseType>;
  id: string;
  clubInfo: ClubInfoResponseType;
}

export default ClubInfoState;
