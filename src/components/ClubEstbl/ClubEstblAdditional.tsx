import React from "react";
import * as S from "./style";

const ClubEstblAdditional = () => {
  return (
    <>
      <S.ClubEstblAdditionalWrapper>
        <S.SelectBoxWrapper>
          <S.SelectBox>
            <div>
              <S.InputTitle>동호회 정원</S.InputTitle>
              <S.Select name="memberNum" id="memberNum">
                <option value="no">0</option>
                <option value="10">10명 미만</option>
                <option value="20">20명 미만</option>
              </S.Select>
            </div>
          </S.SelectBox>
          <S.SelectBox>
            <div>
              <S.InputTitle>시합주기(선택)</S.InputTitle>
              <S.Select name="memberNum" id="memberNum">
                <option value="no">-</option>
                <option value="10">10명 미만</option>
                <option value="20">20명 미만</option>
              </S.Select>
            </div>
          </S.SelectBox>
          <S.SelectBox>
            <div>
              <S.InputTitle>나이대 설정(선택)</S.InputTitle>
              <S.Select name="memberNum" id="memberNum">
                <option value="no">전체</option>
                <option value="10">10명 미만</option>
                <option value="20">20명 미만</option>
              </S.Select>
            </div>
          </S.SelectBox>
          <S.SelectBox>
            <div>
              <S.InputTitle>성별 설정(선택)</S.InputTitle>
              <S.Select name="memberNum" id="memberNum">
                <option value="no">전체</option>
                <option value="10">10명 미만</option>
                <option value="20">20명 미만</option>
              </S.Select>
            </div>
          </S.SelectBox>
        </S.SelectBoxWrapper>
        <S.NextPage>확인</S.NextPage>
      </S.ClubEstblAdditionalWrapper>
    </>
  );
};

export default ClubEstblAdditional;
