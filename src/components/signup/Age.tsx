import React from "react";
import { Header, PageMoveHeader } from "../common";
import * as S from "./style";
const Age = () => {
  return (
    <>
      <Header />
      <PageMoveHeader />
      <S.InputSignupWrapper>
        <S.InputWrapper>
          <S.Input type="number" />
          <span>나이를 입력하세요</span>
        </S.InputWrapper>
        <S.NextPage>다음</S.NextPage>
      </S.InputSignupWrapper>
    </>
  );
};

export default Age;
