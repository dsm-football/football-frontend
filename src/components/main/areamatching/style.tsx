import styled from "styled-components";

export const Matching = styled.div`
  width: 196px;
  height: 25px;
  background-color: white;
  margin-left: 20px;
  margin-top: 190px;
  font-weight: 600;
`;

export const Calendars = styled.div`
  width: 100%;
  height: 60px;
  margin-bottom: 10px;
  background-color: #0bff0b;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Dates = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  padding-top: 8px;
  text-align: center;
  cursor: pointer;
`;

export const Font = styled.div`
  font-weight: 500;
  margin-bottom: -15px;
`;

export const Areas = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
`;

export const ApplicationList = styled.div`
  width: 100%;
  height: 410px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Application = styled.div`
  width: 320px;
  height: 190px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  margin-bottom: 12px;
  & div {
    display: flex;
  }
  & .a {
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

export const FIcon = styled.img`
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

export const TeamNameList = styled.div`
  width: 100%;
  display: flex;
  padding-left: 70px;
`;

export const TeamName = styled.div`
  margin-top: 4px;
  font-weight: 500;
  font-size: 11px;
  text-align: center;
`;

export const TeamName2 = styled(TeamName)`
  padding-left: 65px;
`;

export const Apply = styled.div`
  width: 296px;
  height: 46px;
  margin-left: 12px;
  margin-top: 28px;
  margin-bottom: 10px;
  padding: 12px 116px;
  background-color: #0bff0b;
  border-radius: 2px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  cursor: pointer;
`;
