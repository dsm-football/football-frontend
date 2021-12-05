import React from "react";
import * as S from "./style";
import Select from "./SelectBox";
import Header from "../common/header/Header";

const List = () => {
  return (
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
            <S.ClubName>FC호날두파워</S.ClubName>
            <S.ClubExplain>호동생들의 모임입니다.</S.ClubExplain>
          </S.Explain>
        </S.Top>
        <S.Match>1경기 1승 0무 0패 - 승률 100%</S.Match>
        <S.Selected>
          <S.BoxDiv>
            <S.Box>서울</S.Box>
            <S.Box>남자</S.Box>
            <S.Box>20대</S.Box>
          </S.BoxDiv>
          <S.Recruit>7명 모집중</S.Recruit>
          <S.Poeple>11</S.Poeple>
        </S.Selected>
      </S.Clubs>
      <S.Clubs>
        <S.Top>
          <S.ClubImage
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROP0FDz7vwuA05VW6PM9uGhhpLB-f-yNT7OQ&usqp=CAU"
            }
          />
          <S.Explain>
            <S.ClubName>동네축구</S.ClubName>
            <S.ClubExplain>동네바보들의 축구일상</S.ClubExplain>
          </S.Explain>
        </S.Top>
        <S.Match>32경기 0승 0무 32패 - 승률 0%</S.Match>
        <S.Selected>
          <S.BoxDiv>
            <S.Box>보령</S.Box>
            <S.Box>남자</S.Box>
            <S.Box>10대</S.Box>
          </S.BoxDiv>
          <S.Recruit>9명 모집중</S.Recruit>
          <S.Poeple>1</S.Poeple>
        </S.Selected>
      </S.Clubs>
      <S.Clubs>
        <S.Top>
          <S.ClubImage
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiFInk7PX8GQukpTV7bXfnjqgCiw0tOvcevQ&usqp=CAU"
            }
          />
          <S.Explain>
            <S.ClubName>리버풀</S.ClubName>
            <S.ClubExplain>노스웨스트의 좇밥 리버풀입니다.</S.ClubExplain>
          </S.Explain>
        </S.Top>
        <S.Match>21경기 0승 12무 9패 - 승률 0%</S.Match>
        <S.Selected>
          <S.BoxDiv>
            <S.Box>구미</S.Box>
            <S.Box>남자</S.Box>
            <S.Box>30대</S.Box>
          </S.BoxDiv>
          <S.Recruit>3명 모집중</S.Recruit>
          <S.Poeple>17</S.Poeple>
        </S.Selected>
      </S.Clubs>
      <S.Clubs>
        <S.Top>
          <S.ClubImage
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwcbJtLuz3x_erb3_ZjDCkODn79MQ4qHiLWw&usqp=CAU"
            }
          />
          <S.Explain>
            <S.ClubName>대전FC</S.ClubName>
            <S.ClubExplain>대전 유성구의 자랑!</S.ClubExplain>
          </S.Explain>
        </S.Top>
        <S.Match>14경기 7승 4무 3패 - 승률 50%</S.Match>
        <S.Selected>
          <S.BoxDiv>
            <S.Box>대전</S.Box>
            <S.Box>여자</S.Box>
            <S.Box>20대</S.Box>
          </S.BoxDiv>
          <S.Recruit>3명 모집중</S.Recruit>
          <S.Poeple>19</S.Poeple>
        </S.Selected>
      </S.Clubs>
      <S.Clubs>
        <S.Top>
          <S.ClubImage
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR4giwxamewZyZsY4-j_WpOg0-BIaRsoCwfA&usqp=CAU"
            }
          />
          <S.Explain>
            <S.ClubName>축구한판</S.ClubName>
            <S.ClubExplain>축구한판할래요?</S.ClubExplain>
          </S.Explain>
        </S.Top>
        <S.Match>1경기 1승 0무 0패 - 승률 100%</S.Match>
        <S.Selected>
          <S.BoxDiv>
            <S.Box>전남</S.Box>
            <S.Box>남자</S.Box>
            <S.Box>40대</S.Box>
          </S.BoxDiv>
          <S.Recruit>3명 모집중</S.Recruit>
          <S.Poeple>15</S.Poeple>
        </S.Selected>
      </S.Clubs>
    </>
  );
};

export default List;
