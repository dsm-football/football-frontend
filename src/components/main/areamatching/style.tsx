import styled from "styled-components";

export const Matching = styled.div`
  width: 196px;
  height: 25px;
  top: 512px;
  background-color: white;
  margin-left: 20px;
  margin-top: 190px;
  font-weight: 600;
`;

export const Calendars = styled.div`
  width: 100%;
  height: 60px;
  margin-bottom: 10px;
  background-color: #0BFF0B;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const Dates = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  padding-top: 8px;
  text-align: center;
`

export const Font = styled.div`
  font-weight: 500;
  margin-bottom: -15px;
`

export const Areas = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`

export const Application = styled.div`
  width: 320px;
  height: 190px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  margin-left: 20px;
  margin-bottom: 12px;
  & div{
    display: flex;
    justify-content: space-between;
    text-align: center;
  }
`;

export const Set = styled.div`
  width: 40px;
  height: 20px;
  padding: 4px 8px;
  margin-left: 12px;
  margin-top: 12px;
  background: #f0f0f0;
  border-radius: 2px;
  font-weight: 500;
  font-size: 11px;
`;

export const AppButton = styled(Set)`
  width: 60px;
  margin-right: 12px;
`;

export const FIcon = styled.div`
  width: 45px;
  height: 45px;
  margin-top: 8px;
  margin-left: 85px;
  background-color: #c4c4c4;
  border-radius: 100%;
`;

export const Match = styled.div`
  width: 19px;
  height: 22px;
  margin-top: 20px;
  font-weight: 600;
  font-size: 16px;
`;
export const SIcon = styled(FIcon)`
  margin-left: 0px;
  margin-right: 85px;
`;

export const TeamName = styled.div`
  width: 80px;
  height: 15px;
  margin-top: 4px;
  margin-left: 70px;
  font-weight: 500;
  font-size: 11px;
  line-height: 15px;
`;

export const TeamName2 = styled(TeamName)`
  margin-left: 0;
  margin-right: 48px;
`;

export const Apply = styled.div`
  width: 296px;
  height: 46px;
  margin-left: 12px;
  margin-top: 28px;
  padding: 12px 116px;
  background-color: #0BFF0B;
  border-radius: 2px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #FFFFFF;
`;
