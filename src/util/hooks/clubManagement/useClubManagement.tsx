import { useDispatch } from "react-redux";
import { ClubMemberResponseType } from "../../../constance/clubManagement";
import { getClubMember, setId } from "../../../modules/redux/action/clubManagement";
import { useSelectState } from "../default";

const UseClubManagement = () => {
  const dispatch = useDispatch();
  const state = useSelectState().clubManagement;
  const setState = {
    setId: (payload: string) => {
      dispatch(setId(payload));
    },
    getMemberList: (payload: ClubMemberResponseType) => {
      dispatch(getClubMember());
    },
  };
  return { state, setState };
};

export default UseClubManagement;
