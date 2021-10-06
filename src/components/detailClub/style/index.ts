import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
`;

export const BannerWrapper = styled.div`
  width: 100%;
  height: 170px;
  background-color: #6a6a6a;
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
  background-color: #c4c4c4;
  position: absolute;
  bottom: 0;
  transform: translateY(50%);
  margin-left: 20px;
`;

export const ClubInfoWrapper = styled.div`
  width: 100%;
`;

export const ClubLocation = styled.div`
  display: flex;
  justify-content: end;
  font-size: 12px;
  margin-right: 20px;
  margin-top: 10px;
`;

export const ClubLocationIcon = styled.img`
  width: 10px;
  margin-right: 5px;
`;
