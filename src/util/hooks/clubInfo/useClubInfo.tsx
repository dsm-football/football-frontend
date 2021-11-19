import { useDispatch } from "react-redux";
import {
  getClubInfo,
  getClubMember,
  setId,
} from "../../../modules/redux/action/clubInfo";
import { useSelectState } from "../default";

const UseClubInfo = () => {
  const dispatch = useDispatch();
  const state = useSelectState().clubInfo;
  const setState = {
    setId: (payload: string) => {
      dispatch(setId(payload));
    },
    getMemberList: () => {
      dispatch(getClubMember());
    },
    getClubInfo: () => {
      dispatch(getClubInfo());
    },
  };
  return { state, setState };
};

export default UseClubInfo;
