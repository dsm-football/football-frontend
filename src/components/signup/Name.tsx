import React from "react";
import * as S from "./style";
const Name = () => {
  return (
    <>
      <S.InputSignupWrapper>
        <S.InputWrapper>
          <S.Input type="string" />
          <span>실명을 입력하세요</span>
        </S.InputWrapper>
        <S.NextPage>다음</S.NextPage>
      </S.InputSignupWrapper>
    </>
  );
};

export default Name;
