import styled from "styled-components";
import { color } from "../../../style";

export const MainWrapper = styled.div`
  width: 100%;

  & .clubIntro {
    border-bottom: 10px solid #f0f0f0;
  }
`;

export const BannerWrapper = styled.div`
  width: 100%;
  height: 170px;
  position: relative;
`;

export const BannerImg = styled.img`
  width: 100%;
  height: 170px;
  position: absolute;
`;

export const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  transform: translateY(50%);
  margin-left: 20px;
`;

export const ClubLocation = styled.div`
  width: 100%;
  text-align: right;
  font-size: 12px;
  padding-right: 20px;
  margin-top: 10px;

  & img {
    width: 10px;
    margin-right: 5px;
  }
`;

export const ClubInfoWrapper = styled.div`
  width: 100%;
  margin-top: 35px;
  padding: 0px 20px;

  & .clubName {
    font-size: 18px;
    font-weight: 600;
  }

  & .clubDetailInfo {
    margin-top: 6px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    & div {
      & span {
        padding: 4px 8px;
        background-color: #e5e5e5;
        font-size: 11px;
        margin-right: 6px;
        border-radius: 2px;
      }
    }
  }
`;

export const OneLineIntroduction = styled.div`
  margin-top: 14px;
  font-size: 12px;
  padding: 0px 20px;
  margin-bottom: 20px;
`;

export const MatchList = styled.div`
  margin-top: 18px;
  width: 100%;
  padding: 0px 20px;

  & .matchListHeader {
    font-weight: 600;
    font-size: 16px;
  }

  & .matchScroll {
    margin-top: 14px;
  }
`;

export const MemberList = styled.div`
  margin-top: 20px;
  width: 100%;
  padding: 0px 20px;

  & .memberTitle {
    font-size: 16px;
    font-weight: 600;
  }

  & .memberList {
    margin-top: 14px;
    width: 100%;
    height: 270px;
    overflow-y: scroll;

    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export const MemberContainer = styled.div`
  width: 100%;
  height: 64px;
  background-color: #f3f3f3;
  border-radius: 5px;
  display: flex;
  align-items: center;
  color: black & + & {
    margin-top: 10px;
  }

  & img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-left: 12px;
  }

  & div {
    display: flex;
    flex-direction: column;
    margin-left: 15px;

    & .memberMainInfo {
      font-size: 16px;
      color: black;
    }

    & .memberOtherInfo {
      font-size: 11px;
      color: black;
    }
  }
`;

export const ApplicantBtn = styled.button`
  width: calc(100% - 40px);
  height: 55px;
  border-radius: 6px;
  background-color: ${color.main};
  color: white;
  border: none;
  margin-top: 25px;
  margin-left: 20px;
  font-size: 16px;
  font-weight: 600;
  margin: 25px 0px 16px 20px;
`;
