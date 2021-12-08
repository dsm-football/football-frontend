import React from "react";
import * as S from "./style";
import { GpsIcon } from "../../assets";
import Map from "./Map/Map";
import { useDispatch } from "react-redux";
import { setPage, setArea } from "../../modules/redux/action/signup";
const Area = () => {
  const dispatch = useDispatch();

  const dispatchArea = () => {
    dispatch(setPage(6));
    dispatch(setArea("대마고"));
  };
  return (
    <S.SignupWrapper>
      <S.MapSignupTitle>회원 지역</S.MapSignupTitle>
      <S.MapWrapper>
        <Map />
      </S.MapWrapper>
      <span>위치를 설정해주세요</span>
      <S.NextPage onClick={dispatchArea}>다음</S.NextPage>
    </S.SignupWrapper>
  );
};

export default Area;
