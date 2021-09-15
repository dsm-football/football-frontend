import styled from 'styled-components';

export const ApplicationMatch = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  margin-bottom: 17px;

  & div{
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #C4C4C4;
  }

  & span{
    font-family: 'Noto Sans';
    width: 200px;
    height: 100%;
    font-size: 12px;
    margin-left: 12px;
  }

  & button{
    width: 60px;
    height: 24px;
    background-color: #C4C4C4;
    margin-left: 12px;
    border: none;
    font-size: 12px;
    border-radius: 3px;
  }
`