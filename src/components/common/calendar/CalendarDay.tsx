import React, { memo } from "react";
import { color } from "../../../style";

const CalendarDay = memo((props: any) => {
  const { today, current, setDate, i } = props;

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
      </span>
    </>
  );
});

export default CalendarDay;
