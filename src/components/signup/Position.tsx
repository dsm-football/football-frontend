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
          <S.SignupCard>골키퍼</S.SignupCard>
          <S.SignupCard>공격수</S.SignupCard>
          <S.SignupCard>수비수</S.SignupCard>
        </S.CardWrapper>
        <span>포지션을 선택해주세요(중복선택가능)</span>
        <S.NextPage>다음</S.NextPage>
      </S.SignupWrapper>
    </>
  );
};

export default Position;
