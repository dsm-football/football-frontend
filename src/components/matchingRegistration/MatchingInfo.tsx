import moment from "moment";
import React, { useState } from "react";
import Calendar from "../common/calendar/Calendar";
import * as S from "./style";

const areaOption = [
  "서울",
  "부산",
  "대구",
  "인천",
  "광주",
  "대전",
  "울산",
  "세종",
  "경기",
  "강원",
  "충북",
  "충남",
  "전북",
  "전남",
  "경북",
  "경남",
  "제주",
];

const MatchingInfo = () => {
  const [isMatchDateCalendar, setIsMatchDateCalendar] =
    useState<boolean>(false);
  const [isMatchDeadlineCalendar, setIsMatchDeadlineCalendar] =
    useState<boolean>(false);
  const [matchDate, setMatchDate] = useState<moment.Moment | null>();
  const [matchDeadline, setMatchDeadlin] = useState<moment.Moment | null>();

  return (
    <>
      <S.MainWrapper>
        <S.MatchingInfoList>
          <S.MatchingInfoWrapper>
            <S.MatchingInfo>
              <S.MatchingInfoTitleFont>매칭 지역</S.MatchingInfoTitleFont>
              <S.MatchingInfoSelect>
                {areaOption.map((v: string, i: number) => {
                  return (
                    <option key={i} value={v}>
                      {v}
                    </option>
                  );
                })}
              </S.MatchingInfoSelect>
            </S.MatchingInfo>
          </S.MatchingInfoWrapper>
          <S.MatchingInfoWrapper>
            <S.MatchingInfo>
              <S.MatchingInfoTitleFont>장소</S.MatchingInfoTitleFont>
              <S.GpsInput />
            </S.MatchingInfo>
          </S.MatchingInfoWrapper>
          <S.MatchingInfoWrapper>
            <S.MatchingInfo>
              {isMatchDateCalendar && (
                <Calendar
                  setDate={setMatchDate}
                  setCalendar={setIsMatchDateCalendar}
                />
              )}
              <S.MatchingInfoTitleFont>경기 날짜</S.MatchingInfoTitleFont>
              <S.CalendarInput
                onClick={() => {
                  setIsMatchDateCalendar(true);
                }}
              >
                <span>{matchDate?.format("YYYY-MM-DD")}</span>
              </S.CalendarInput>
            </S.MatchingInfo>
          </S.MatchingInfoWrapper>
          <S.MatchingInfoWrapper>
            <S.MatchingInfo>
              <S.MatchingInfoTitleFont>경기시간</S.MatchingInfoTitleFont>
              <S.MatchingInfoSelect>
                {[...Array(24)].map((v: any, i: number) => {
                  return <option key={i}>{`${i}:00`}</option>;
                })}
              </S.MatchingInfoSelect>
            </S.MatchingInfo>
          </S.MatchingInfoWrapper>
          <S.MatchingInfoWrapper>
            <S.MatchingInfo>
              {isMatchDeadlineCalendar && (
                <Calendar
                  setDate={setMatchDeadlin}
                  setCalendar={setIsMatchDeadlineCalendar}
                />
              )}
              <S.MatchingInfoTitleFont>매칭 마감일</S.MatchingInfoTitleFont>
              <S.CalendarInput
                onClick={() => {
                  setIsMatchDeadlineCalendar(true);
                }}
              >
                <span>{matchDeadline?.format("YYYY-MM-DD")}</span>
              </S.CalendarInput>
            </S.MatchingInfo>
          </S.MatchingInfoWrapper>
        </S.MatchingInfoList>
        <S.MatchingInfoCheckWrapper>
          <S.Directive>항목을 선택해주세요</S.Directive>
          <S.MatchingInfoCheckBtn>다음</S.MatchingInfoCheckBtn>
        </S.MatchingInfoCheckWrapper>
      </S.MainWrapper>
    </>
  );
};

export default MatchingInfo;
