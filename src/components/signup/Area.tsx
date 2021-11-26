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
    dispatch(setArea("대덕소프트웨어마이스터고등학교"));
  };
  return (
    <S.SignupWrapper>
      <S.MapSignupTitle>회원 지역</S.MapSignupTitle>
      <S.MapWrapper>
        <S.MapTitle>
          <h4>장소</h4>
          <span>서울 00초등학교</span>
          <img src={GpsIcon} alt="" />
        </S.MapTitle>
        <Map />
      </S.MapWrapper>
      <span>위치를 설정해주세요</span>
      <S.NextPage onClick={dispatchArea}>다음</S.NextPage>
    </S.SignupWrapper>
  );
};

export default Area;
