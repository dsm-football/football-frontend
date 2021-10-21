import React from "react";
import { useDispatch } from "react-redux";
import { setGender, setPage } from "../../modules/redux/action/signup";
import * as S from "./style";
const Position = () => {
  const dispatch = useDispatch();

  const dispatchGender = (gender: string) => {
    dispatch(setGender(gender));
    dispatch(setPage(3));
  };
  return (
    <>
      <S.SignupWrapper>
        <S.CardWrapper>
          <S.GenderCard onClick={() => dispatchGender("1")}>남자</S.GenderCard>
          <S.GenderCard onClick={() => dispatchGender("2")}>여자</S.GenderCard>
        </S.CardWrapper>
        <span>성별을 선택해주세요</span>
      </S.SignupWrapper>
    </>
  );
};

export default Position;
