import styled from "styled-components";
import { color } from "../../style";

export const ChattingContainer = styled.div`
  width: 100%;
  height: 540px;
`;
export const ChattingList = styled.div`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f0f0f0;
`;
export const ChattingInfo = styled.div`
  width: 180px;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h4 {
    font-size: 15px;
    font-weight: 600;
  }
  span {
    font-size: 12px;
  }
`;
export const Time = styled.div`
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  color: #c4c4c4;
  font-size: 14px;
`;
export const Message = styled.div`
  background-color: #e4694a;
  color: white;
  width: 20px;
  height: 19px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
`;

// chattingContent
export const ChattingContentContainer = styled(ChattingContainer)`
  padding: 10px;
  height: 540px;
`;
export const MessageContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  margin-bottom: 10px;
`;
export const OtherProfile = styled(ProfileImage)`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;
export const MessageBox = styled.div`
  width: auto;
  background-color: #f0f0f0;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 7px 7px 7px;
  margin-right: 8px;
  padding: 0 10px;
`;
export const MessageTime = styled(Time)`
  height: 100%;
  justify-content: flex-end;
  margin-right: 8px;
  font-size: 12px;
`;
export const MyMessageBox = styled(MessageBox)`
  border-radius: 7px 0 7px 7px;
`;
export const MyMessageContainer = styled(MessageContainer)`
  justify-content: flex-end;
`;
export const DayInfo = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: rgba(0, 0, 0, 0.35);
  font-size: 13px;
  margin: 8px 0px;
  ::before {
    content: "";
    flex-grow: 1;
    background: #f0f0f0;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin-right: 10px;
  }
  ::after {
    content: "";
    flex-grow: 1;
    background-color: #f0f0f0;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin-left: 10px;
  }
`;
export const InputContainer = styled.div`
  width: 100%;
  height: 50px;
  bottom: 0;
  position: fixed;
  background-color: ${color.main};
  display: flex;
  justify-content: space-around;
  align-items: center;
  input {
    width: 70%;
    height: 60%;
    border-radius: 10px;
    outline: none;
    border: none;
    padding-left: 10px;
  }
  span {
    font-size: 18px;
    font-weight: 600;
  }
`;
