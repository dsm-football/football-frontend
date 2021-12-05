import styled from "styled-components";

export const Title = styled.div`
  width: 200px;
  height: 28px;
  margin: 20px 20px;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
`;

export const Divide = styled.div`
  width: 100%;
  height: 4px;
  background-color: #f3f3f3;
`;

export const Find = styled.div`
  width: 100%;
  height: 35px;
  padding: 8px 20px;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

export const All = styled.div`
  width: 60px;
  height: 20px;
  font-size: 14px;
  line-height: 20px;
`;

export const Period = styled.select`
  width: 80px;
  height: 20px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #5b5b5b;
`;

export const Options = styled.div`
  width: 100%;
  height: 60px;
  background-color: #f5f5f5;
  display: flex;
  overflow-x: scroll;
  padding: 10px 20px;
`;

export const SelectBox = styled.div`
  width: 120px;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  margin-right: 10px;
`;
    width: 100%;
    height: 60px;
    background-color: #F5F5F5;
    display: flex;
    overflow-x:scroll;
    padding: 10px 20px;
`

export const SelectBox = styled.div`
    width: 120px;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    margin-right: 10px;
`

export const Defulat = styled.div`
  width: 30px;
  height: 20px;
  font-size: 14px;
  line-height: 20px;
  margin-top: 10px;
`;

export const Choice = styled.select`
  width: 55px;
  height: 25px;
  border: none;
  margin-top: 7px;
  font-size: 14px;
  line-height: 20px;
  color: #5b5b5b;
  cursor: pointer;
`;

export const Clubs = styled.div`
  width: 320px;
  height: 140px;
  border: 1px solid #efefef;
  border-radius: 10px;
  margin-top: 12px;
  cursor: pointer;
`;

export const Explain = styled.div`
  width: 70%;
  height: 70px;
`;

export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Top = styled.div`
  width: 100%;
  height: 70px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const ClubImage = styled.img`
  width: 45px;
  height: 45px;
  margin-top: 20px;
  border-radius: 50%;
  background-color: black;
`;

export const ClubName = styled.div`
  width: 240px;
  height: 20px;
  margin-top: 20px;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #121212;
`;

export const ClubExplain = styled.div`
  width: 240px;
  height: 16px;
  font-size: 12px;
  line-height: 16px;
  color: #161616;
`;

export const Selected = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const BoxDiv = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  align-items: center;
  margin-left: 12px;
`;

export const Box = styled.div`
  background-color: #f0f0f0;
  border-radius: 2px;
  padding: 5px 8px;
  font-weight: 500;
  font-size: 11px;
  line-height: 13px;
  color: black;
  & + & {
    margin-left: 5px;
  }
`;

export const Recruit = styled.div`
  background-color: #0bff0b;
  border-radius: 50px;
  font-weight: 500;
  font-size: 11px;
  padding: 5px 8px;
  text-align: center;
  color: black;
`;

export const People = styled(Recruit)`
  width: 50px;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  display: flex;
  align-items: center;

  & img {
    margin-right: 5px;
  }
`;
