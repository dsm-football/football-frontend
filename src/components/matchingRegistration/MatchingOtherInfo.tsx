import React from "react";
import * as S from "./style";

const MatchingOtherInfo = () => {
  return (
    <>
      <S.MainWrapper>
        <S.MatchingInfoList>
          <S.MatchingInfoWrapper>
            <S.MatchingInfo>
              <S.MatchingInfoTitleFont>나이</S.MatchingInfoTitleFont>
              <S.MatchingInfoSelect>
                <option>전체</option>
                {[...Array(7)].map((v: any, i: number) => {
                  return <option key={i}>{(i + 1) * 10}대</option>;
                })}
              </S.MatchingInfoSelect>
            </S.MatchingInfo>
          </S.MatchingInfoWrapper>
          <S.MatchingInfoWrapper>
            <S.MatchingInfo>
              <S.MatchingInfoTitleFont>성별</S.MatchingInfoTitleFont>
              <S.MatchingInfoSelect>
                <option>혼성</option>
                <option>남자</option>
                <option>여자</option>
              </S.MatchingInfoSelect>
            </S.MatchingInfo>
          </S.MatchingInfoWrapper>
          <S.MatchingInfoWrapper>
            <S.MatchingInfo>
              <S.MatchingInfoTitleFont>심판</S.MatchingInfoTitleFont>
              <S.MatchingInfoSelect>
                <option>없어요</option>
                <option>있어요</option>
              </S.MatchingInfoSelect>
            </S.MatchingInfo>
          </S.MatchingInfoWrapper>
          <S.MatchingInfoWrapper>
            <S.MatchingInfo>
              <S.MatchingInfoTitleFont>팀인원</S.MatchingInfoTitleFont>
              <S.MatchingInfoSelect>
                {[...Array(7)].map((v: any, i: number) => {
                  return <option key={i}>{i + 5}명</option>;
                })}
              </S.MatchingInfoSelect>
            </S.MatchingInfo>
          </S.MatchingInfoWrapper>
          <S.MatchingInfoWrapper>
            <S.MatchingInfo>
              <S.MatchingInfoTitleFont>인당 비용</S.MatchingInfoTitleFont>
              <S.MatchingInfoInput type="number" placeholder="비용 입력" />
            </S.MatchingInfo>
          </S.MatchingInfoWrapper>
        </S.MatchingInfoList>
        <S.MatchingInfoCheckWrapper>
          <S.Directive>경기 옵션을 선택해주세요</S.Directive>
          <S.MatchingInfoCheckBtn>다음</S.MatchingInfoCheckBtn>
        </S.MatchingInfoCheckWrapper>
      </S.MainWrapper>
    </>
  );
};

export default MatchingOtherInfo;
