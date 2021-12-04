import React from "react";
import * as S from "./style";
const ChattingContent = () => {
  return (
    <S.ChattingContentContainer>
      <S.DayInfo>2021년 11월 30일</S.DayInfo>
      <S.MessageContainer>
        <S.OtherProfile />
        <S.MessageBox>
          <span>님 존나 못하는뎈ㅋㅋㅋㅋ</span>
        </S.MessageBox>
        <S.MessageTime>PM 10:00</S.MessageTime>
      </S.MessageContainer>

      <S.MyMessageContainer>
        <S.MessageTime>PM 10:00</S.MessageTime>
        <S.MyMessageBox>
          <span>ㅅㅂ ㅋㅋㅋ 벌레가 깝치누</span>
        </S.MyMessageBox>
      </S.MyMessageContainer>
    </S.ChattingContentContainer>
  );
};

export default ChattingContent;
