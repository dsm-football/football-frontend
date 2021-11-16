import React from "react";
import * as S from "./style";
import { CameraImg } from "../../assets/index";
const ClubEstblImage = () => {
  return (
    <>
      <S.ClubEstblImageWrapper>
        <S.ImageWrapper>
          <S.InputTitle>동호회 로고</S.InputTitle>
          <S.LogoImageWrapper>
            <img src={CameraImg} alt="" />
          </S.LogoImageWrapper>
          <S.InputTitle>동호회 배경사진</S.InputTitle>
          <S.BackgroundImageWrapper>
            <img src={CameraImg} alt="" />
          </S.BackgroundImageWrapper>
        </S.ImageWrapper>
        <S.NextPage>건너뛰기</S.NextPage>
      </S.ClubEstblImageWrapper>
    </>
  );
};

export default ClubEstblImage;
