import React from "react";
import * as S from "./style";
import { Header, PageMoveHeader } from "../common";
const ClubEstblCompletion = () => {
  return (
    <>
      <Header />
      <PageMoveHeader />
      <S.ClubEstblCompletionWrapper>
        <span>
          축하합니다!
          <br />
          FC축구한판 동호회가 개설되었습니다.
        </span>
        <S.ClubEstblCompletionLogo />
      </S.ClubEstblCompletionWrapper>
    </>
  );
};

export default ClubEstblCompletion;
