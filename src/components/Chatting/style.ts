import styled from "styled-components";

export const ChattingContainer = styled.div`
  width: 100%;
  height: 540px;
`
export const ChattingList = styled.div`
    width: 100%;
    height: 70px;
    border-bottom: 1px solid #F0F0F0;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
export const ProfileImage = styled.div`
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
    h4{
        font-size: 15px;
        font-weight: 600;
    }
    span{
        font-size: 12px;
    }
`;
export const Time = styled.div`
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    color: #C4C4C4;
    font-size: 14px;
`;
export const Message = styled.div`
    background-color: #E4694A;
    color:white;
    width: 20px;
    height: 19px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
`;