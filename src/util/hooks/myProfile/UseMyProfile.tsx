import { useDispatch } from "react-redux";
import { getMyProfile, setId } from "../../../modules/redux/action/myProfile";
import { useSelectState } from "../default";

const UseMyProfile = () => {
  const dispatch = useDispatch();
  const state = useSelectState().myProfile;
  const setState = {
    setMyProfile: () => {
      dispatch(getMyProfile());
    },
    setId: (payload: number) => {
      dispatch(setId(payload));
    },
  };

  return {
    state,
    setState,
  };
};

export default UseMyProfile;
