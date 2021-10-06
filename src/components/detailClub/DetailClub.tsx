import React from "react";
import { LocationIcon } from "../../assets";
import * as S from "./style";

const DetailClub = () => {
  return (
    <S.MainWrapper>
      <S.BannerWrapper>
        <S.BannerImg />
        <S.ProfileImg />
      </S.BannerWrapper>
      <S.ClubInfoWrapper>
        <S.ClubLocation>
          <S.ClubLocationIcon src={LocationIcon} alt="LocationIcon" />
          서울시 노원구 하계동
        </S.ClubLocation>
      </S.ClubInfoWrapper>
    </S.MainWrapper>
  );
};

export default DetailClub;
