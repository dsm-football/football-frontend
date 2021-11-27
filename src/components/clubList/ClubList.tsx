import React from 'react'
import * as S from './style';
import Select from './SelectBox'
import Header from "../common/header/Header"

const List = () => {
    return(
        <>
            <Header />
            <S.Title>동호회를 찾아보세요!</S.Title>
            <S.Divide />
            <S.Find>
                <S.All>전체 111</S.All>
                <S.Period>
                    <option>최신순</option>
                    <option>오래전순</option>
                </S.Period>
            </S.Find>
            <Select />
            <S.Clubs>
                <S.Top>
                    <S.ClubImage />
                    <S.Explain>
                        <S.ClubName>동호회 이름 적는 곳 한줄까지가능</S.ClubName>
                        <S.ClubExplain>동호회 한줄 소개 적는 곳</S.ClubExplain>
                    </S.Explain>
                </S.Top>
                <S.Match>00경기 0승 0무 0패 - 승률 00%</S.Match>
                <S.Selected>
                    <S.BoxDiv>
                        <S.Box>서울</S.Box>
                        <S.Box>남자</S.Box>
                        <S.Box>20대</S.Box>
                    </S.BoxDiv>
                    <S.Recruit>1명 모집중</S.Recruit>
                    <S.Poeple>11</S.Poeple>
                </S.Selected>
            </S.Clubs>
        </>
    );
};

export default List;