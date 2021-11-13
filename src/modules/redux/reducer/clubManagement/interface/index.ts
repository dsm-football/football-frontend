import { ClubMemberResponseType } from "../../../../../constance/clubManagement";
import { error } from "../../../../../models/error";

interface ClubManagementState {
  error: error | null;
  memberList: Array<ClubMemberResponseType>;
  id: string;
}

export default ClubManagementState;
