import React, { useState } from "react";
import * as S from "./style";
import { CameraImg } from "../../assets/index";
import { useDispatch } from "react-redux";
import {
  setAreaCode,
  setMainProfile,
  setPageIndex,
  setSubProfile,
} from "../../modules/redux/action/clubEstbl";

const ClubEstblImage = () => {
  const checkImg = "https://t1.daumcdn.net/cfile/blog/99A253505B3203EC22";
  const dispatch = useDispatch();
  const [logoImg, setLogoImg] = useState(CameraImg);
  const [backgroundImg, setBackgroundImg] = useState(CameraImg);
  const changeLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) {
      return;
    }
    setLogoImg(checkImg);
  };
  const changeBackground = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) {
      return;
    }
    setBackgroundImg(checkImg);
  };
  const onClick = () => {
    dispatch(setMainProfile("손채건 벌레년"));
    dispatch(setSubProfile("ㅇㅈ? ㅇ ㅇㅈ"));
    dispatch(setAreaCode("서울"));
    dispatch(setPageIndex(3));
  };
  return (
    <>
      <S.ClubEstblImageWrapper>
        <S.ImageWrapper>
          <S.LogoImageWrapper
            htmlFor="logoImg"
            style={
              logoImg === CameraImg ? { display: "flex" } : { display: "none" }
            }
          >
            <img
              src={logoImg}
              alt=""
              style={
                logoImg === CameraImg
                  ? { display: "block" }
                  : { display: "none" }
              }
            />
          </S.LogoImageWrapper>
          <input
            type="file"
            id="logoImg"
            style={{ display: "none" }}
            onChange={changeLogo}
          />
          <S.InputTitle>동호회 배경사진</S.InputTitle>
          <S.BackgroundImageWrapper
            htmlFor="BackgroundImg"
            style={
              backgroundImg === CameraImg
                ? { display: "flex" }
                : { display: "none" }
            }
          >
            <img src={backgroundImg} alt="" />
          </S.BackgroundImageWrapper>
          <input type="file" id="BackgroundImg" style={{ display: "none" }} />
        </S.ImageWrapper>
        <S.NextPage onClick={onClick}>건너뛰기</S.NextPage>
      </S.ClubEstblImageWrapper>
    </>
  );
};

export default ClubEstblImage;
