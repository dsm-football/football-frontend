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
export const Calendar = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 8px;
  align-items: center;
  background-color: #f3f3f3;
  justify-content: space-between;
  & div {
    display: inline-block;
    align-items: center;
  }
`;

export const Date = styled.div`
  width: 100%;
  height: 30px;
  align-items: center;
  background-color: #f3f3f3;
  justify-content: space-between;
  & div {
    display: inline-block;
    align-items: center;
  }
`;

export const Area = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 8px;
  align-items: center;
  background-color: white;
  justify-content: space-between;
  & div {
    display: inline-block;
    align-items: center;
  }
`;

export const Sunday = styled.div`
  width: 16px;
  height: 19px;
  margin-left: 24px;
  padding-top: 8px;
  font-size: 14px;
`;

export const Day = styled(Sunday)`
  margin-left: 34px;
`;

export const First = styled.div`
  width: 20px;
  height: 25px;
  margin-left: 20px;
  font-size: 18px;
  font-weight: 600;
`;

export const Rest = styled(First)`
  margin-left: 30px;
`;

export const All = styled.div`
  height: 20px;
  margin-left: 15px;
  margin-top: 2px;
  font-size: 14px;
  font-weight: 600;
`;

export const And = styled(All)``;

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
  background-color: #c4c4c4;
  border-radius: 2px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
`;
