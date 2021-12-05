import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import * as S from "./style";
const token = localStorage.getItem("access_token");
const socket = io(`ws://3.35.216.245:3000?token=Bearer ${token}`);
const ChattingContent = () => {
  useEffect(() => {
    socket.on("get.message", (msg) => {
      console.log(msg);
    });
  }, []);
  const [message, setMessage] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };
  const sendMessage = () => {
    socket.emit("send.message", {
      message: message,
      room_id: 0,
      user_id: 2,
    });
    setMessage("");
    socket.on("check.message", () => {
      socket.emit("get.message", { room_id: 0 });
    });
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
      <S.InputContainer>
        <input value={message} onChange={onChange} onKeyPress={checkEnter} />
        <span>보내기</span>
      </S.InputContainer>
    </>
  );
};

export default ChattingContent;
