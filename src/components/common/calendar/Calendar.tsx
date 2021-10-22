import React, { useEffect, useState } from "react";
import { NextIcon, PrevIcon } from "../../../assets";
import * as S from "./style";
import CalendarDayRow from "./CalendarDayRow";
import useCalendar from "../../../util/hooks/calendar/useCalendar";
import moment from "moment";

const WEEK = ["일", "월", "화", "수", "목", "금", "토"];

const Calendar = () => {
  const [calendarDate, setCalendarDate] = useState<moment.Moment>(moment());
  const { state, setState } = useCalendar();
  const { setDate, setCalendar } = setState;

  const setMonth = (next: boolean) =>
    next
      ? setCalendarDate(calendarDate.clone().add(1, "month"))
      : setCalendarDate(calendarDate.clone().subtract(1, "month"));

  const makeCalendar = () => {
    const today = calendarDate;

    const startWeek = today.clone().startOf("month").week();
    const endWeek =
      today.clone().endOf("month").week() === 1
        ? 53
        : today.clone().endOf("month").week();
    let calendar = [];

    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <CalendarDayRow today={today} week={week} setDate={setCalendarDate} />
      );
    }
    return calendar;
  };

  const closeCalendar = () => {
    setState.setCalendar(false);
  };

  const checkCalendar = () => {};

  return (
    <>
      <S.ModalBackground>
        <S.CalendarWrapper>
          <S.CalendarHeader>
            <div>
              <S.CalendarHeaderYear>
                {calendarDate.format("YYYY년")}
              </S.CalendarHeaderYear>
              <S.CalendarHeaderDate>
                {calendarDate.format("MM월 DD일 ")}
                {WEEK[calendarDate.day()]}
              </S.CalendarHeaderDate>
            </div>
          </S.CalendarHeader>
          <S.CalendarContent>
            <S.CalendarSelectMonthWrapper>
              <img
                src={PrevIcon}
                alt="Prev"
                onClick={() => {
                  setMonth(false);
                }}
              />
              <span>
                {calendarDate.format("YYYY")}년 {calendarDate.format("MM")}월
              </span>
              <img
                src={NextIcon}
                alt="Next"
                onClick={() => {
                  setMonth(true);
                }}
              />
            </S.CalendarSelectMonthWrapper>
            <S.CalendarWeek>
              {WEEK.map((v: string, i: number) => {
                return <span key={i}>{v}</span>;
              })}
            </S.CalendarWeek>
            <S.CalendarDayWrapper>{makeCalendar()}</S.CalendarDayWrapper>
            <S.CheckButtonWrapper>
              <span onClick={closeCalendar}>취소</span>
              <span onClick={checkCalendar}>확인</span>
            </S.CheckButtonWrapper>
          </S.CalendarContent>
        </S.CalendarWrapper>
      </S.ModalBackground>
    </>
  );
};

export default Calendar;
