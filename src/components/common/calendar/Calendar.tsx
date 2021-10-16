import React, { useState } from "react";
import DatePicker from "react-datepicker";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date: any) => setStartDate(date)}
        customInput={<CalendarInput />}
      />
    </>
  );
};

export default Calendar;
