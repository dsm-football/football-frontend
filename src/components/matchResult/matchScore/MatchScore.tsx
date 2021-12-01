import React from "react";
import { VSIcon } from "../../../assets";
import * as S from "../style";

const MatchScore = () => {
  return (
    <>
      <S.MainWrapper>
        <S.ScoreWrapper>
          <div className="scoreInput">
            <input type="number" placeholder="00" />
            <span>우리팀</span>
          </div>
          <img src={VSIcon} alt="VS" />
          <div className="scoreInput">
            <input type="number" placeholder="00" />
            <span>상대팀</span>
          </div>
        </S.ScoreWrapper>
        <span className="subFont">얼마나 득점했나요?</span>
        <button className="checkBtn">확인</button>
      </S.MainWrapper>
    </>
  );
};

export default MatchScore;
