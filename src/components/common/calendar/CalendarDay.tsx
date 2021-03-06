import moment from "moment";
import React from "react";
import { color } from "../../../style";
import * as S from "./style";

const weatherIconUrl = "http://openweathermap.org/img/wn/";

interface Props {
  today: moment.Moment;
  current: moment.Moment;
  setDate: (payload: moment.Moment) => void;
  i: number;
  weatherIcon: string;
}

const CalendarDay = (props: Props) => {
  const { today, current, setDate, i, weatherIcon } = props;

  const dayClick = (current: moment.Moment) => setDate(current);

  let isSelected =
    today.format("YYYYMMDD") === current.format("YYYYMMDD") ? true : false;

  return (
    <>
      <span
        style={{
          background: isSelected ? `${color.main}` : "white",
          color: i === 0 ? "red" : "black",
        }}
        onClick={() => {
          dayClick(current);
        }}
      >
        {current.format("D")}
        {weatherIcon && (
          <S.Icon
            src={weatherIconUrl + weatherIcon + "@2x.png"}
            alt="날씨 아이콘"
          />
        )}
      </span>
    </>
  );
};

export default CalendarDay;
