import React from 'react'
import * as S from './style';
import Ranks from './function';

const Rank = () => {
  return(
    <>
        <S.Split />
        <S.RankTitle>2021 하반기 랭킹</S.RankTitle>
        <S.AreaRank>
          <S.AllRank>전체랭킹</S.AllRank>
          <div>지역별랭킹</div>
        </S.AreaRank>
        <S.Myteam> 
          <S.TeamLogo />
          <div>
            <S.TeamName>FC어쩌구</S.TeamName>
            <S.Rank>n위 00승 0무 00패</S.Rank>
          </div>
        </S.Myteam>
        <S.AllCheck>
          <h1>팀 순위</h1>
          <h2>승점</h2>
          <S.Etc>매치</S.Etc>
          <S.Etcs>승</S.Etcs>
          <S.Etcs>무</S.Etcs>
          <S.Etcs>패</S.Etcs>
          <S.Etc>득점</S.Etc>
          <S.Etc>실점</S.Etc>
        </S.AllCheck>
        <Ranks />
        <Ranks />
        <Ranks />
        <Ranks />
        <Ranks />
    </>
  );
}

export default Rank;