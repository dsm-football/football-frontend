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
  width: 65px;
  height: 30px;
  background-color: ${({ applicationStatus }: Props) =>
    applicationStatus ? "#008800" : "#C4C4C4"};
  border-radius: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Switch = styled.div`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  margin-left: ${({ applicationStatus }: Props) =>
    applicationStatus ? "8px" : "37px"};
  transition: 0.5s;
`;

export const AppliedMemberContainer = styled.div`
  width: 100%;
  margin-top: 35px;
`;

export const AppliedMemberList = styled.div`
  width: 100%;
  height: 110px;
  margin-top: 15px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const AppliedMemberListNotice = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;

export const MemberListContainer = styled.div`
  width: 100%;
  margin-top: 30px;
`;

export const MemberList = styled.ul`
  width: 100%;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  margin-top: 15px;

  & li {
    border-bottom: 1px solid #f3f3f3;
  }
`;

export const MemberAttribute = styled.li`
  height: 20px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & span {
    font-size: 10px;
  }

  & div {
    display: flex;
    align-items: center;
  }
`;

export const MemberBackNumber = styled.span`
  margin-right: 40px;
`;

export const MemberPosition = styled.span`
  margin-right: 95px;
  color: black;
`;
