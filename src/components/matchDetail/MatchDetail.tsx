import React from "react";
import * as S from "./style";
import Header from "../common/header/Header";
import Explain from "../matchDetail/function";
import { Age, Man, ReFeree } from "../../assets";
import { getApply } from "../../util/api/matchDetail";
import { useHistory } from "react-router";

const Match = () => {
  const history = useHistory();

  return (
    <>
      <Header />
      <S.Back>
        <S.Div>
          <S.Title>FC호날두파워팀과 경기해요!</S.Title>
          <S.Rate>10경기 5승 1무 4패</S.Rate>
        </S.Div>
        <S.Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI2rZz1s-azimbMXiP7FxgUFVtKVyRMPRtKA&usqp=CAU" />
      </S.Back>
      <S.Information>경기 정보</S.Information>
      <S.List>
        <Explain />
      </S.List>
      <S.Option>경기 옵션</S.Option>
      <S.OptionDiv>
        <S.OptionList>
          <S.Emotion>
            <img src={Age} alt="" />
          </S.Emotion>
          <S.OptiaonName>20대</S.OptiaonName>
        </S.OptionList>
        <S.OptionList>
          <S.Emotion>
            <img src={Man} alt="" />
          </S.Emotion>
          <S.OptiaonName>남자만</S.OptiaonName>
        </S.OptionList>
        <S.OptionList>
          <S.Emotion>
            <img src={ReFeree} alt="" />
          </S.Emotion>
          <S.OptiaonName>심판 없어요</S.OptiaonName>
        </S.OptionList>
      </S.OptionDiv>
      <S.Apply
        onClick={() => {
          alert("성공적으로 신청했습니다.");
          history.goBack();
        }}
      >
        매칭 신청하기
      </S.Apply>
    </>
  );
};

export default Match;
