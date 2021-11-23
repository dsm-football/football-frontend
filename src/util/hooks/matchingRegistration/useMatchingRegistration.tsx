import { useDispatch } from "react-redux";
import { MatchOptionType } from "../../../constance/matchingRegistration";
import {
  setMatchOption,
  setNoticeMessage,
} from "../../../modules/redux/action/matchingRegistration";
import { setPage } from "../../../modules/redux/action/matchingRegistration";
import { useSelectState } from "../default";

const useMatchingRegistration = () => {
  const dispatch = useDispatch();
  const state = useSelectState().matchingRegistration;
  const setState = {
    setMatchOption: (payload: MatchOptionType) => {
      dispatch(setMatchOption(payload));
    },
    setNoticeMessage: (payload: string) => {
      dispatch(setNoticeMessage(payload));
    },
    setPage: (payload: number) => {
      dispatch(setPage(payload));
    },
  };

  return {
    state,
    setState,
  };
};

export default useMatchingRegistration;
