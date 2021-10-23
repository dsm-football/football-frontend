import styled from "styled-components";
import { color } from "../../../style";

export const ModalBackground = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CalendarWrapper = styled.div`
  width: 85%;
  height: 525px;
  background-color: white;
`;

export const CalendarHeader = styled.div`
  width: 100%;
  height: 110px;
  background-color: ${color.main};

  & div {
    padding-top: 30px;
    margin-left: 30px;
  }
`;

export const CalendarHeaderYear = styled.p`
  font-size: 14px;
  color: white;
`;

export const CalendarHeaderDate = styled.p`
  font-weight: 600;
  font-size: 25px;
  color: white;
  margin-bottom: 35px;
`;

export const CalendarContent = styled.div`
  width: 100%;
  height: 415px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const CalendarSelectMonthWrapper = styled.div`
  width: 70%;
  height: 16px;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    cursor: pointer;
  }

  span {
    font-weight: 600;
    font-size: 14px;
  }
`;

export const CalendarWeek = styled.div`
  width: 75%;
  height: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;

  span {
    width: 30px;
    font-size: 10px;
    text-align: center;
  }
`;

export const CalendarDayWrapper = styled.div`
  width: 75%;
  height: 265px;
`;

export const CalendarDayRow = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
  font-size: 10px;

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 2px;
  }
`;

export const Icon = styled.div`
  margin-top: 2px;
  width: 12px;
  height: 12px;
  background-color: black;
`;

export const CheckButtonWrapper = styled.div`
  margin-top: 20px;
  width: 25%;
  color: #1b191c;
  font-size: 10px;
  display: flex;
  justify-content: space-between;
`;
