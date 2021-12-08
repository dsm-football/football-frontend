import styled from "styled-components";
import { bannerImg } from "../../assets";

export const Back = styled.div`
  width: 100%;
  height: 135px;
  display: flex;
  justify-content: space-around;
  background-image: url(${bannerImg});
  background-size: cover;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 75px;
`;

export const Title = styled.div`
  height: 25px;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
  display: flex;
  justify-content: space-around;
`;

export const Rate = styled.div`
  width: 150px;
  height: 16px;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
  display: flex;
  justify-content: space-around;
`;

export const Image = styled.img`
  width: 85px;
  height: 85px;
  background: #ebebeb;
  border-radius: 50%;
  margin-top: 30px;
`;

export const Information = styled.div`
  width: 70px;
  height: 24px;
  margin-top: 20px;
  margin-left: 20px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
`;

export const List = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding-left: 20px;
`;

export const Detail = styled.div`
  height: 40vh;
  font-weight: 600;
  font-size: 14px;
  line-height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Option = styled.div`
  width: 70px;
  height: 24px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  margin-left: 20px;
  margin-top: 30px;
`;

export const OptionDiv = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

export const OptionList = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ebebeb;
  border-radius: 5px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

export const Apply = styled.div`
  width: 320px;
  height: 55px;
  background-color: #0bff0b;
  border-radius: 6px;
  margin-left: 20px;
  padding-top: 16px;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
`;

export const Emotion = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  margin-left: 30px;
`;

export const OptiaonName = styled.div`
  width: 100px;
  height: 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #000000;
`;
