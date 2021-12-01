import React, { FC, useState } from "react";
import * as S from "./style";
import UseClubInfo from "../../../util/hooks/clubInfo";
import { ageOption, genderOption } from "../../../constance/option";
import { ClubInfoResponseType } from "../../../constance/clubInfo";

const ClubInfo: FC = () => {
  const { state, setState } = UseClubInfo();
  const { clubInfo } = state;
  const {
    name,
    description,
    sns,
    area,
    cycle,
    gender,
    sub_profile,
    main_profile,
  } = clubInfo;

  return (
    <>
      <S.ProfileContainer imgSrc={main_profile}>
        <S.ProfileImg src={sub_profile} alt="클럽 프로필 이미지" />
      </S.ProfileContainer>
      <S.ClubInfoFixContainer>
        <S.FixBox>
          <S.TitleFont>동호회명</S.TitleFont>
          <S.BoldFont>{name}</S.BoldFont>
        </S.FixBox>
        <S.FixBox>
          <S.TitleFont>동호회 소개(100자 이내)</S.TitleFont>
          <S.IntroFont>{description}</S.IntroFont>
        </S.FixBox>
        <S.FixBox>
          <S.TitleFont>동호회 SNS</S.TitleFont>
          <S.BoldFont>{sns}</S.BoldFont>
        </S.FixBox>
        <S.FixBox>
          <S.TitleFont>동호회 지역</S.TitleFont>
          <S.LocationGpsContainer>
            <span>{area}</span>
          </S.LocationGpsContainer>
        </S.FixBox>
        <S.FixBox>
          <S.TitleFont>시합주기(선택)</S.TitleFont>
          <S.BoldFont>{cycle}</S.BoldFont>
        </S.FixBox>
        <S.FixBox>
          <S.TitleFont>성별 설정(선택)</S.TitleFont>
          <S.BoldFont>{gender}</S.BoldFont>
        </S.FixBox>
      </S.ClubInfoFixContainer>
    </>
  );
};

export default ClubInfo;
