import React from "react";
import * as S from "./style";
import moment from "moment";
import CalendarDay from "./CalendarDay";

interface Props {
  today: moment.Moment;
  week: number;
  setDate: (payload: moment.Moment) => void;
  weather: any;
}

const CalendarDayRow = (props: Props) => {
  const { today, week, setDate, weather } = props;
  const now = moment();
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

            const weatherIcon =
              current.format("MM") === now.format("MM") &&
              (Number(current.format("DD")) - Number(now.format("DD")) >= 0 ||
                Number(current.format("DD")) - Number(now.format("DD")) <= 6)
                ? weather?.daily[
                    Number(current.format("DD")) - Number(now.format("DD"))
                  ]?.weather[0].icon
                : "";
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
                  weatherIcon={weatherIcon}
                />
              );
            } else return <span key={i}></span>;
          })}
      </S.CalendarDayRow>
    </>
  );
};

export default CalendarDayRow;
