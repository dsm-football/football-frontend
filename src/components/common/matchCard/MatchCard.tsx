import React from 'react';
import * as S from './style';

const MatchCard = () => {
  return (
    <S.CardContainer>
      <S.CardHeader>
        <S.AreaText>서울</S.AreaText>
        <S.EditText>편집</S.EditText>
      </S.CardHeader>
      <S.MatchingContainer>
        <S.ClubIntro>
          <div/>
          <span>FC어쩌구어쩌구</span>
        </S.ClubIntro>
        <S.MatchInfo>
          <span>8월 16일</span>
          <p>VS</p>
          <S.MatchStatus>매칭대기</S.MatchStatus>
        </S.MatchInfo>
        <S.ClubIntro>
          <div/>
          <span>???</span>
        </S.ClubIntro>
      </S.MatchingContainer>
    </S.CardContainer>
  );
}

export default MatchCard;