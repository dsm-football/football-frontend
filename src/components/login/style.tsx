import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  padding: 10% 0 5% 0;
  font-size: 14px;
`;
export const LoginHeader = styled.h1`
  font-size: 48px;
`;
export const LoginBox = styled(Link)`
  width: 305px;
  height: 92px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  padding-right: 30px;
  align-items: center;
  & div {
    width: 36px;
    height: 36px;
  }
  & span {
    font-weight: 600;
  }
`;
export const LoginExplanation = styled.div`
  text-align: center;
  & span {
    color: #4285f4;
  }
`;
