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
  const dispatch = useDispatch();
  const [logoImg, setLogoImg] = useState(CameraImg);
  const changeLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) {
      return;
    }
    setLogoImg(URL.createObjectURL(e.target.files[0]));
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
          <S.LogoImageWrapper htmlFor="logoImg">
            <img
              src={logoImg}
              alt=""
              style={logoImg ? { display: "none" } : { display: "block" }}
            />
          </S.LogoImageWrapper>
          <input
            type="file"
            id="logoImg"
            style={{ display: "none" }}
            onChange={changeLogo}
          />
          <S.InputTitle>동호회 배경사진</S.InputTitle>
          <S.BackgroundImageWrapper htmlFor="BackgroundImg">
            <img src={CameraImg} alt="" />
          </S.BackgroundImageWrapper>
          <input type="file" id="BackgroundImg" style={{ display: "none" }} />
        </S.ImageWrapper>
        <S.NextPage onClick={onClick}>건너뛰기</S.NextPage>
      </S.ClubEstblImageWrapper>
    </>
  );
};

export default ClubEstblImage;
