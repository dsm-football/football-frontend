import React from "react";
import * as S from "./style";

const ClubEstbl = () => {
  return (
    <>
      <S.ClubEstblItemWrapper>
        <S.InputTitle>동호회명</S.InputTitle>
        <S.ClubEstblInput placeholder="n자 이내로 작성해주세요." />
        <div className="title-error">이미 사용중인 이름입니다.</div>
        <S.InputTitle>동호회 한 줄 소개</S.InputTitle>
        <S.ClubEstblInput />
        <S.InputTitle>동호회 SNS</S.InputTitle>
        <S.ClubEstblInput placeholder="회원들과 연락할 수 있는 오픈카톡방이나 SNS주소를 입력해주세요." />
        <S.InputTitle>동호회장 SNS</S.InputTitle>
        <S.ClubEstblInput placeholder="회원들과 연락할 수 있는 오픈카톡방이나 SNS주소를 입력해주세요." />
        <S.NextPage>다음</S.NextPage>
      </S.ClubEstblItemWrapper>
    </>
  );
};

export default ClubEstbl;
