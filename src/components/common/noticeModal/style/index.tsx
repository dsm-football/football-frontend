import styled from "styled-components";
import { color } from "../../../../style";

export const GrayScreen = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalWrapper = styled.div`
  width: 249px;
  height: 195px;

  background: #ffffff;
  border-radius: 10px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ModalTitle = styled.p`
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  margin-top: 35px;
`;

export const NoticeContent = styled.p`
  font-size: 14px;
  text-align: center;
  margin-top: 25px;
`;

export const NoticeCheckBtn = styled.button`
  margin-top: 35px;
  width: 210px;
  height: 35px;
  border-radius: 5px;
  background-color: ${color.main};
  border: none;
  font-size: 14px;
  font-weight: bold;
  color: white;
`;
