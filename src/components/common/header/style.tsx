import styled from "styled-components";
import {color} from "../../../style";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${color.main};

  & div {
    display: flex;
    align-items: center;
  }
`;

export const Logo = styled.img`
  margin-left: 20px;
`;

export const ListContainer = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 20px;
`;

export const PageMoveHeaderWrapper = styled(HeaderWrapper)`
  height: 50px;
  background-color: #1e201d;
  justify-content: center;
`;

export const PageMoveTitle = styled.div`
  height: 25px;
  font-size: 18px;
  font-weight: 700;
  color: #0bff0b;
  margin: 0 5%;
`;
