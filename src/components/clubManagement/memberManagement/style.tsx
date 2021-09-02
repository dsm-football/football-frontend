import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 85%;
  margin: auto;
`

interface Props {
  applicationStatus : boolean
}

export const AllowSubscription = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 23px;

  & span{
    font-size: 16px;
  }
`

export const SwitchContainer = styled.div`
  width: 64px;
  height: 30px;
  background-color: ${({applicationStatus}: Props) => applicationStatus ? "#C4C4C4": "#008800"};
  border-radius: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const Switch = styled.div`
  width: 18px;
  height: 18px;
  background-color: white;
  border-radius: 50%;
  margin-left: ${({applicationStatus} : Props) => applicationStatus ? "8px" : "37px"};
  transition: 0.5s;
`

export const AppliedMember = styled.div`
  width: 100%;
  margin-top: 33px;
  font-size: 16px;
  font-weight: 600;
`