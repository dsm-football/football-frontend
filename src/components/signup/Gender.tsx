import React from "react";
import { Header, PageMoveHeader } from "../common";
import * as S from "./style";
const Position = () => {
  return (
    <>
      <Header />
      <PageMoveHeader />
      <S.SignupWrapper>
        <S.CardWrapper>
          <S.GenderCard>남자</S.GenderCard>
          <S.GenderCard>여자</S.GenderCard>
        </S.CardWrapper>
        <span>성별을 선택해주세요</span>
      </S.SignupWrapper>
    </>
  );
};

export default Position;
