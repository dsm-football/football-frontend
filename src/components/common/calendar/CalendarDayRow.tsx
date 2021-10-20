import React from "react";
import * as S from "./style";
import moment from "moment";
import { color } from "../../../style";

type PropsType = {
  today: moment.Moment;
  week: number;
  setDate: React.Dispatch<React.SetStateAction<moment.Moment>>;
};

const CalendarDayRow = (props: PropsType) => {
  const { today, week, setDate } = props;

  const dayClick = (current: moment.Moment) => setDate(current);

  return (
    <>
      <S.CalendarDayRow>
        {Array(7)
          .fill(0)
          .map((n, i): any => {
            let current = today
              .clone()
              .week(week)
              .startOf("week")
              .add(n + i, "day");

            let isSelected =
              today.format("YYYYMMDD") === current.format("YYYYMMDD")
                ? true
                : false;

            let isOtherMonth =
              current.format("MM") !== today.format("MM") ? true : false;

            if (!isOtherMonth) {
              return (
                <span
                  style={{
                    background: isSelected ? `${color.main}` : "white",
                    color: i === 0 ? "red" : "black",
                  }}
                  key={i}
                  onClick={() => {
                    dayClick(current);
                  }}
                >
                  {current.format("D")}
                </span>
              );
            } else return <span key={i}></span>;
          })}
      </S.CalendarDayRow>
    </>
  );
};

export default CalendarDayRow;
