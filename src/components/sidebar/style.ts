import { Link } from "react-router-dom";
import styled from "styled-components";

export const GrayScreen = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const Container = styled.div`
  width: 200px;
  height: 100vh;
  box-sizing: border-box;
  padding: 10vh 30px;
  position: fixed;
  right: 0;
  background-color: white;
  z-index: 1;
`;
export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 5px;
`;
export const UserName = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-right: 5px;
`;
export const UserGrade = styled.div`
  font-size: 15px;
`;
export const UserRecord = styled.div`
  font-size: 14px;
  margin: 0 0 15px 2px;
`;
export const MyPageLink = styled(Link)`
  color: #0bff0b;
  background-color: #1e201d;
  width: 100px;
  height: 30px;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;
export const PageLinkWrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const PageLink = styled(Link)`
  display: block;
  font-size: 20px;
  font-weight: 600;
  color: black;
`;
export const LogoutBtn = styled.div`
  color: #6c6c6c;
  font-size: 14px;
  margin-top: 10vh;
`;
