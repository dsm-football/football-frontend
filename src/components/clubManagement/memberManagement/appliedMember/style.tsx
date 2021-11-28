import styled from "styled-components";
import { color } from "../../../../style";

export const MemberContainer = styled.div`
  width: 100%;
  height: 65px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  border: 1px solid #c4c4c4;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 10px;
`;

export const MemberInfo = styled.div`
  height: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

export const MemberName = styled.span`
  font-size: 13px;
`;

export const MemberInfoFont = styled.span`
  font-size: 12px;
`;

export const AceeptContainer = styled.div`
  margin-right: 12px;

  button {
    width: 60px;
    height: 24px;
    background-color: ${color.main};
    color: black;
    border-radius: 3px;
    border: none;
    margin-right: 5px;
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;
  }
`;
