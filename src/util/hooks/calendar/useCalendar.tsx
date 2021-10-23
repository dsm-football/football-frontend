import { useDispatch } from "react-redux";
import { setCalendar } from "../../../modules/redux/action/calendar";
import { useSelectState } from "../default";

const useCalendar = () => {
  const dispatch = useDispatch();
  const state = useSelectState().calendar;
  const setState = {
    setCalendar: (payload: boolean) => {
      dispatch(setCalendar(payload));
    },
  };
  return {
    state,
    setState,
  };
};

export default useCalendar;
