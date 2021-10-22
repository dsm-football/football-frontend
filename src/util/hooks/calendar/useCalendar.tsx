import moment from "moment";
import { useDispatch } from "react-redux";
import { setCalendar, setDate } from "../../../modules/redux/action/calendar";
import { useSelectState } from "../default";

const useCalendar = () => {
  const dispatch = useDispatch();
  const state = useSelectState().calendar;
  const setState = {
    setDate: (payload: moment.Moment) => {
      dispatch(setDate(payload));
    },
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
