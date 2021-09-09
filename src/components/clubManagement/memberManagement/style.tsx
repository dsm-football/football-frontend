import styled from "styled-components";

export const MainContainer = styled.div`
  width: 85%;
  margin: auto;
`;

interface Props {
  applicationStatus: boolean;
}

export const AllowSubscription = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 23px;
`;

export const SwitchContainer = styled.div`
  width: 64px;
  height: 30px;
  background-color: ${({ applicationStatus }: Props) =>
    applicationStatus ? "#C4C4C4" : "#008800"};
  border-radius: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Switch = styled.div`
  width: 18px;
  height: 18px;
  background-color: white;
  border-radius: 50%;
  margin-left: ${({ applicationStatus }: Props) =>
    applicationStatus ? "8px" : "37px"};
  transition: 0.5s;
`;

export const AppliedMemberContainer = styled.div`
  width: 100%;
  margin-top: 33px;

`;

export const AppliedMemberList = styled.div`
  width: 100%;
  height: 110px;
  margin-top: 14px;
  overflow-y: scroll;

  ::-webkit-scrollbar{
    display: none;
  }
`

export const MemberListContainer = styled.div`
  width: 100%;
  margin-top: 28px;
`

export const MemberListTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 14px;
  
  & tr{
    width: 100%;
    border-bottom: 1px solid #F3F3F3;
  }
`

export const MemberAttribute = styled.tr`
  height: 21px;
  & td{
    font-size: 10px;
  }
`