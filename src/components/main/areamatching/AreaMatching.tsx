import React from 'react'
import * as S from './style';

const Area = () => {
  return(
    <>
        <S.Matching>지역별 매칭찾기</S.Matching>
        <section>
            <S.Calendar>
                <S.Sunday>일</S.Sunday>
                <S.Day>월</S.Day>
                <S.Day>화</S.Day>
                <S.Day>수</S.Day>
                <S.Day>목</S.Day>
                <S.Day>금</S.Day>
                <S.Day>토</S.Day>
            </S.Calendar>
            <S.Date>
                <S.First>22</S.First>
                <S.Rest>23</S.Rest>
                <S.Rest>24</S.Rest>
                <S.Rest>25</S.Rest>
                <S.Rest>26</S.Rest>
                <S.Rest>27</S.Rest>
                <S.Rest>28</S.Rest>
            </S.Date>
            <S.Area> 
              <S.All>전체</S.All>
              <S.And>서울</S.And>
              <S.And>경기</S.And>
              <S.And>인천</S.And>
              <S.And>대전</S.And>
              <S.And>대구</S.And>
              <S.And>광주</S.And>
              <S.And>부산</S.And>
            </S.Area>
        </section> 
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
          <S.Apply>신청하기</S.Apply>
        </S.Application>
    </>
  );
}

export default Area;