import React from "react";
import { MatchOptionType } from "../../constance/matchingRegistration";
import * as S from "./style";

type Props = {
  setMatchOption: (payload: MatchOptionType) => void;
  setPage: (payload: number) => void;
  matchOption: MatchOptionType;
};

const SelectSoccerKind = (props: Props) => {
  const onClickSoccerKind = (soccerKind: number) => {
    props.setMatchOption({
      ...props.matchOption,
      gameType: soccerKind,
    });
    props.setPage(1);
  };

  return (
    <>
      <S.MainWrapper>
        <S.SelectSoccerKindWrapper>
          <S.SelectSoccerKindBtn
            onClick={() => {
              onClickSoccerKind(1);
            }}
          >
            풋살
          </S.SelectSoccerKindBtn>
          <S.SelectSoccerKindBtn
            onClick={() => {
              onClickSoccerKind(2);
            }}
          >
            축구
          </S.SelectSoccerKindBtn>
          <S.DescriptionFont>종목을 선택해주세요</S.DescriptionFont>
        </S.SelectSoccerKindWrapper>
      </S.MainWrapper>
    </>
  );
};

export default SelectSoccerKind;
