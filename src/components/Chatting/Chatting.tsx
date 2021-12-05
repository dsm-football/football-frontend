import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { getChattingList } from "../../util/api/chatting";
import * as S from "./style";
const token = localStorage.getItem("access_token");
const socket = io(`ws://13.124.218.77:3000?token=Bearer ${token}`);
const Chatting = () => {
  const [list, getList] = useState([]);
  useEffect(() => {
    const getchattingList = getChattingList(
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3bHNkbjU3OTNAZ21haWwuY29tIiwidHlwZSI6ImFjY2VzcyIsImlhdCI6MTYzNTEyMDkzMSwiZXhwIjoyNjM1MTI4MTMxfQ.ToHX5vZcvH5Z07utSYGr02mA2G9AlYow2deMG5DiR6s"
    ).then((response) => getList(response.data));
  }, []);

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
            <h4>{"김지민 매니저님"}</h4>
            <span>{"너 개못하잖아"}</span>
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
