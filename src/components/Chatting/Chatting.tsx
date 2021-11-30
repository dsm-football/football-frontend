import React from "react";
import * as S from "./style";
const Chatting = () => {
  return (
    <S.ChattingContainer>
      <S.ChattingList>
        <S.ProfileImage />
        <S.ChattingInfo>
          <h4>김병지 매니저님</h4>
          <span>니네 존나 못하잖아 ㅋㅋ</span>
        </S.ChattingInfo>
        <S.Time>
          <span>PM 9:40</span>
          <S.Message>1</S.Message>
        </S.Time>
      </S.ChattingList>
    </S.ChattingContainer>
  );
};

export default Chatting;
