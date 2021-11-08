import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserAge, setPage } from "../../modules/redux/action/signup";
import * as S from "./style";
const Age = () => {
  const dispatch = useDispatch();
  const [userAge, setUsersAge] = useState(0);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsersAge(e.target.value as any);
  };
  const dispatchAge = () => {
    dispatch(setUserAge(userAge));
    dispatch(setPage(2));
  };
  return (
    <>
      <S.InputSignupWrapper>
        <S.InputWrapper>
          <S.Input type="number" onChange={onChange} value={userAge} />
          <span>나이를 입력하세요</span>
        </S.InputWrapper>
        <S.NextPage
          onClick={() => {
            dispatchAge();
          }}
        >
          다음
        </S.NextPage>
      </S.InputSignupWrapper>
    </>
  );
};

export default Age;
