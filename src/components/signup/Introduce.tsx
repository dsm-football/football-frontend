import React, { useState } from "react";
import * as S from "./style";
import { setPage, setIntroduce } from "../../modules/redux/action/signup";
import { useDispatch } from "react-redux";
const Introduce = () => {
  const [introducestr, setIntroduceStr] = useState("");
  const dispatch = useDispatch();
  const dispatchIntroduce = () => {
    dispatch(setIntroduce(introducestr));
    dispatch(setPage(7));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIntroduceStr(e.target.value);
  };
  return (
    <S.InputSignupWrapper>
      <S.InputWrapper>
        <S.Input type="string" onChange={onChange} value={introducestr} />
        <span>나의 한 줄 소개를 입력해주세요.</span>
      </S.InputWrapper>
      <S.NextPage onClick={() => dispatchIntroduce()}>다음</S.NextPage>
    </S.InputSignupWrapper>
  );
};

export default Introduce;
