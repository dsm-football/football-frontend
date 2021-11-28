import styled from "styled-components";

export const MemberContainer = styled.li`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;

export const MemberImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const PersonalInformation = styled.div`
  margin-left: 10px;
`;

export const MemberName = styled.span`
  font-size: 14px;
`;

export const MemberInfo = styled.span`
  font-size: 10px;
  display: flex;
  justify-content: center;
  color: #545454;
`;

export const MemberBackNumberInput = styled.input`
  margin: 0;
  padding: 0;
  width: 58px;
  height: 28px;
  border: 1px solid #e4e1e9;
  border-radius: 4px;
  margin-right: 8px;
  padding-left: 5px;
`;

export const MemberPositionSelectBox = styled.select`
  width: 80px;
  height: 30px;
  border: 1px solid #e4e1e9;
  background-color: white;
  border-radius: 4px;
  margin-right: 8px;
  text-align: center;
`;

export const KickOutBtn = styled.button`
  width: 40px;
  height: 30px;
  border: 1px solid #e4e1e9;
  border-radius: 4px;
  font-size: 12px;
  background-color: white;
`;
