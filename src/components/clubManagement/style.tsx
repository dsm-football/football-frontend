import styled from 'styled-components';

export const ClubManageBanner = styled.div`
  width: 100%;
  height: 90px;
  background-color: #D6D6D6;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ClubManageList = styled.div`
  width: 100%;
  height: 42px;
  background-color: #ECECEC;

  & ul{
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;

    & li{
      height: 100%;
      display: flex;
      align-items: center;
      margin-left: 23px;
      list-style: none;

      :first-child{
        font-weight: bold;
        border-bottom: 2px solid #030303;
      }
    }
  }
`

export const MatchingList = styled.div`
  
`