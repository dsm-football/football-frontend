import styled from "styled-components";

export const MemberContainer = styled.div`
  width: 100%;
  height: 64px;
  background-color: #dedede;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  & div {
    display: flex;
    align-items: center;
  }
`;

export const ProfileImg = styled.div`
  width: 40px;
  height: 40px;
  background-color: #c4c4c4;
  border-radius: 50%;
  margin-left: 10px;
`;

export const MemberInfo = styled.div`
  height: 37px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

export const MemberName = styled.span`
  font-size: 16px;
`;

export const MemberInfoFont = styled.span`
  font-size: 11px;
`;

export const AceeptContainer = styled.div`
  & button {
    width: 60px;
    height: 22px;
    background-color: #c4c4c4;
    border-radius: 2px;
    border: none;
    margin-right: 10px;
    cursor: pointer;
  }
`;