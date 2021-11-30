import React from "react";
import { getChattingList } from "../../util/api/chatting";
import * as S from "./style";
const Chatting = () => {
  const chattingList = getChattingList(
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3bHNkbjU3OTNAZ21haWwuY29tIiwidHlwZSI6ImFjY2VzcyIsImlhdCI6MTYzNTEyMDkzMSwiZXhwIjoyNjM1MTI4MTMxfQ.ToHX5vZcvH5Z07utSYGr02mA2G9AlYow2deMG5DiR6s"
  ).then((response) => console.log(response));
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
