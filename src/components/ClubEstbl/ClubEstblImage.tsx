import React from "react";
import * as S from "./style";
import { Header, PageMoveHeader } from "../common";
import { CameraImg } from "../../assets/index";
const ClubEstblImage = () => {
  return (
    <>
      <Header />
      <PageMoveHeader />
      <S.ClubEstblImageWrapper>
        <S.InputTitle>동호회 로고</S.InputTitle>
        <S.LogoImageWrapper>
          <img src={CameraImg} alt="" />
        </S.LogoImageWrapper>
        <S.InputTitle>동호회 배경사진</S.InputTitle>
        <S.BackgroundImageWrapper>
          <img src={CameraImg} alt="" />
        </S.BackgroundImageWrapper>
      </S.ClubEstblImageWrapper>
    </>
  );
};

export default ClubEstblImage;
