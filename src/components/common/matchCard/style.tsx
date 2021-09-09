import styled from "styled-components";

export const CardContainer = styled.div`
  width: 210px;
  height: 136px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  margin-right: 9px;
`;

export const CardHeader = styled.div`
  width: 85%;
  margin: auto;
  display: flex;
  justify-content: space-between;

  & p {
    font-size: 11px;
  }
`;

export const AreaText = styled.p`
  padding: 5px 10px;
  background-color: #f0f0f0;
  border-radius: 2px;
`;

export const EditText = styled.p`
  color: #6c6c6c;
`;

export const MatchingContainer = styled.div`
  width: 80%;
  height: 73px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ClubIntro = styled.div`
  width: 47px;

  & div {
    width: 38px;
    height: 38px;
    background-color: #C4C4C4;
    border-radius: 50%;
    margin: auto;
    margin-bottom: 5px;
  }

  & span {
    display: inline-block;
    width: 47px;
    font-size: 11px;
    text-align: center;
    margin: auto;
  }
`;

export const MatchInfo = styled.div`
  width: 51px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & span{
    font-size: 10px;
    text-align: center;
  }

  & p {
    font-family: 'Montserrat';
    font-size: 18px;
    margin-top: 2px;
    margin-bottom: 5px;
    text-align: center;
    font-weight: bold;
  }
`

export const MatchStatus = styled.span`
  height: 16px;
  background-color: #E1E1E1;
  border-radius: 8px;
`
