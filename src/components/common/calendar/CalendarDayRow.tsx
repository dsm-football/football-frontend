import React from "react";
import * as S from "./style";
import moment from "moment";
import CalendarDay from "./CalendarDay";

interface Props {
  today: moment.Moment;
  week: number;
  setDate: (payload: moment.Moment) => void;
}

const CalendarDayRow = (props: Props) => {
  const { today, week, setDate } = props;

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

            let isOtherMonth =
              current.format("MM") !== today.format("MM") ? true : false;

            if (!isOtherMonth) {
              return (
                <CalendarDay
                  key={i}
                  setDate={setDate}
                  today={today}
                  current={current}
                  i={i}
                />
              );
            } else return <span key={i}></span>;
          })}
      </S.CalendarDayRow>
    </>
  );
};

export default CalendarDayRow;
