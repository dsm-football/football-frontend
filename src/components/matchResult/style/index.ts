import styled from "styled-components";
import { color } from "../../../style";

export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & .subFont {
    font-size: 14px;
    color: #c4c4c4;
    margin-top: 40px;
  }

  & .checkBtn {
    width: 320px;
    height: 55px;
    position: absolute;
    bottom: 20px;
    border: none;
    background-color: ${color.main};
    color: white;
    font-size: 16px;
    font-weight: bolder;
    border-radius: 6px;
  }
`;

export const ScoreWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px 40px;
  margin-top: 90px;

  & .scoreInput {
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & input {
      width: 100%;
      font-size: 40px;
      color: #1b191c;
      border: none;
      border-bottom: 1px solid;
      padding-bottom: 10px;
      text-align: center;
    }

    & span {
      margin-top: 15px;
      font-size: 14px;
    }
  }
`;
