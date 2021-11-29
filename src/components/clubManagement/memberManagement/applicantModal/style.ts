import styled from "styled-components";
import { MemberMoreIcon } from "../../../../assets";
import { color } from "../../../../style";

export const GrayScreen = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: rgba(107, 107, 107, 0.58);
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalWrapper = styled.div`
  width: 250px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;

  & .modalHeader {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 25px;

    & span {
      font-size: 16px;
      font-weight: 600;
      margin-left: 20px;
    }

    & img {
      margin-right: 20px;
    }
  }

  & .modalContent {
    width: 100%;
    padding: 0px 20px;
    margin-top: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & input {
      width: 100px;
      height: 30px;
      border: 1px solid #e4e1e9;
      box-sizing: border-box;
      border-radius: 4px;
      text-align: right;
      padding-right: 30px;
      font-size: 12px;

      background-image: url(${MemberMoreIcon});
      background-repeat: no-repeat;
      background-position: calc(100% - 10px) center;
    }

    & span {
      font-size: 14px;
    }
  }
`;

export const CheckBtn = styled.button`
  width: 210px;
  height: 35px;
  background-color: ${color.main};
  border-radius: 5px;
  border: none;
  margin-top: 30px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;
