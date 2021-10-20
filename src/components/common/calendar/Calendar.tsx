import React, { useState } from "react";
import { NextIcon, PrevIcon } from "../../../assets";
import * as S from "./style";
import moment from "moment";
import CalendarDayRow from "./CalendarDayRow";

const WEEK = ["일", "월", "화", "수", "목", "금", "토"];

const Calendar = () => {
  const [date, setDate] = useState<moment.Moment>(() => moment());

  const setMonth = (next: boolean) =>
    next
      ? setDate(date.clone().add(1, "month"))
      : setDate(date.clone().subtract(1, "month"));

  const makeCalendar = () => {
    const today = date;

    const startWeek = today.clone().startOf("month").week();
    const endWeek =
      today.clone().endOf("month").week() === 1
        ? 53
        : today.clone().endOf("month").week();
    let calendar = [];

    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <CalendarDayRow today={today} week={week} setDate={setDate} />
      );
    }
    return calendar;
  };

  return (
    <>
      <S.ModalBackground>
        <S.CalendarWrapper>
          <S.CalendarHeader>
            <div>
              <S.CalendarHeaderYear>
                {date.format("YYYY년")}
              </S.CalendarHeaderYear>
              <S.CalendarHeaderDate>
                {date.format("MM월 DD일 ")}
                {WEEK[date.day()]}
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
                {date.format("YYYY")}년 {date.format("MM")}월
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
              <span>취소</span>
              <span>확인</span>
            </S.CheckButtonWrapper>
          </S.CalendarContent>
        </S.CalendarWrapper>
      </S.ModalBackground>
    </>
  );
};

export default Calendar;
