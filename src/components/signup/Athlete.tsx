import React from "react";
import { Header, PageMoveHeader } from "../common";
import * as S from "./style";
const Position = () => {
  return (
    <>
      <Header />
      <PageMoveHeader />
      <S.SignupWrapper>
        <S.BigCardWrapper>
          <S.SignupCard>선수출신</S.SignupCard>
          <S.SignupCard>비선수출신</S.SignupCard>
        </S.BigCardWrapper>
      </S.SignupWrapper>
    </>
  );
};

export default Position;
