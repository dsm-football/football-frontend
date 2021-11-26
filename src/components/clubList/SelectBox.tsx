import React from 'react'
import * as S from './style';

const area = [
    "서울",
    "부산",
    "대구",
    "인천",
    "광주",
    "대전",
    "울산",
    "세종",
    "경기",
    "강원",
    "충북",
    "충남",
    "전북",
    "전남",
    "경북",
    "경남",
    "제주",
  ];


const Select = () => {
    return(
        <>
            <S.Options>
                <S.SelectBox>
                    <S.Defulat>지역</S.Defulat>
                    <S.Choice>
                        <option>전체</option>
                        {area.map((v: string, i: number) => {
                        return (
                        <option key={i} value={v}>
                            {v}
                        </option>
                            );
                        })}
                    </S.Choice>
                </S.SelectBox>
                <S.SelectBox>
                    <S.Defulat>상태</S.Defulat>
                    <S.Choice>
                        <option>전체</option>
                        <option>모집중</option>
                        <option>끝남</option>
                    </S.Choice>
                </S.SelectBox>
                <S.SelectBox>
                <S.Defulat>나이</S.Defulat>
                    <S.Choice>
                        <option>전체</option>
                        {[...Array(7)].map((v: any, i: number) => {
                        return <option key={i}>{(i + 1) * 10}대</option>;
                        })}
                    </S.Choice>
                </S.SelectBox>
                <S.SelectBox>
                <S.Defulat>성별</S.Defulat>
                    <S.Choice>
                        <option>전체</option>
                        <option>남자</option>
                        <option>여자</option>
                        <option>혼성</option>
                    </S.Choice>
                </S.SelectBox>
                <S.SelectBox>
                <S.Defulat>승률</S.Defulat>
                    <S.Choice>
                        <option>전체</option>
                    </S.Choice>
                </S.SelectBox>
            </S.Options>
        </>
    );
};

export default Select;