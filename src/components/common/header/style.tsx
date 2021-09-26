import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #c4c4c4;
  justify-content: space-between;

  & div {
    display: flex;
    align-items: center;
  }
`;

export const Logo = styled.div`
  width: 70px;
  height: 40px;
  background-color: white;
  margin-left: 20px;
`;

export const ListContainer = styled.div`
  width: 24px;
  height: 24px;
  background-color: white;
  margin-right: 20px;
`;

// pageMoveHeader

export const PageMoveHeaderWrapper = styled(HeaderWrapper)`
  height: 50px;
  background-color: #1e201d;
  box-sizing: border-box;
  padding: 0 7%;
`;
export const PageMoveTitle = styled.div`
  height: 25px;
  font-size: 18px;
  font-weight: 700;
  color: #0bff0b;
  margin: 0 5%;
`;

export const PageMove = styled(PageMoveTitle)`
  font-weight: 500;
  color: white;
  margin: 0;
`;
