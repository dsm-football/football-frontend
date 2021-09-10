import styled from 'styled-components';

export const MemberContainer = styled.tr`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  margin-top: 10px;
`

export const TdContainer = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const MemberImg = styled.td`
  width: 30px;
  height: 30px;
  background-color: #C4C4C4;
  border-radius: 50%;
`

export const MemberName = styled.span`
  font-size: 14px;
`

export const MemberInfo = styled.span`
  font-size: 10px;
  color: #545454;
`