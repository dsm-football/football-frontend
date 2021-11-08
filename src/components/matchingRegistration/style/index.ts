import styled from "styled-components";
import { GpsIcon, MoreIcon } from "../../../assets";
import { color } from "../../../style";

export const MainWrapper = styled.div`
  width: 100%; ;
`;

export const MatchingRegistrationHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1e201d;
  color: ${color.main};
`;

export const SelectSoccerKindWrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SelectSoccerKindBtn = styled.button`
  width: 55%;
  height: 137px;
  color: white;
  background-color: ${color.main};
  cursor: pointer;
  border: none;
  font-size: 30px;
  font-weight: bolder;
  border-radius: 6px;

  & + & {
    margin-top: 15px;
  }
`;

export const DescriptionFont = styled.p`
  color: #c4c4c4;
  font-size: 14px;
  text-align: center;
  margin-top: 75px;
`;

export const MatchingInfoList = styled.div`
  width: 100%;
  margin-top: 65px;
`;

export const MatchingInfoWrapper = styled.div`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #f3f3f3;

  & + & {
    margin-top: 18px;
  }
`;

export const MatchingInfo = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

export const MatchingInfoTitleFont = styled.span`
  font-size: 16px;
  font-weight: bolder;
`;

export const MatchingInfoSelect = styled.select`
  width: 150px;
  height: 25px;
  border: none;
  font-size: 16px;
  background-color: white;
  color: black;
  text-align: right;
  padding-right: 40px;

  -webkit-appearance: none;
  -moz-appearance: none;

  background-image: url(${MoreIcon});
  background-repeat: no-repeat;
  background-position: calc(100% - 10px) center;
`;

export const CalendarInput = styled.div`
  border: none;
  width: 150px;
  height: 25px;
  border: none;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  padding-left: 16px;

  -webkit-appearance: none;
  -moz-appearance: none;

  background-image: url(${MoreIcon});
  background-repeat: no-repeat;
  background-position: calc(100% - 10px) center;
`;

export const GpsInput = styled.div`
  width: 150px;
  height: 25px;
  border: none;
  padding-left: 16px;
  font-size: 16px;
  background-color: white;
  color: black;

  -webkit-appearance: none;
  -moz-appearance: none;

  background-image: url(${GpsIcon});
  background-repeat: no-repeat;
  background-position: calc(100% - 5px) center;
`;

export const MatchingInfoCheckWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  bottom: 25px;
  z-index: -1;
`;

export const Directive = styled.p`
  color: #c4c4c4;
  font-size: 14px;
  text-align: center;
  margin-bottom: 30px;
`;

export const MatchingInfoCheckBtn = styled.button`
  width: 90%;
  height: 54px;
  border-radius: 6px;
  font-size: 16px;
  color: white;
  background-color: ${color.main};
  cursor: pointer;
  border: none;
`;

export const MatchingInfoInput = styled.input`
  width: 150px;
  height: 25px;
  border: none;
  font-size: 16px;
  background-color: white;
  color: black;
  text-align: right;
  padding-right: 40px;

  -webkit-appearance: none;
  -moz-appearance: none;

  background-image: url(${MoreIcon});
  background-repeat: no-repeat;
  background-position: calc(100% - 10px) center;
`;
