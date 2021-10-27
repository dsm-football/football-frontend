import styled from "styled-components";

export const Split = styled.div`
  width: 100%;
  height: 10px;
  background-color: #f0f0f0;
`;

export const RankTitle = styled.div`
  width: 150px;
  height: 25px;
  margin: 20px 0 14px 20px;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
`;

export const AreaRank = styled.div`
  width: 320px;
  height: 24px;
  margin: 10px 0 15px 20px;
  background-color: #e8e8e8;
  border-radius: 5px;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  justify-content: space-between;
  display: flex;
  & div{
    padding-top: 5px;
    padding-right: 50px;
  }
`;

export const AllRank = styled.div`
  width: 160px;
  height: 24px;
  border-radius: 5px;
  padding-left: 50px;
  padding-top: 5px;
  text-align: center;
  background-color: #0BFF0B;
  display: flex;
  justify-content: space-between;
`;

export const Myteam = styled.div`
  width: 320px;
  height: 84px;
  margin-left: 20px;
  display: flex;
  background-color: #e8e8e8;
  border-radius: 10px;
  padding-top: 12px;
  & div{
    display: flex;
    justify-content: space-evenly;
  }
`;

export const TeamLogo = styled.div`
  width: 60px;
  height: 60px;
  background-color: #c4c4c4;
  border-radius: 50%;
  margin: 0 12px;
`

export const TeamName = styled.div`
  width: 60px;
  height: 20px;
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
  margin-top: 10px;
`;

export const Rank = styled.div`
  width: 130px;
  height: 19px;
  font-size: 14px;
  font-weight: 00;
  line-height: 20px;
  margin-top: 30px;
  margin-left: -65px;
`;

export const AllCheck = styled.div`
  width: 320px;
  height: 20px;
  margin-top: 42px;
  margin-left: 20px;
  padding-bottom: 2px;
  justify-content: space-between;
  text-align: center;
  display: flex;
  border-bottom: 1px solid #f3f3f3;
  & h1 {
    width: 46px;
    height: 14px;
    font-weight: normal;
    font-size: 10px;
    line-height: 14px;
    display: inline-flex;
    text-align: center;
    margin-right: 100px;
  }
  & h2 {
    width: 20px;
    height: 14px;
    font-weight: normal;
    font-size: 10px;
    line-height: 14px;
    text-align: center;
    display: inline-flex;
  }
`;

export const Etc = styled.div`
  width: 20px;
  height: 14px;
  text-align: center;
  margin-left: 10px;
  font-weight: normal;
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  display: inline-block;
`;

export const Etcs = styled(Etc)`
  width: 10px;
`;

export const Ranks = styled.div`
  width: 360px;
  height: 10%;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  margin-top: 10px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
`
