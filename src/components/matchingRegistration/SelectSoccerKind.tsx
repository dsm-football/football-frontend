import React from "react";
import * as S from "./style";

const SelectSoccerKind = () => {
  return (
    <>
      <S.MainWrapper>
        <S.SelectSoccerKindWrapper>
          <S.SelectSoccerKindBtn>풋살</S.SelectSoccerKindBtn>
          <S.SelectSoccerKindBtn>축구</S.SelectSoccerKindBtn>
          <S.DescriptionFont>종목을 선택해주세요</S.DescriptionFont>
        </S.SelectSoccerKindWrapper>
      </S.MainWrapper>
    </>
  );
};

export default SelectSoccerKind;
