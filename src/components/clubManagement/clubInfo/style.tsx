import styled from "styled-components";

export const ProfileContainer = styled.div<{ imgSrc: string }>`
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url(${(props) => props.imgSrc});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  transform: translateY(50%);
  bottom: 0;
  position: absolute;
`;

export const ClubInfoFixContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-top: 60px;
`;

export const FixBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 25px;
`;

export const TitleFont = styled.span`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const BoldFont = styled.span`
  width: 95%;
  height: 45px;
  background-color: #c4c4c4;
  border-radius: 5px;
  font-size: 16px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  border: none;
`;

export const FixFont = styled.span`
  width: 95%;
  height: 45px;
  background-color: #c4c4c4;
  border-radius: 5px;
  font-size: 12px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  border: none;
`;

export const IntroFont = styled.span`
  width: 95%;
  height: 70px;
  background-color: #c4c4c4;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  font-size: 12px;
  border: none;
`;

export const LocationGpsContainer = styled.div`
  width: 95%;
  height: 45px;
  background-color: #c4c4c4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  border-radius: 5px;

  & span {
    font-size: 16px;
  }
`;
