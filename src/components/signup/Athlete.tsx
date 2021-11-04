import React from "react";
import { useDispatch } from "react-redux";
import { setAthlete, setPage } from "../../modules/redux/action/signup";
import * as S from "./style";
const Position = () => {
  const dispatch = useDispatch();
  const dispatchAthlete = (athlete: boolean) => {
    dispatch(setAthlete(athlete));
    dispatch(setPage(5));
  };
  return (
    <>
      <S.SignupWrapper>
        <S.ProCardWrapper>
          <S.SignupCard onClick={() => dispatchAthlete(true)}>
            선수출신
          </S.SignupCard>
          <S.SignupCard onClick={() => dispatchAthlete(false)}>
            비선수출신
          </S.SignupCard>
        </S.ProCardWrapper>
      </S.SignupWrapper>
    </>
  );
};

export default Position;
