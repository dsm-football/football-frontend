import React from "react";
import * as S from "./style";
import Calender from "./funciton";
import { Link } from "react-router-dom";

const arr3 = ["전체", "서울", "경기", "인천", "대전", "대구", "광주", " 부산"];

const Area = () => {
  return (
    <>
      <S.Matching>지역별 매칭찾기</S.Matching>
      <Calender />
      <S.Areas>
        {arr3.map((el, index) => (
          <div key={index}>{el}</div>
        ))}
      </S.Areas>
      <S.ApplicationList>
        <S.Application>
          <div className="a">
            <S.Set>서울</S.Set>
            <S.AppButton>신청가능</S.AppButton>
          </div>
          <div className="a">
            <S.FIcon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI2rZz1s-azimbMXiP7FxgUFVtKVyRMPRtKA&usqp=CAU" />
            <S.Match>VS</S.Match>
            <S.SIcon />
          </div>
          <S.TeamNameList>
            <S.TeamName>FC호날두파워</S.TeamName>
            <S.TeamName2>???</S.TeamName2>
          </S.TeamNameList>
          <div className="a">
            <Link to="MatchDetail">
              <S.Apply>신청하기</S.Apply>
            </Link>
          </div>
        </S.Application>
        <S.Application>
          <div className="a">
            <S.Set>서울</S.Set>
            <S.AppButton>신청가능</S.AppButton>
          </div>
          <div className="a">
            <S.FIcon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3i7GbURcK_8Rzvp9zaEuAWx1NuRobO3SfDA&usqp=CAU" />
            <S.Match>VS</S.Match>
            <S.SIcon />
          </div>
          <S.TeamNameList>
            <S.TeamName>FC마이스터고</S.TeamName>
            <S.TeamName2>???</S.TeamName2>
          </S.TeamNameList>
          <div className="a">
            <Link to="MatchDetail">
              <S.Apply>신청하기</S.Apply>
            </Link>
          </div>
        </S.Application>
        <S.Application>
          <div className="a">
            <S.Set>서울</S.Set>
            <S.AppButton>신청가능</S.AppButton>
          </div>
          <div className="a">
            <S.FIcon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRizTY1-JLOJZYFlui57rWKN_8xKY308GJezQ&usqp=CAU" />
            <S.Match>VS</S.Match>
            <S.SIcon />
          </div>
          <S.TeamNameList>
            <S.TeamName>FC동네축구팀</S.TeamName>
            <S.TeamName2>???</S.TeamName2>
          </S.TeamNameList>
          <div className="a">
            <Link to="MatchDetail">
              <S.Apply>신청하기</S.Apply>
            </Link>
          </div>
        </S.Application>
      </S.ApplicationList>
    </>
  );
};

export default Area;
