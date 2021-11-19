import React from 'react'
import * as S from './style';
import Calender from './funciton';

const arr3 = ['전체', '서울', '경기', '인천', '대전', '대구', '광주',' 부산']

const Area = () => {
  return(
    <>
        <S.Matching>지역별 매칭찾기</S.Matching>
        <Calender />
        <S.Areas>
                {arr3.map((el, index) => (
                        <div key={index}>
                            {el}
                        </div>
                ))}
            </S.Areas>         
        <S.Application>
          <div>
            <S.Set>서울</S.Set>
            <S.AppButton>신청가능</S.AppButton>
          </div>
          <div>
            <S.FIcon />
            <S.Match>VS</S.Match>
            <S.SIcon />
          </div>
          <div>
            <S.TeamName>FC호날두파워</S.TeamName>
            <S.TeamName2>강북축신</S.TeamName2>
          </div>
          <div>
            <S.Apply>신청하기</S.Apply>
          </div>
        </S.Application>
    </>
  );
}

export default Area;