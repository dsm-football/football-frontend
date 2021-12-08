import React, { FC } from "react";
import * as S from "./style";

type Props = {
  myProfile: string;
  yourProfile: string;
  area: string;
  myName: string;
  date: string;
  matchStatus: boolean;
  myScore: number;
  yourScore: number;
  opposingTeam: string;
};

const MatchCard: FC<Props> = (props) => {
  const {
    myProfile,
    yourProfile,
    myName,
    area,
    date,
    matchStatus,
    opposingTeam,
    myScore,
    yourScore,
  } = props;

  return (
    <S.CardContainer>
      <S.CardHeader>
        <S.AreaText>{area}</S.AreaText>
        <S.EditText>편집</S.EditText>
      </S.CardHeader>
      <S.MatchingContainer>
        <S.ClubIntro>
          <img src={myProfile} alt="내 프로필" />
          <span>{myName}</span>
        </S.ClubIntro>
        <S.MatchInfo>
          <span>{date}</span>
          <p>{matchStatus ? `${myScore} : ${yourScore}` : "VS"}</p>
          <S.MatchStatus>{matchStatus ? "경기종료" : "매칭대기"}</S.MatchStatus>
        </S.MatchInfo>
        <S.ClubIntro>
          {yourProfile ? <img src={yourProfile} alt="상대프로필" /> : <div />}
          <span>{opposingTeam}</span>
        </S.ClubIntro>
      </S.MatchingContainer>
    </S.CardContainer>
  );
};

export default MatchCard;
