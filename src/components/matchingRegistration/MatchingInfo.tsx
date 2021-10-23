import moment from "moment";
import React, { useState } from "react";
import { MoreIcon } from "../../assets";
import useCalendar from "../../util/hooks/calendar/useCalendar";
import Calendar from "../common/calendar/Calendar";
import * as S from "./style";

const MatchingInfo = () => {
  const { state, setState } = useCalendar();
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
                <option value="서울">서울</option>
                <option value="부산">부산</option>
                <option value="대구">대구</option>
                <option value="인천">인천</option>
                <option value="광주">광주</option>
                <option value="대전">대전</option>
                <option value="울산">울산</option>
                <option value="세종">세종</option>
                <option value="경기">경기</option>
                <option value="강원">강원</option>
                <option value="충북">충북</option>
                <option value="충남">충남</option>
                <option value="전북">전북</option>
                <option value="전남">전남</option>
                <option value="경북">경북</option>
                <option value="경남">경남</option>
                <option value="제주">제주</option>
              </S.MatchingInfoSelect>
            </S.MatchingInfo>
          </S.MatchingInfoWrapper>
          <S.MatchingInfoWrapper>
            <S.MatchingInfo>
              {state.isCalendar && (
                <Calendar
                  setDate={setMatchDate}
                  setCalendar={setState.setCalendar}
                />
              )}
              <S.MatchingInfoTitleFont>경기 날짜</S.MatchingInfoTitleFont>
              <S.CalendarInput
                onClick={() => {
                  setState.setCalendar(true);
                }}
              >
                <span>{matchDate?.format("YYYY-MM-DD")}</span>
                <img src={MoreIcon} alt="MoreIcon" />
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
        </S.MatchingInfoList>
      </S.MainWrapper>
    </>
  );
};

export default MatchingInfo;
