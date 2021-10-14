import styled from "styled-components";
import { color } from "../../../style";

export const MainWrapper = styled.div`
  width: 100%;
`;

export const MatchingRegistrationHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1e201d;
  color: ${color.main};
`;

export const SelectSoccerKindWrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SelectSoccerKindBtn = styled.button`
  width: 55%;
  height: 137px;
  color: white;
  background-color: ${color.main};
  cursor: pointer;
  border: none;
  font-size: 30px;
  font-weight: bolder;
  border-radius: 6px;

  & + & {
    margin-top: 15px;
  }
`;

export const DescriptionFont = styled.p`
  color: #c4c4c4;
  font-size: 14px;
  text-align: center;
  margin-top: 75px;
`;

export const MatchingInfoWrapper = styled.div`
  width: 100%;
`;
