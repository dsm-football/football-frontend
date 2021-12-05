import React, { useState } from "react";
import io from "socket.io-client";
import { getChattingList } from "../../util/api/chatting";
import * as S from "./style";
const token = localStorage.getItem("access_token");
const socket = io(`ws://3.38.180.170:3000?token=Bearer ${token}`);
const Chatting = () => {
  const [list, getList] = useState([]);
  const getchattingList = getChattingList(
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3bHNkbjU3OTNAZ21haWwuY29tIiwidHlwZSI6ImFjY2VzcyIsImlhdCI6MTYzNTEyMDkzMSwiZXhwIjoyNjM1MTI4MTMxfQ.ToHX5vZcvH5Z07utSYGr02mA2G9AlYow2deMG5DiR6s"
  ).then((response) => getList(response.data));
  const enterChatting = () => {
    socket.emit("create.room", {
      room_id: 0,
      host_user_id: 1,
      user_id: 2,
    });
  };
  return (
    <S.ChattingContainer>
      {list.map((chatting, index) => (
        <S.ChattingList key={index} onClick={enterChatting}>
          <S.ProfileImage />
          <S.ChattingInfo>
            <h4>{}</h4>
            <span>{}</span>
          </S.ChattingInfo>
          <S.Time>
            <span>PM 9:40</span>
            <S.Message>1</S.Message>
          </S.Time>
        </S.ChattingList>
      ))}
    </S.ChattingContainer>
  );
};

export default Chatting;
