import React from "react";
import { MatchOptionType } from "../../constance/matchingRegistration";
import * as S from "./style";

type Props = {
  setMatchOption: (payload: MatchOptionType) => void;
  setPage: (payload: number) => void;
  matchOption: MatchOptionType;
};

const genderArray = ["남자", "여자", "혼성"];

const MatchingOtherInfo = (props: Props) => {
  const { setMatchOption, setPage, matchOption } = props;

  const onClickNextPage = () => {
    if (matchOption.age === 0) {
      alert("나이를 선택해주세요.");
      return;
    } else if (matchOption.gender === 0) {
      alert("성별을 선택해주세요.");
      return;
    } else if (matchOption.person === 0) {
      alert("팀 인원을 선택해주세요.");
      return;
    }

    setPage(3);
  };

  return (
    <>
      <S.MainWrapper>
        <S.MatchingInfoList>
          <S.MatchingInfoWrapper>
            <S.MatchingInfo>
              <S.MatchingInfoTitleFont>나이</S.MatchingInfoTitleFont>
              <S.MatchingInfoSelect
                onChange={(e) => {
                  setMatchOption({
                    ...matchOption,
                    age: Number(e.target.value),
                  });
                }}
              >
                <option value={0} hidden>
                  나이 선택
                </option>
                <option value={1} selected={1 === matchOption.age}>
                  전체
                </option>
                {[...Array(7)].map((v, i) => {
                  return (
                    <option
                      key={i}
                      value={i + 2}
                      selected={i + 2 === matchOption.age}
                    >
                      {(i + 1) * 10}대
                    </option>
                  );
                })}
              </S.MatchingInfoSelect>
            </S.MatchingInfo>
          </S.MatchingInfoWrapper>
          <S.MatchingInfoWrapper>
            <S.MatchingInfo>
              <S.MatchingInfoTitleFont>성별</S.MatchingInfoTitleFont>
              <S.MatchingInfoSelect
                onChange={(e) => {
                  setMatchOption({
                    ...matchOption,
                    gender: Number(e.target.value),
                  });
                }}
              >
                <option value={0} hidden>
                  성별 선택
                </option>
                {genderArray.map((v, i) => {
                  return (
                    <option
                      key={i}
                      value={i + 1}
                      selected={i + 1 === matchOption.gender}
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
              <S.MatchingInfoTitleFont>심판</S.MatchingInfoTitleFont>
              <S.MatchingInfoSelect
                onChange={(e) => {
                  setMatchOption({
                    ...matchOption,
                    hasReferee: e.target.value === "1",
                  });
                }}
              >
                <option value={0} selected={matchOption.hasReferee === false}>
                  없어요
                </option>
                <option value={1} selected={matchOption.hasReferee !== false}>
                  있어요
                </option>
              </S.MatchingInfoSelect>
            </S.MatchingInfo>
          </S.MatchingInfoWrapper>
          <S.MatchingInfoWrapper>
            <S.MatchingInfo>
              <S.MatchingInfoTitleFont>팀 인원</S.MatchingInfoTitleFont>
              <S.MatchingInfoSelect
                onChange={(e) => {
                  setMatchOption({
                    ...matchOption,
                    person: Number(e.target.value),
                  });
                }}
              >
                <option value={0} hidden>
                  팀 인원 선택
                </option>
                {[...Array(7)].map((v: any, i: number) => {
                  return (
                    <option
                      key={i}
                      value={i + 5}
                      selected={i + 5 === matchOption.person}
                    >
                      {i + 5}명
                    </option>
                  );
                })}
              </S.MatchingInfoSelect>
            </S.MatchingInfo>
          </S.MatchingInfoWrapper>
        </S.MatchingInfoList>
        <S.MatchingInfoCheckWrapper>
          <S.Directive>경기 옵션을 선택해주세요</S.Directive>
          <S.MatchingInfoCheckBtn onClick={onClickNextPage}>
            다음
          </S.MatchingInfoCheckBtn>
        </S.MatchingInfoCheckWrapper>
      </S.MainWrapper>
    </>
  );
};

export default MatchingOtherInfo;
