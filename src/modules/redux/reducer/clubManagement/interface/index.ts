import { ClubMemberResponseType } from "../../../../../constance/clubManagement";
import { error } from "../../../../../models/error";

interface ClubManagementState {
  error: error | null;
  memberList: Array<ClubMemberResponseType>;
  id: number;
}

export default ClubManagementState;
