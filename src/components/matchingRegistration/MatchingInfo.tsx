import moment from "moment";
import React, { useEffect, useState } from "react";
import { MatchOptionType } from "../../constance/matchingRegistration";
import Calendar from "../common/calendar/Calendar";
import * as S from "./style";
import { areaOption } from "../../constance/option";

type Props = {
  setMatchOption: (payload: MatchOptionType) => void;
  setPage: (payload: number) => void;
  matchOption: MatchOptionType;
};

const MatchingInfo = (props: Props) => {
  const [isMatchDateCalendar, setIsMatchDateCalendar] =
    useState<boolean>(false);
  const [isMatchDeadlineCalendar, setIsMatchDeadlineCalendar] =
    useState<boolean>(false);
  const [matchDate, setMatchDate] = useState<moment.Moment | null>();
  const [matchDeadline, setMatchDeadlin] = useState<moment.Moment | null>();
  const { setMatchOption, setPage, matchOption } = props;

  useEffect(() => {
    console.log(matchDate);
    if (matchDate !== undefined && matchDate?.format("YYYY-MM-DD") !== "") {
      setMatchOption({
        ...matchOption,
        matchDate: matchDate?.format("YYYY-MM-DD") || "",
      });
    }
  }, [matchDate]);

  useEffect(() => {
    console.log(matchDeadline);
    if (
      matchDeadline !== undefined &&
      matchDeadline?.format("YYYY-MM-DD") !== ""
    ) {
      setMatchOption({
        ...matchOption,
        endDate: matchDeadline?.format("YYYY-MM-DD") || "",
      });
    }
  }, [matchDeadline]);

  const onClickNextPage = () => {
    if (matchOption.area === "") {
      alert("지역을 선택해주세요.");
      return;
    } else if (matchOption.latitude === undefined) {
      alert("장소를 선택해주세요");
      return;
    } else if (matchOption.matchDate === "") {
      alert("경기 날짜를 입력해주세요.");
      return;
    } else if (matchOption.matchTime === "") {
      alert("경기 시간을 입력해주세요");
      return;
    } else if (matchOption.endDate === undefined) {
      alert("매칭 마감일을 입력해주세요");
      return;
    }

    setPage(2);
  };

  return (
    <>
      <S.MainWrapper>
        <S.MatchingInfoList>
          <S.MatchingInfoWrapper>
            <S.MatchingInfo>
              <S.MatchingInfoTitleFont>매칭 지역</S.MatchingInfoTitleFont>
              <S.MatchingInfoSelect
                onChange={(e) => {
                  setMatchOption({
                    ...matchOption,
                    area: areaOption[Number(e.target.value)],
                  });
                }}
              >
                <option value={0} hidden>
                  지역 선택
                </option>
                {areaOption.map((v: string, i: number) => {
                  return (
                    <option
                      key={i}
                      value={i}
                      selected={matchOption.area === areaOption[i]}
                    >
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
                <span>{matchOption.matchDate}</span>
              </S.CalendarInput>
            </S.MatchingInfo>
          </S.MatchingInfoWrapper>
          <S.MatchingInfoWrapper>
            <S.MatchingInfo>
              <S.MatchingInfoTitleFont>경기시간</S.MatchingInfoTitleFont>
              <S.MatchingInfoSelect
                onChange={(e) => {
                  setMatchOption({
                    ...matchOption,
                    matchTime: e.target.value,
                  });
                }}
              >
                <option value="" hidden>
                  시간 선택
                </option>
                {[...Array(24)].map((v: any, i: number) => {
                  return (
                    <option
                      key={i}
                      value={`${i}:00`}
                      selected={`${i}:00` === matchOption.matchTime}
                    >{`${i}:00`}</option>
                  );
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
                <span>{matchOption.endDate}</span>
              </S.CalendarInput>
            </S.MatchingInfo>
          </S.MatchingInfoWrapper>
        </S.MatchingInfoList>
        <S.MatchingInfoCheckWrapper>
          <S.Directive>항목을 선택해주세요</S.Directive>
          <S.MatchingInfoCheckBtn onClick={onClickNextPage}>
            다음
          </S.MatchingInfoCheckBtn>
        </S.MatchingInfoCheckWrapper>
      </S.MainWrapper>
    </>
  );
};

export default MatchingInfo;
