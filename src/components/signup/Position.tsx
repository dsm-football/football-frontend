import React from "react";
import { useDispatch } from "react-redux";
import { setPosition, setPage } from "../../modules/redux/action/signup";
import * as S from "./style";
const Position = () => {
  const dispatch = useDispatch();

  const dispatchPosition = (position_id: number) => {
    dispatch(setPosition(position_id));
    dispatch(setPage(4));
  };
  return (
    <>
      <S.SignupWrapper>
        <S.CardWrapper>
          <S.SignupCard onClick={() => dispatchPosition(1)}>
            골키퍼
          </S.SignupCard>
          <S.SignupCard onClick={() => dispatchPosition(2)}>
            공격수
          </S.SignupCard>
          <S.SignupCard onClick={() => dispatchPosition(3)}>
            수비수
          </S.SignupCard>
        </S.CardWrapper>
        <span>포지션을 선택해주세요</span>
      </S.SignupWrapper>
    </>
  );
};

export default Position;
