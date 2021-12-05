import styled from "styled-components";

export const MainWrapper = styled.div`
  margin-top: 35px;
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  padding: 0 5%;
  justify-content: space-around;
  &div {
    justify-content: center;
  }
`;

export const Profile = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #0bff0b;
`;

export const Modify = styled.button`
  width: 80px;
  height: 36px;
  border: 1px solid #c4c4c4;
  background-color: white;
  border-radius: 3px;
  float: right;
  margin: 10px;
  padding: 8px 14px;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  cursor: pointer;
`;

export const Name = styled.div`
  width: 60px;
  height: 25px;
  margin-top: 20px;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 5px;
  display: flex;
`;

export const Player = styled.div`
  width: 85px;
  height: 28px;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  display: flex;
`;

export const Divs = styled.div`
  width: 100%;
  margin-top: 35px;
`;

export const InputInfo = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: space-between;
  padding: 0px 30px;

  & span {
    font-size: 18px;
    color: #121212;
    font-weight: 600;
  }

  & .info {
    font-weight: 300;
    font-size: 16px;
    color: #121212;
  }

  & + & {
    margin-top: 25px;
  }
`;
