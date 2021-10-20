import React, { useEffect, useState } from "react";
import { NextIcon, PrevIcon } from "../../../assets";
import * as S from "./style";
import moment from "moment";
import { color } from "../../../style";
import axios from "axios";

const WEEK = ["일", "월", "화", "수", "목", "금", "토"];

type LocationType = {
  longitude: number;
  latitude: number;
};

const Calendar = () => {
  const [date, setDate] = useState<moment.Moment>(() => moment());
  const [location, setLocation] = useState<LocationType | null>(null);
  const [url, setUrl] = useState<string>("");

  const dayClick = (current: moment.Moment) => setDate(current);
  const setMonth = (next: boolean) =>
    next
      ? setDate(date.clone().add(1, "month"))
      : setDate(date.clone().subtract(1, "month"));

  useEffect(() => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          ...location,
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      });
      setUrl(
        `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,minutely,alerts&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
    } else {
      alert("GPS를 지원하지 않습니다.");
    }
  }, []);

  const getWeather = () => {
    axios
      .get(url)
      .then((response: any) => {
        console.log(response);
      })
      .catch((e) => {
        console.log("asda");
        console.error(e);
      });
  };

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
        <S.CalendarDayRow key={week}>
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
