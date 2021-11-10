import styled from "styled-components";
import { bannerImg } from "../../assets";
import { color } from "../../style";

export const ClubManageBanner = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${bannerImg});
  background-position: center;

  b {
    font-size: 20px;
    font-weight: 600;
  }
`;

export const ClubManageList = styled.div`
  width: 100%;
  height: 40px;
  background-color: #1b191c;
  color: ${color.main};
  font-size: 16px;

  & ul {
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;

    & li {
      height: 100%;
      display: flex;
      align-items: center;
      margin-left: 23px;
      list-style: none;

      :first-child {
        font-weight: bold;
        border-bottom: 2px solid ${color.main};
      }
    }
  }
`;
