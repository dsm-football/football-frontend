import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import * as S from "./style";
const token = localStorage.getItem("access_token");
const socket = io(`ws://13.124.218.77:3000?token=Bearer ${token}`);

const ChattingContent = () => {
  let myMessage: string[] = ["너 개못하잖아"];
  const [message, setMessage] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };
  useEffect(() => {
    socket.on("check.message", () => {
      console.log("success");
      socket.emit("get.message", { room_id: 0 });
      socket.on("receive.message", (msg) => console.log(msg));
    });
  });
  const sendMessage = () => {
    socket.emit("send.message", {
      message: message,
      room_id: 0,
      user_id: 2,
    });
    myMessage.push(message);
    setMessage("");
  };

  const checkEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") {
      return;
    }
    sendMessage();
  };

  return (
    <>
      <S.ChattingContentContainer>
        <S.DayInfo>2021년 11월 30일</S.DayInfo>
        <S.MessageContainer>
          <S.OtherProfile src="https://imgnews.pstatic.net/image/421/2021/02/19/0005176866_001_20210219182837487.jpg?type=w647" />
          <S.MessageBox>
            <span>안녕하세요! 게임 합시다!</span>
          </S.MessageBox>
          <S.MessageTime>PM 10:00</S.MessageTime>
        </S.MessageContainer>

        {myMessage.map((msg, index) => (
          <S.MyMessageContainer key={index}>
            <S.MessageTime>PM 10:00</S.MessageTime>
            <S.MyMessageBox>
              <span>{msg}</span>
            </S.MyMessageBox>
          </S.MyMessageContainer>
        ))}
      </S.ChattingContentContainer>

      <S.InputContainer>
        <input value={message} onChange={onChange} onKeyPress={checkEnter} />
        <span>보내기</span>
      </S.InputContainer>
    </>
  );
};

export default ChattingContent;
