import React, { FC, useState } from "react";
import * as S from "./style";
import UseClubInfo from "../../../util/hooks/clubInfo";
import { ageOption, genderOption } from "../../../constance/option";
import { ClubInfoResponseType } from "../../../constance/clubInfo";

const ClubInfo: FC = () => {
  const { state, setState } = UseClubInfo();
  const { clubInfo } = state;
  const [clubInfoValue, setClubInfoValue] =
    useState<ClubInfoResponseType>(clubInfo);
  const {
    name,
    description,
    sns,
    area,
    cycle,
    gender,
    sub_profile,
    main_profile,
  } = clubInfoValue;

  return (
    <>
      <S.ProfileContainer imgSrc={main_profile}>
        <S.ProfileImg src={sub_profile} alt="클럽 프로필 이미지" />
      </S.ProfileContainer>
      <S.ClubInfoFixContainer>
        <S.FixBox>
          <S.TitleFont>동호회명</S.TitleFont>
          <S.BoldFixInput
            value={name}
            onChange={(e) => {
              setClubInfoValue({
                ...clubInfoValue,
                name: e.target.value,
              });
            }}
          />
        </S.FixBox>
        <S.FixBox>
          <S.TitleFont>동호회 소개(100자 이내)</S.TitleFont>
          <S.IntroFixInput
            value={description}
            onChange={(e) => {
              setClubInfoValue({
                ...clubInfoValue,
                description: e.target.value,
              });
            }}
          />
        </S.FixBox>
        <S.FixBox>
          <S.TitleFont>동호회 SNS</S.TitleFont>
          <S.FixInput
            value={sns}
            onChange={(e) => {
              setClubInfoValue({
                ...clubInfoValue,
                sns: e.target.value,
              });
            }}
          />
        </S.FixBox>
        <S.FixBox>
          <S.TitleFont>동호회 지역</S.TitleFont>
          <S.LocationGpsContainer>
            <span>{clubInfo.area}</span>
          </S.LocationGpsContainer>
        </S.FixBox>
        <S.FixBox>
          <S.TitleFont>동호회 정원(현재 정원:25)</S.TitleFont>
          <S.BoldFixInput />
        </S.FixBox>
        <S.FixBox>
          <S.TitleFont>시합주기(선택)</S.TitleFont>
          <S.BoldFixInput
            value={cycle}
            onChange={(e) => {
              setClubInfoValue({
                ...clubInfoValue,
                cycle: e.target.value,
              });
            }}
          />
        </S.FixBox>
        <S.FixBox>
          <S.TitleFont>나이대 설정(선택)</S.TitleFont>
          <S.SelectInput>
            {ageOption.map((v, i) => {
              return (
                <option key={i} value={v}>
                  {v}
                </option>
              );
            })}
          </S.SelectInput>
        </S.FixBox>
        <S.FixBox>
          <S.TitleFont>성별 설정(선택)</S.TitleFont>
          <S.SelectInput>
            {genderOption.map((v, i) => {
              return (
                <option key={i} value={v}>
                  {v}
                </option>
              );
            })}
          </S.SelectInput>
        </S.FixBox>
      </S.ClubInfoFixContainer>
    </>
  );
};

export default ClubInfo;
