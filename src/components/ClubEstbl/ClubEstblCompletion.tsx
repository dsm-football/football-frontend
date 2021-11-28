import React from "react";
import * as S from "./style";
import { CameraImg } from "../../assets";
const ClubEstblCompletion = () => {
  return (
    <>
      <S.ClubEstblCompletionWrapper>
        <span>
          축하합니다!
          <br />
          FC축구한판 동호회가 개설되었습니다.
        </span>
        <S.ClubEstblCompletionLogo>
          <img src={CameraImg} alt="" />
        </S.ClubEstblCompletionLogo>
        <S.CompletionPage>완료</S.CompletionPage>
      </S.ClubEstblCompletionWrapper>
    </>
  );
};

export default ClubEstblCompletion;
