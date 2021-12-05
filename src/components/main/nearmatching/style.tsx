import styled from 'styled-components';
import { bannerImg } from "../../../assets";

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ClubManageBanner = styled.div`
  width: 100%;
  height: 170px;
  background-color: #D6D6D6;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${bannerImg});
  background-size: cover;
`

export const Matching = styled.div`
  width: 196px;
  height: 25px;
  background-color: white;
  margin-top: 10px;
  font-weight: 600;
`

export const Searching = styled.div`
  width: 320px;
  height: 35px;
  margin-top: 10px;
  text-align: center;
  background-color: #F2F2F2;
  justify-content: space-between;
  & div{
    display: flex;
    align-items: center;
  }
`
export const Target = styled.div`
  width: 24px;
  height: 24px;
  margin-left: 10px;
  margin-top: 4px;
`

export const Locate = styled.div`
  height: 20px;
  margin-left: 8px;
  font-size: 14px;
  font-weight: 500;
`

export const Select = styled.div`
  height: 20px;
  margin-left: 100px;
  color: #A6A6A6;
  font-size: 14px;
  font-weight: 500;
`

export const Map = styled.div`
  width: 320px;
  height: 180px;
  display: flex;
  text-align: center;
  background-color: #C4C4C4;
  & div{
    display: flex;
    align-items: center;
  }
`

export const Point1 = styled.div`
  width: 28px;
  height: 40px;
  margin-left: 70px;
`