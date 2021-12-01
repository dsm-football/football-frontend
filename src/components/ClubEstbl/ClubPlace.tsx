import React from "react";
import * as S from "../signup/style";
import Map from "../signup/Map/Map";
import { GpsIcon } from "../../assets";
import { useDispatch } from "react-redux";
import {
  setAreaCode,
  setPageIndex,
} from "../../modules/redux/action/clubEstbl";
const ClubPlace = () => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(setAreaCode("대덕소프트웨어마이스터고등학교"));
    dispatch(setPageIndex(4));
  };
  return (
    <S.SignupWrapper>
      <S.MapSignupTitle>회원 지역</S.MapSignupTitle>
      <S.MapWrapper>
        <S.MapTitle>
          <h4>장소</h4>
          <span>대덕소프트웨어마이스터고등학교</span>
          <img src={GpsIcon} alt="" />
        </S.MapTitle>
        <Map />
      </S.MapWrapper>
      <span>위치를 설정해주세요</span>
      <S.NextPage onClick={onClick}>다음</S.NextPage>
    </S.SignupWrapper>
  );
};

export default ClubPlace;
